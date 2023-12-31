import { babel } from "@rollup/plugin-babel";
import { terser } from "rollup-plugin-terser";
import external from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import alias from "@rollup/plugin-alias";
import image from "@rollup/plugin-image";

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: "lib/index.js",
        format: "cjs",
        exports: "named",
        interop: "auto",
        sourcemap: true,
      },
      {
        file: "lib/index.es.js",
        format: "es",
        interop: "esModule",
        exports: "named",
        sourcemap: true,
      },
    ],
    plugins: [
      peerDepsExternal(),
      babel({
        exclude: "node_modules/**",
        presets: ["@babel/preset-react"],
        babelHelpers: "bundled",
      }),
      external(),
      resolve({
        extensions: [
          ".mjs",
          ".js",
          ".json",
          ".node",
          ".jsx",
          ".tsx",
          ".ts",
          ".svg",
        ],
      }),
      commonjs(),
      image(),
      alias({
        entries: [
          {
            find: "assets",
            replacement: "../assets",
          },
        ],
      }),
      typescript({ tsconfig: "./tsconfig.json" }),
      terser(),
    ],
    external: ["react", "react-dom", "styled-components"],
  },
];
