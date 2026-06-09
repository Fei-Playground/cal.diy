# Slim MVP stubs

Local no-op replacements for heavy packages the DB-less preview MVP doesn't
need at runtime. Wired in via `resolutions` in the root `package.json`, so
every workspace that depends on these gets the stub instead of the real
package — cutting install size and time.

| Stubbed package | Why it's safe to stub |
|---|---|
| `@trigger.dev/sdk` | Background jobs. Tasks become no-ops whose `trigger()`/`triggerAndWait()` resolve immediately. Not imported by any browser bundle. |
| `@trigger.dev/build` | Build extensions, only used by `trigger.config.ts` (never run by the Next runtime). |

Each stub ships dual-format (`index.mjs` ESM + `index.js` CJS) with explicit
static named exports, because bundlers can't see through a bare Proxy and the
browser bundle needs static names.

## Why @sentry/nextjs is NOT stubbed

`@sentry/nextjs` is imported by **client/browser** bundles (e.g.
`packages/trpc/server/onErrorHandler.ts`). Turbopack's browser resolver does
not follow a `portal:` symlink pointing outside `node_modules`, so a stubbed
`@sentry/nextjs` resolves server-side but fails the browser build with
`Module not found: Can't resolve '@sentry/nextjs'`. The real package is kept
(~30 MB) for reliability. The `@trigger.dev` stubs are safe only because
nothing imports them from a browser bundle.

To restore the real `@trigger.dev` packages (e.g. for a production deploy),
remove their entries from `resolutions` in the root `package.json` and run
`yarn install`.
