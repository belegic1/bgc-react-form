import resolve from "@rollup/plugin-node-resolve"
import commonjs from "@rollup/plugin-commonjs"
import typescript from "@rollup/plugin-typescript"
import dts from "rollup-plugin-dts"
import postcss from 'rollup-plugin-postcss';
import packakageJson from "./package.json" assert {type: "json"};

import perDepsExternar from "rollup-plugin-peer-deps-external";
import terser from '@rollup/plugin-terser';

export default [
  {
    input: "src/index.ts",
    output: [
      {file: packakageJson.main,
      format: "cjs",
        sourcemap: true
      },
      {
        file: packakageJson.module,
        format: "esm",
        sourcemap: true
      }
    ],
    plugins: [
      perDepsExternar(),
      resolve(),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),
      postcss(),
      terser()
    ]
  },
  {
    input: "dist/esm/types/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()],
    external: [/\.css$/]
  }
]