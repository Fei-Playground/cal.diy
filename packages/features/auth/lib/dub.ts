// Slim MVP build: the Dub app was removed, so the `dub-package` dependency is
// no longer installed. These inert stubs keep dependents (referrals token
// route, Dub URL shortener) compiling. With no DUB_API_KEY none of it runs in
// normal operation anyway.

// Chainable no-op proxy so `dub.anything.anything(...)` resolves to null.
const noop = async () => null;
const handler: ProxyHandler<typeof noop> = {
  get: () => new Proxy(noop, handler),
  apply: () => null,
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const dub: any = new Proxy(noop, handler);

export const getDubCustomer = async (_userId: string) => null;
