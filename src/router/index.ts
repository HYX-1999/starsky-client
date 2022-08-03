/*
 * @Description: 路由配置
 * @Author: hyx
 * @Date: 2022-08-03 10:57:28
 * @LastEditors: hyx
 * @LastEditTime: 2022-08-03 11:17:29
 */

import { lazy } from "react"

const routes = [
  {
    path: "/",
    meta: { title: "管理员" },
    component: lazy(() => import("@/views/Admin")),
    name: "Admin",
  },
  {
    path: "/home",
    meta: { title: "首页" },
    component: lazy(() => import("@/views/Home")),
    name: "Home",
  },
]

export default routes
