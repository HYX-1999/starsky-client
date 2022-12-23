/*
 * @Description: webpack.config.dev.js
 * @Author: hyx
 * @Date: 2022-08-09 17:10:33
 */

const path = require("path")
const { merge } = require("webpack-merge")
const webpack = require("webpack")

// 导入基础配置
const { baseConfig } = require("./webpack.config.base")
const ROOT_PATH = path.resolve(__dirname, "../")

module.exports = merge(baseConfig, {
  target: "web", // 解决热更新失效
  // 环境设置: 开发环境
  mode: "development",
  // 开启eval-cheap-module-source-map模式
  devtool: "eval-cheap-module-source-map",
  output: {
    path: path.resolve(ROOT_PATH, "./build"),
    filename: "js/[name].js",
  },
  // webpack-dev-server 的一下配置，webpack-dev-server 会提供一个本地服务(serve)
  devServer: {
    host: "localhost",
    port: 8000,
    compress: true, // gzip压缩
    hot: true, // 热更新
    open: true, // 启动时打开浏览器
    client: {
      logging: "warn", // warn以上的信息，才会打印
      overlay: true, // 当出现编译错误或警告时，在浏览器中显示全屏覆盖
    },
    historyApiFallback: true,
  },
  watch: true,
  watchOptions: {
    ignored: /node_modules/,
    aggregateTimeout: 300,
    poll: 1000,
  },
  // 插件配置
  plugins: [],
  optimization: {
    minimize: false,
    minimizer: [],
    // 代码分割
    splitChunks: {
      chunks: "all",
      minSize: 0,
    },
  },
})
