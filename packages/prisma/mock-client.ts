/**
 * DB-less preview mock for the Prisma client (MOCK_DB=1, see ./index.ts).
 *
 * Backed by `prismock` — a full in-memory Prisma engine that actually executes
 * queries (where / select / include / relations / writes) against an in-memory
 * store. One seeded dataset (./mock-seed.ts) therefore serves the WHOLE app:
 * every route that queries Prisma gets relationally-correct, properly-shaped
 * data without a Postgres connection.
 *
 * The DMMF is loaded from a prebuilt JSON (scripts/gen-mock-dmmf.mjs) so we
 * don't bundle @prisma/internals into the Next server runtime.
 *
 * Init is lazy and async; every consumer call is already awaited, so the proxy
 * resolves the client on first use and delegates.
 */
import { seedMockDb } from "./mock-seed";

// Single shared in-memory store across all server modules + HMR reloads, so a
// write from one route (e.g. create event type) is visible to reads elsewhere.
// Without this, Next can give each module its own prismock instance and writes
// would silently vanish between actions.
const globalForMock = globalThis as unknown as { __mockPrismaReady?: Promise<any> };

function getClient(): Promise<any> {
  if (!globalForMock.__mockPrismaReady) {
    globalForMock.__mockPrismaReady = (async () => {
      // Dynamic, server-only imports: prismock (and the 23MB DMMF JSON) must
      // never enter the client bundle. They load on first server-side call.
      // @ts-expect-error - deep import has no types
      const { createPrismock } = await import("prismock/build/main/lib/client");
      const { Prisma } = await import("./generated/prisma/client");
      const dmmf = (await import("./mock-dmmf.json")).default;

      const PrismockClass = createPrismock({ ...(Prisma as object), dmmf } as never);
      const pm: any = new PrismockClass();
      // prismock leaves raw SQL unimplemented; return empty rather than throw so
      // pages that issue raw queries (insights, etc.) degrade instead of crashing.
      pm.$queryRaw = async () => [];
      pm.$queryRawUnsafe = async () => [];
      pm.$executeRaw = async () => 0;
      pm.$executeRawUnsafe = async () => 0;
      try {
        await seedMockDb(pm);
      } catch (e) {
        // Seeding is best-effort; a partial seed still beats no boot.
        // eslint-disable-next-line no-console
        console.warn("[MOCK_DB] seed warning:", (e as Error)?.message);
      }
      return pm;
    })();
  }
  return globalForMock.__mockPrismaReady;
}

function modelDelegate(model: string) {
  return new Proxy(
    {},
    {
      get(_t, method: string | symbol) {
        if (typeof method === "symbol") return undefined;
        return async (...args: unknown[]) => {
          const pm = await getClient();
          const delegate = pm[model];
          if (!delegate || typeof delegate[method] !== "function") {
            // Unknown model/method: fall back to a benign empty result.
            return method === "count" ? 0 : method.startsWith("findMany") ? [] : null;
          }
          return delegate[method](...args);
        };
      },
    }
  );
}

export const mockPrisma: unknown = new Proxy(
  {},
  {
    get(_t, prop: string | symbol) {
      if (typeof prop === "symbol") return undefined;
      switch (prop) {
        case "then": // not a thenable
          return undefined;
        case "$transaction":
          return async (arg: unknown) => {
            const pm = await getClient();
            if (Array.isArray(arg)) return Promise.all(arg);
            if (typeof arg === "function") return (arg as (tx: unknown) => unknown)(pm);
            return undefined;
          };
        case "$connect":
        case "$disconnect":
        case "$on":
        case "$use":
          return async () => undefined;
        case "$queryRaw":
        case "$queryRawUnsafe":
          return async () => [];
        case "$executeRaw":
        case "$executeRawUnsafe":
          return async () => 0;
        case "$extends":
        case "$primary":
          return () => mockPrisma;
        default:
          return modelDelegate(prop);
      }
    },
  }
);
