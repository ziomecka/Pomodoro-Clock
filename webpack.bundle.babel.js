/* jshint esversion: 6 */
import merge from "webpack-merge";
import common from "./webpack.common.babel";
import CleanWebpackPlugin from "clean-webpack-plugin";
import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";

const pathsToClean = ["bundle"];
const cleanOptions = {
  verbose:  true
};

const settings = merge (common, {
  output: {
    filename: "./pomodoro-clock.bundle.js",
    path: path.resolve(__dirname, "bundle")
  },
  plugins: [
    new CleanWebpackPlugin(pathsToClean, cleanOptions),
    new HtmlWebpackPlugin({
      title: "pomodoro-clock",
      template: "index.html",
      inject: "head"
    })
  ]
});

export default settings;
