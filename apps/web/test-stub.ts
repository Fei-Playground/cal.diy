/**
 * No-op stand-in for `vitest`, `vitest-mock-extended` and `vitest-fetch-mock`,
 * wired in via `turbopack.resolveAlias` in next.config.ts — mirrors the existing
 * sentry-stub.ts / posthog-stub.ts approach for slim-removed packages.
 *
 * The vitest toolchain was dropped to slim the DB-less preview install, but one
 * colocated `*.test.ts` (apps/web/pages/api/book/recurring-event.test.ts) and the
 * `@calcom/testing` helpers it pulls in still reference these modules, so they leak
 * into the Next route graph. These inert exports let `next build` resolve the chain;
 * the test route is never executed in the running app.
 */
/* eslint-disable @typescript-eslint/no-explicit-any */
const noop: any = () => chain;
// Callable + infinitely-chainable proxy so any `vi.fn().mockReturnValue()…` or
// `expect(x).toBe()` access shape resolves at build time.
const chain: any = new Proxy(noop, {
  get: () => chain,
  apply: () => chain,
});

// vitest
export const describe: any = noop;
export const it: any = noop;
export const test: any = noop;
export const expect: any = chain;
export const vi: any = chain;
export const vitest: any = chain;
export const beforeEach: any = noop;
export const afterEach: any = noop;
export const beforeAll: any = noop;
export const afterAll: any = noop;

// vitest-mock-extended
export const mockDeep: any = () => chain;
export const mockReset: any = noop;
export const mock: any = () => chain;

// vitest-fetch-mock (default factory) / namespace default import
export default chain;
