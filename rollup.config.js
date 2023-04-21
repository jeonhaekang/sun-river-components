import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import resolve from "@rollup/plugin-node-resolve";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import { terser } from "rollup-plugin-terser";
import typescript from "rollup-plugin-typescript2";

export default {
  input: "src/index.ts",
  output: [
    {
      file: "dist/index.esm.js",
      format: "esm",
      sourcemap: true
    },
    {
      file: "dist/index.cjs.js",
      format: "cjs",
      sourcemap: true,
      exports: "auto"
    }
  ],
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs(),
    typescript({
      tsconfig: "./tsconfig.json",
      useTsconfigDeclarationDir: true
    }),
    terser(),
    json()
  ]
};
