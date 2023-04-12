/* eslint-disable import/no-extraneous-dependencies */
import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import resolve from "@rollup/plugin-node-resolve";
import alias from "rollup-plugin-alias";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import { terser } from "rollup-plugin-terser";
import typescript from "rollup-plugin-typescript2";

export default {
  input: "src/index.ts",
  output: {
    dir: "dist",
    format: "esm",
    sourcemap: true
  },
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs(),
    typescript({ useTsconfigDeclarationDir: true }),
    terser(),
    alias({
      entries: [
        { find: "@components", replacement: "./src/components" },
        { find: "~", replacement: "./src" }
        // 원하는 alias 추가
      ]
    }),
    json()
  ]
};
