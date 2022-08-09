/*
 * @Description: webpack.config.dev.js
 * @Author: hyx
 * @Date: 2022-08-09 17:10:33
 */

// 合并规则
const { merge } = require("webpack-merge")
// 导入基础配置
const { baseConfig } = require("./webpack.config.base")
module.exports = merge(baseConfig, {
  // 环境设置: 开发环境
  mode: "development",
  // 开启eval-cheap-module-source-map模式
  devtool: 'eval-cheap-module-source-map',
  // webpack-dev-server 的一下配置，webpack-dev-server 会提供一个本地服务(serve)
  devServer: {
    // host
    host: "127.0.0.1",
    // 端口
    port: 8000,
    // 热更新
    hot: true,
    // 启动时打开浏览器
    open: true
  }
})
