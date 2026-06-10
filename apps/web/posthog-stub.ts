/**
 * No-op stand-in for `posthog-js`, wired in via `turbopack.resolveAlias` in
 * next.config.ts. The real package (24M) was removed to slim the DB-less
 * preview install. Every `import posthog from "posthog-js"` resolves here.
 *
 * The app only ever calls `posthog.capture(...)` and never initializes PostHog
 * (no API key in preview), so analytics is a no-op regardless. The extra
 * methods below are inert safeguards in case more call sites appear.
 */

const noop = (..._args: unknown[]) => {};

const posthog = {
  init: noop,
  capture: noop,
  identify: noop,
  reset: noop,
  register: noop,
  register_once: noop,
  unregister: noop,
  alias: noop,
  group: noop,
  setPersonProperties: noop,
  opt_in_capturing: noop,
  opt_out_capturing: noop,
  has_opted_out_capturing: () => true,
  isFeatureEnabled: () => false,
  getFeatureFlag: () => undefined,
  onFeatureFlags: noop,
  people: { set: noop, set_once: noop },
};

export default posthog;
