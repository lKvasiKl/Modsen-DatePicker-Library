import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss";
import alias from "@rollup/plugin-alias";

import path, { dirname } from "node:path";
import { fileURLToPath } from "url";
import { createRequire } from "node:module";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const requireFile = createRequire(import.meta.url);
const packageJson = requireFile("./package.json");

const customResolver = resolve({
  extensions: [".mjs", ".js", ".jsx", ".json", ".sass", ".scss"],
});
const projectRootDir = path.resolve(__dirname);

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      peerDepsExternal(),
      commonjs(),
      typescript(),
      postcss({
        extensions: [".css"],
        minimize: true,
      }),
      alias({
        entries: [
          { find: "app", replacement: path.resolve(projectRootDir, "src") },
        ],
        customResolver,
      }),
    ],
  },
];
