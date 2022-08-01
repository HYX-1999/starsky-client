/*
 * @Description:
 * @Author: hyx
 * @Date: 2022-08-01 16:59:12
 * @LastEditors: hyx
 * @LastEditTime: 2022-08-01 17:51:43
 */

import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

// https://vitejs.dev/config/
export default defineConfig({
  root: "./", // 入口主文件，项目的index.html，当前路径开始
  plugins: [react()],
})
