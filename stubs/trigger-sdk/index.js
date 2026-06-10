// Slim MVP stub for @trigger.dev/sdk — background jobs are inert. Tasks become
// no-ops whose trigger()/triggerAndWait() resolve immediately.
const noop = () => undefined;
const passthrough = (x) => x;

const makeTask = (def) => ({
  id: (def && def.id) || "stub-task",
  trigger: async () => ({ id: "stub-run" }),
  triggerAndWait: async () => ({ ok: true, output: undefined }),
  batchTrigger: async () => ({ batchId: "stub-batch", runs: [] }),
  batchTriggerAndWait: async () => [],
});

const logger = { log: noop, info: noop, warn: noop, error: noop, debug: noop, trace: noop };

module.exports = {
  configure: noop,
  defineConfig: passthrough,
  logger,
  queue: passthrough,
  schemaTask: makeTask,
  task: makeTask,
  schedules: { task: makeTask, intervals: { create: async () => ({}) } },
  envvars: { upload: async () => undefined, list: async () => [] },
  syncVercelEnvVars: () => ({}),
  wait: { for: async () => undefined, until: async () => undefined },
  runs: { retrieve: async () => ({}), list: async () => [] },
  tags: { add: noop },
};
module.exports.default = module.exports;
