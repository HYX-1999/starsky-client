/*
 * @Description: PageTitle
 * @Author: hyx
 * @Date: 2022-08-11 16:21:57
 */

import React from "react"
import $style from "./index.scss"

type Props = {
  height?: string
  title?: string
  desc?: string
}

const PageTitle = ({ height = "300px", title, desc }: Props) => {
  return (
    <div style={{ height }} className={$style.box}>
      <h1 className={$style.title}>{title}</h1>
      {desc && <h3 className={$style.desc}>{desc}</h3>}
    </div>
  )
}

export default PageTitle
