import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import copy from "rollup-plugin-copy";
import postcss from "rollup-plugin-postcss";
import path from "path";
import image from "@rollup/plugin-image";
import packageJson from "./package.json" assert { type: "json" };

export default {
  external: ["react", "react-dom"],
  input: "src/index.tsx",
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
    resolve(),
    commonjs(),
    typescript({ useTsconfigDeclarationDir: true }),
    postcss({
      extract: true,
      // Or with custom file name
      extract: path.resolve("build/assets/uswds/css/index.css"),
    }),

    copy({
      targets: [{ src: "src/assets/*", dest: "build/assets" }],
    }),
    image(),
  ],
};
