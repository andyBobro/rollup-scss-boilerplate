/**
 * Rollupjs config
 */
import babel from "rollup-plugin-babel";
import globals from "rollup-plugin-node-globals";
import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import replace from "rollup-plugin-replace";
import uglify from "rollup-plugin-uglify";
import livereload from "rollup-plugin-livereload";

export default {
  input: "./src/js/index.js",
  output: {
    file: "./dest/app.js",
    format: "iife",
    sourcemap: "inline",
  },
  plugins: [
    resolve({
      jsnext: true,
      main: true,
      browser: true,
    }),
    commonjs(),
    babel({
      exclude: "node_modules/**",
    }),
    replace({
      exclude: "node_modules/**",
      ENV: JSON.stringify(process.env.NODE_ENV || "development"),
    }),
    globals(),
    process.env.NODE_ENV === "development" && livereload(),
    process.env.NODE_ENV === "production" && uglify(),
  ],
};
