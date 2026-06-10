"use client";

import { QueryClientProvider } from "@tanstack/react-query";

import { getQueryClient } from "./query-client";
import { trpc } from "./trpc";
import { trpcClient } from "./trpc-client";

type Props = {
  children: React.ReactNode;
};

export const TrpcProvider = ({ children }: Props) => {
  // Per-request on the server, singleton in the browser — see getQueryClient.
  const queryClient = getQueryClient();
  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </trpc.Provider>
  );
};
