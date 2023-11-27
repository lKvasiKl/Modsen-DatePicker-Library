import { babel } from "@rollup/plugin-babel";
import { terser } from "rollup-plugin-terser";
import external from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import alias from "@rollup/plugin-alias";

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: "lib/index.js",
        format: "cjs",
      },
      {
        file: "lib/index.es.js",
        format: "es",
        exports: "named",
      },
    ],
    plugins: [
      peerDepsExternal(),
      babel({
        exclude: "node_modules/**",
        presets: ["@babel/preset-react"],
      }),
      external(),
      resolve(),
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
      typescript({ tsconfig: "./tsconfig.json" }),
      terser(),
    ],
  },
];
