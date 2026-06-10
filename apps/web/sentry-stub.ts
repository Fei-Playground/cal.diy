/**
 * No-op stand-in for `@sentry/nextjs`, wired in via `turbopack.resolveAlias` in
 * next.config.ts. The real package (and its ~210M of transitive deps:
 * @sentry/cli, bundler-plugin, replay, opentelemetry) was removed to slim the
 * DB-less preview install. Every `@sentry/nextjs` import across the monorepo
 * resolves here instead.
 *
 * Behavior is preserved for the only call shapes used in this codebase:
 *  - `startSpan(opts, cb)` and `startSpanManual(opts, cb)` invoke the callback
 *    (they wrap real logic, so they must run it) and return its result.
 *  - `startInactiveSpan` returns a span with the methods call sites use.
 *  - `captureException` / `captureMessage` return an empty event id string.
 *  - everything else is an inert no-op.
 */

type SpanLike = {
  setAttribute: (key: string, value: unknown) => SpanLike;
  setAttributes: (attrs: Record<string, unknown>) => SpanLike;
  setStatus: (status?: unknown) => SpanLike;
  setData: (key: string, value: unknown) => SpanLike;
  updateName: (name: string) => SpanLike;
  end: (endTime?: unknown) => void;
  finish: () => void;
};

function makeSpan(): SpanLike {
  const span: SpanLike = {
    setAttribute: () => span,
    setAttributes: () => span,
    setStatus: () => span,
    setData: () => span,
    updateName: () => span,
    end: () => {},
    finish: () => {},
  };
  return span;
}

export function startSpan<T>(_opts: unknown, callback: (span: SpanLike) => T): T {
  return callback(makeSpan());
}

export function startSpanManual<T>(_opts: unknown, callback: (span: SpanLike, finish: () => void) => T): T {
  return callback(makeSpan(), () => {});
}

export function startInactiveSpan(_opts?: unknown): SpanLike {
  return makeSpan();
}

export function captureException(_error?: unknown, _hint?: unknown): string {
  return "";
}

export function captureReactException(_error?: unknown, _info?: unknown, _hint?: unknown): string {
  return "";
}

export function captureMessage(_message?: unknown, _hint?: unknown): string {
  return "";
}

export function captureRequestError(..._args: unknown[]): void {}

export function captureRouterTransitionStart(..._args: unknown[]): void {}

export function init(_options?: unknown): void {}

export function setUser(_user?: unknown): void {}
export function setTag(_key?: unknown, _value?: unknown): void {}
export function setTags(_tags?: unknown): void {}
export function setContext(_name?: unknown, _context?: unknown): void {}
export function setExtra(_key?: unknown, _value?: unknown): void {}
export function addBreadcrumb(_breadcrumb?: unknown): void {}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function withScope(callback: (scope: any) => any): any {
  const scope: any = new Proxy({}, { get: () => () => scope });
  return callback(scope);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function getCurrentScope(): any {
  return new Proxy({}, { get: () => () => {} });
}

// Integration factories — return inert config objects that `init` ignores.
const integration = (_opts?: unknown) => ({});
export const httpIntegration = integration;
export const prismaIntegration = integration;
export const replayIntegration = integration;
export const browserTracingIntegration = integration;
export const consoleIntegration = integration;
export const extraErrorDataIntegration = integration;

export function flush(_timeout?: number): Promise<boolean> {
  return Promise.resolve(true);
}

export function close(_timeout?: number): Promise<boolean> {
  return Promise.resolve(true);
}

// Metrics namespace — call sites use metrics.count / metrics.distribution.
export const metrics = {
  count: (..._args: unknown[]) => {},
  distribution: (..._args: unknown[]) => {},
  gauge: (..._args: unknown[]) => {},
  set: (..._args: unknown[]) => {},
  timing: (..._args: unknown[]) => {},
  increment: (..._args: unknown[]) => {},
};

// `import * as Sentry from "@sentry/nextjs"` collects the named exports above;
// a default export covers any `import Sentry from "@sentry/nextjs"` usage.
export default {
  startSpan,
  startSpanManual,
  startInactiveSpan,
  captureException,
  captureReactException,
  captureMessage,
  captureRequestError,
  captureRouterTransitionStart,
  init,
  setUser,
  setTag,
  setTags,
  setContext,
  setExtra,
  addBreadcrumb,
  withScope,
  getCurrentScope,
  httpIntegration,
  prismaIntegration,
  replayIntegration,
  browserTracingIntegration,
  consoleIntegration,
  extraErrorDataIntegration,
  flush,
  close,
  metrics,
};
