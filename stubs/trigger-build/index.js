// Slim MVP stub for @trigger.dev/build — build extensions are no-ops (only used
// by trigger.config.ts, which the Next runtime never executes).
const ext = () => ({});
module.exports = {
  syncVercelEnvVars: ext,
  additionalPackages: ext,
  additionalFiles: ext,
  esbuildPlugin: ext,
  emitDecoratorMetadata: ext,
  prismaExtension: ext,
};
module.exports.default = module.exports;
