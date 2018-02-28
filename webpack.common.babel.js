/* jshint esversion: 6 */
import path from "path";
import webpack from "webpack";

const settings = {
  devtool: "source-map",
  context: path.join(__dirname, "app"),
  entry: {
    app: path.join(__dirname, "/app/app.module.js")
  },
  resolve: {
    modules: ["node_modules"]
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        enforce: "pre",
        exclude: /(node_modules)|(\.spec\.js$)/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["es2015"]
            }
          },
          {
            loader: "jshint-loader",
          }
        ]
      },
      {
        test: /\.html$/,
        loader: "raw-loader"
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      }
    ]
  }
};

export default settings;
