const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const GasPlugin = require("gas-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "production",
  context: path.resolve(__dirname, "./src"),
  entry: "./index.ts",
  module: {
    rules: [
      {
        test: /(\.ts)$/,
        loader: "ts-loader",
      },
    ],
  },
  resolve: {
    extensions: [".ts"],
  },
  output: {
    path: path.resolve(__dirname, "./build"),
    filename: "Code.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "page.html",
    }),
    // new GasPlugin({
    //   autoGlobalExportsFiles: ["**/*.ts"],
    // }),
    // new CopyPlugin({
    //   patterns: [{ from: "templates/**/*" }, { from: "appsscript.json" }],
    // }),
  ],
};
