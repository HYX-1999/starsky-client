/*
 * @Description: Admin
 * @Author: hyx
 * @Date: 2022-08-10 14:22:49
 */

import React from "react"
import { useTitle } from "ahooks"
import { Button } from "antd"

const Admin = () => {
  useTitle("Admin")
  return <Button type="primary">按钮</Button>
}
export default Admin
