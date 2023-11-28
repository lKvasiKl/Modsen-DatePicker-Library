import { babel } from "@rollup/plugin-babel";
import { terser } from "rollup-plugin-terser";
import external from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import svg from "rollup-plugin-svg";
import copy from "rollup-plugin-copy-assets";
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
      svg(),
      copy({ assets: ["./src/assets"] }),
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
    globals: { "styled-components": "styled" },
  },
];
