/*
 * @Description:
 * @Author: hyx
 * @Date: 2022-08-01 16:59:12
 * @LastEditors: hyx
 * @LastEditTime: 2022-08-03 14:18:22
 */

import { defineConfig } from "vite"
import * as path from "path"
import react from "@vitejs/plugin-react"
import { createStyleImportPlugin, AntdResolve } from "vite-plugin-style-import"

// https://vitejs.dev/config/
export default defineConfig({
  root: "./", // 入口主文件，项目的index.html，当前路径开始
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  },
  plugins: [
    react(),
    createStyleImportPlugin({
      resolves: [AntdResolve()],
      libs: [
        {
          libraryName: 'antd',
          esModule: true,
          resolveStyle: (name) => {
            return `antd/es/${name}/style/index`
          }
        }
      ]
    }),
  ],
})
