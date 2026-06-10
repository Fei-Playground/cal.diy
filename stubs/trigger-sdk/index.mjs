// ESM stub for @trigger.dev/sdk — explicit named exports for browser/server.
const noop = () => undefined;
const passthrough = (x) => x;
const makeTask = (def) => ({
  id: (def && def.id) || "stub-task",
  trigger: async () => ({ id: "stub-run" }),
  triggerAndWait: async () => ({ ok: true, output: undefined }),
  batchTrigger: async () => ({ batchId: "stub-batch", runs: [] }),
  batchTriggerAndWait: async () => [],
});

export const configure = noop;
export const defineConfig = passthrough;
export const logger = { log: noop, info: noop, warn: noop, error: noop, debug: noop, trace: noop };
export const queue = passthrough;
export const schemaTask = makeTask;
export const task = makeTask;
export const schedules = { task: makeTask, intervals: { create: async () => ({}) } };
export const envvars = { upload: async () => undefined, list: async () => [] };
export const syncVercelEnvVars = () => ({});
export const wait = { for: async () => undefined, until: async () => undefined };
export const runs = { retrieve: async () => ({}), list: async () => [] };
export const tags = { add: noop };

export default { configure, defineConfig, logger, queue, schemaTask, task, schedules, envvars, syncVercelEnvVars, wait, runs, tags };
