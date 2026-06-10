import type { StorybookConfig } from '@storybook/nextjs-vite';

import { join, dirname, resolve } from "node:path"
import { fileURLToPath } from "node:url"
import { createRequire } from "node:module"

// Storybook 10 loads this config as native ESM, where __dirname / require are
// not defined — reconstruct them from import.meta.url.
const __dirname = dirname(fileURLToPath(import.meta.url))
const require = createRequire(import.meta.url)

// Monorepo root, so Vite is allowed to serve story/component files that live
// outside apps/web (e.g. packages/ui).
const monorepoRoot = resolve(__dirname, "../../..")

/**
* This function is used to resolve the absolute path of a package.
* It is needed in projects that use Yarn PnP or are set up within a monorepo.
*/
function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, 'package.json')))
}
const config: StorybookConfig = {
  // Stories are colocated next to their component (Fei PREVIEWER convention),
  // discovered across the app and the shared UI packages.
  "stories": [
    "../../../packages/ui/components/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    "../app/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    "../modules/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    getAbsolutePath('@storybook/addon-docs'),
    getAbsolutePath('@storybook/addon-onboarding')
  ],
  "framework": {
    "name": getAbsolutePath('@storybook/nextjs-vite'),
    "options": {}
  },
  "staticDirs": [
    "../public"
  ],
  viteFinal: async (viteConfig) => {
    viteConfig.server = viteConfig.server || {};
    viteConfig.server.fs = viteConfig.server.fs || {};
    viteConfig.server.fs.allow = [...(viteConfig.server.fs.allow || []), monorepoRoot];
    return viteConfig;
  }
};
export default config;