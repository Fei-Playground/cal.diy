// Slim MVP stub for @sentry/nextjs — no error monitoring. Explicit named
// exports (bundlers need static names; `import * as Sentry` reads this object).
const noop = () => undefined;
const passthrough = (x) => x;
const span = { end: noop, setStatus: noop, setAttribute: noop, setAttributes: noop };
const scope = { setTag: noop, setTags: noop, setContext: noop, setUser: noop, setExtra: noop, setLevel: noop };

const startSpan = (_opts, cb) => (typeof _opts === "function" ? _opts(span) : typeof cb === "function" ? cb(span) : undefined);

module.exports = {
  init: noop,
  withSentryConfig: passthrough,
  captureException: noop,
  captureReactException: noop,
  captureMessage: noop,
  captureEvent: noop,
  setUser: noop,
  setContext: noop,
  setTag: noop,
  setTags: noop,
  setExtra: noop,
  setExtras: noop,
  addBreadcrumb: noop,
  startSpan,
  startSpanManual: (_opts, cb) => (typeof cb === "function" ? cb(span) : undefined),
  startInactiveSpan: () => span,
  withScope: (cb) => (typeof cb === "function" ? cb(scope) : undefined),
  getCurrentScope: () => scope,
  getActiveSpan: () => undefined,
  getClient: () => undefined,
  flush: async () => true,
  close: async () => true,
  metrics: { increment: noop, gauge: noop, distribution: noop, set: noop, timing: noop },
  wrapApiHandlerWithSentry: passthrough,
  captureRouterTransitionStart: noop,
  browserTracingIntegration: () => ({}),
  replayIntegration: () => ({}),
  httpIntegration: () => ({}),
  getDefaultIntegrations: () => [],
};
module.exports.default = module.exports;
