/* jshint esversion: 6 */
import path from "path";
import webpack from "webpack";
import ExtractSASS from "extract-text-webpack-plugin";

const settings = {
  devtool: "source-map",
  context: path.join(__dirname, "app"),
  entry: {
    app: path.join(__dirname, "/app/index.js")
  },
  resolve: {
    modules: ["node_modules"]
  },
  plugins: [
    new ExtractSASS("main.css")
  ],
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
      },
      {
        test: /\.sass$/,
        use: ExtractSASS.extract({
          fallback: "style-loader",
          use: "css-loader!sass-loader"
        })
      }
    ]
  }
};

export default settings;
