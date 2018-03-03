/* jshint esversion: 6 */
import merge from "webpack-merge";
import common from "./webpack.common.babel";
import CleanWebpackPlugin from "clean-webpack-plugin";
import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";
import JsDocPlugin from "jsdoc-webpack-plugin-v2";

const pathsToClean = ["bundle", "docs"];

const cleanOptions = {
  verbose: true
};

const htmlOptions = {
  title: "pomodoro-clock",
  template: "index.html",
  inject: "head"
};

const jsDocOptions = {
  conf: path.join(__dirname, "jsdoc.conf.json"),
  source: {
    include: "./app"
  }
};

const settings = merge (common, {
  output: {
    filename: "./pomodoro-clock.bundle.js",
    path: path.resolve(__dirname, "bundle")
  },
  plugins: [
    new CleanWebpackPlugin(pathsToClean, cleanOptions),
    new HtmlWebpackPlugin(htmlOptions),
    new JsDocPlugin(jsDocOptions)
  ]
});

export default settings;
