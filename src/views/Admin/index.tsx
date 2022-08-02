/*
 * @Description: Admin
 * @Author: hyx
 * @Date: 2022-08-02 17:45:15
 * @LastEditors: hyx
 * @LastEditTime: 2022-08-02 17:48:25
 */

import { useTitle } from "ahooks"
import { Button } from "antd"

const Admin = () => {
  useTitle("Admin")
  return <Button type="primary">按钮</Button>
}

export default Admin
