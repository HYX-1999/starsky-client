/*
 * @Description:
 * @Author: hyx
 * @Date: 2022-08-10 14:08:13
 */

import { SET_NAV_SHOW } from "./constant"

export const setNavShow = (data: boolean) => ({
  type: SET_NAV_SHOW,
  data,
})
