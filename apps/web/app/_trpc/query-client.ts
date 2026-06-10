"use client";

import { QueryClient } from "@tanstack/react-query";

import { TRPCClientError } from "@trpc/client";

const MAX_QUERY_RETRIES = 3;

const isTRPCClientError = (cause: unknown): cause is TRPCClientError<any> => {
  return cause instanceof TRPCClientError;
};

const makeQueryClient = () =>
  new QueryClient({
    // these configurations are copied from "packages/trpc/react/trpc.ts"
    defaultOptions: {
      queries: {
        /**
         * 1s should be enough to just keep identical query waterfalls low
         * @example if one page components uses a query that is also used further down the tree
         */
        staleTime: 1000,
        /**
         * Retry `useQuery()` calls depending on this function
         */
        retry(failureCount, error) {
          if (isTRPCClientError(error) && error.data) {
            const { code } = error.data;
            if (code === "BAD_REQUEST" || code === "FORBIDDEN" || code === "UNAUTHORIZED") {
              // if input data is wrong or you're not authorized there's no point retrying a query
              return false;
            }
          }
          return failureCount < MAX_QUERY_RETRIES;
        },
      },
    },
  });

let browserQueryClient: QueryClient | undefined;

/**
 * Returns a QueryClient that is created fresh per request on the server and
 * reused as a singleton in the browser.
 *
 * A shared module-level client on the server is dangerous: it leaks cache
 * across requests, so during SSR `useQuery` could read data the freshly
 * mounted client doesn't have yet — producing hydration mismatches (e.g. the
 * sidebar user dropdown rendering the user on the server but "Loading…" on the
 * client). Per-request on the server keeps SSR output deterministic.
 */
export const getQueryClient = () => {
  if (typeof window === "undefined") {
    return makeQueryClient();
  }
  if (!browserQueryClient) {
    browserQueryClient = makeQueryClient();
  }
  return browserQueryClient;
};
