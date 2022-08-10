/*
 * @Description: 
 * @Author: hyx
 * @Date: 2022-08-10 14:08:13
 */

import { SET_COUNT } from "./constant"

export const setCount = (data: number) => ({
  type: SET_COUNT,
  data,
})
