const GasPlugin = require("gas-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  context: __dirname,
  entry: "./src/index.ts",
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
    path: __dirname,
    filename: "build/Code.js",
  },
  plugins: [
    new GasPlugin({
      autoGlobalExportsFiles: ["**/*.ts"],
    }),
    new CopyPlugin({
      patterns: [
        { from: "templates/**/*", to: "build/", context: "src" },
        { from: "appsscript.json", to: "build/" },
      ],
    }),
  ],
};
