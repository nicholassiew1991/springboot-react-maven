import path from "path";
import webpack, { Configuration } from "webpack";
import { TsconfigPathsPlugin } from "tsconfig-paths-webpack-plugin";

export default (): Configuration => ({
  entry: "./src/main/react/ts/index.tsx",
  mode: "development",
  devtool: "eval-source-map",
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
    plugins: [new TsconfigPathsPlugin()]
  },
  output: {
    path: path.join(__dirname, "/src/main/resources/generated-static/dist/js"),
    filename: "build.js"
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        options: {
          transpileOnly: true
        },
        exclude: "/src/main/resources/static/js"
      }
    ]
  }
});