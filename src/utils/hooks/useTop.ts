/*
 * @Description: 
 * @Author: hyx
 * @Date: 2022-08-12 14:02:03
 */

import { useMount } from "ahooks"

const useTop = (setNavShow: Function) => {
  useMount(() => {
    window.scrollTo(0, 0)
    setNavShow(true)
  })
}

export default useTop
