const HtmlWebpackPlugin = require("html-webpack-plugin")
const CopyWebpackPlugin = require("copy-webpack-plugin")

const ESLintPlugin = require("eslint-webpack-plugin")
const path = require("path")

module.exports = {
  mode: "development",
  entry: "./src/main.jsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.[contenthash].js",
    publicPath: "/",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              // ES6+ 변환
              "@babel/preset-env",
              // JSX변환, 자동 import
              ["@babel/preset-react", { runtime: "automatic" }],
            ],
          },
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
    // import Coxx from "../comxx/Coxx[.js]" // 확장자 생략 가능
    extensions: [".js", ".jsx"],
    fullySpecified: false, // ESM에서도 확장자 생략
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "public"),
          to: path.resolve(__dirname, "dist"),
        },
      ],
    }),
    new ESLintPlugin({
      configType: "flat",
      context: path.resolve(__dirname, "src"),
      extensions: [".js", ".jsx"],
      exclude: ["node_modules", "dist", "webpack.config.cjs"],
      overrideConfigFile: "./eslint.config.cjs",
      emitError: true,
      emitWarning: true,
      failOnError: true,
    }),
  ],
  devServer: {
    static: [
      {
        directory: path.join(__dirname, "dist"),
        publicPath: "/",
      },
      {
        directory: path.join(__dirname, "public"),
        publicPath: "/",
      },
    ],
    historyApiFallback: true,
    compress: true,
    port: 3100,
    hot: true,
    open: true,
  },
  performance: {
    hints: "warning",
    maxAssetSize: 20000000,
    maxEntrypointSize: 40000000,
    assetFilter: function (assetFilename) {
      return assetFilename.endsWith(".js")
    },
  },
}
