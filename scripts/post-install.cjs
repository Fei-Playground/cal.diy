#!/usr/bin/env node
/*
 * Single-app postinstall (replaces `turbo run post-install`).
 * Builds the platform packages whose `main` points at a dist/ they generate via tsc.
 * Runs the toolchain directly (cwd into each package) since these dirs are no longer
 * Yarn workspaces and `yarn --cwd <dir>` would reject them.
 * app-store-cli output (*.generated.ts) is committed, so it is not rebuilt here.
 */
const { execSync } = require("child_process");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const BIN = path.join(ROOT, "node_modules", ".bin");
const env = { ...process.env, PATH: BIN + path.delimiter + (process.env.PATH || "") };

const steps = [
  ["packages/platform/constants", "tsc --build --force tsconfig.json"],
  ["packages/platform/enums", "rimraf dist && tsc --build --force tsconfig.json"],
  ["packages/platform/types", "rimraf dist && tsc --build --force tsconfig.json"],
  ["packages/platform/utils", "tsc --build --force tsconfig.json"],
];

for (const [dir, cmd] of steps) {
  process.stdout.write(`[post-install] ${dir}: ${cmd}\n`);
  execSync(cmd, { cwd: path.join(ROOT, dir), env, stdio: "inherit" });
}
process.stdout.write("[post-install] done\n");
