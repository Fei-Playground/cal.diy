# Slim MVP stubs

Local no-op replacements for heavy packages the DB-less preview MVP doesn't
need at runtime. Wired in via `resolutions` in the root `package.json`, so
every workspace that depends on these gets the stub instead of the real
package — cutting install size and time.

| Stubbed package | Real size | Why it's safe to stub |
|---|---|---|
| `@sentry/nextjs` | ~80 MB tree | Error monitoring. No DSN in preview; all calls are no-ops. `withSentryConfig` passes the Next config through unchanged. |
| `@trigger.dev/sdk` | part of ~180 MB | Background jobs. Tasks become no-ops whose `trigger()`/`triggerAndWait()` resolve immediately. |
| `@trigger.dev/build` | — | Build extensions, only used by `trigger.config.ts` (never run by the Next runtime). |

To restore the real packages (e.g. for a production deploy), remove the three
`@sentry`/`@trigger.dev` entries from `resolutions` in the root `package.json`
and run `yarn install`.

The stubs export the exact symbols the codebase imports as **static named
exports** (bundlers can't see through a bare Proxy). If a new import of one of
these packages is added and fails to resolve a symbol, add it to the stub's
`index.js`.
