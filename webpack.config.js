const path = require("path");
const GasPlugin = require("gas-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
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
    new GasPlugin({
      autoGlobalExportsFiles: ["**/*.ts"],
    }),
    new CopyPlugin({
      patterns: [{ from: "templates/**/*" }, { from: "appsscript.json" }],
    }),
  ],
};
