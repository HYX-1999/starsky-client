/*
 * @Description: PageTitle
 * @Author: hyx
 * @Date: 2022-08-11 16:21:57
 */

import React from "react"
import $style from "./index.scss"

interface Props {
  height?: string
  title?: string
  desc?: string
}

const PageTitle = ({ height = "300px", title, desc }: Props) => {
  return (
    <div style={{ height }} className={$style.box}>
      <div className={$style.title}>{title}</div>
      {desc && <div className={$style.desc}>{desc}</div>}
    </div>
  )
}

export default PageTitle
