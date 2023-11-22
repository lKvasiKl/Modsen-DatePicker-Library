import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss";
import dts from "rollup-plugin-dts";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import alias from "@rollup/plugin-alias";

import { createRequire } from "node:module";
const requireFile = createRequire(import.meta.url);
const packageJson = requireFile("./package.json");

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
      resolve(
        alias({
          entries: [
            { find: "decorators", replacement: "./decorators" },
            {
              find: "providers/DateProvider",
              replacement: "./providers/DateProvider",
            },
            {
              find: "components/DatePicker",
              replacement: "./components/DatePicker",
            },
          ],
        }),
      ),
      commonjs(),
      nodeResolve(),
      typescript(),
      postcss({
        extensions: [".css"],
      }),
    ],
  },
  {
    input: "lib/index.d.ts",
    output: [{ file: "lib/index.d.ts", format: "es" }],
    plugins: [dts()],
    external: [/\.css$/],
  },
];
