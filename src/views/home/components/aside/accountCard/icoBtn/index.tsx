/*
 * @Description: IcoBtn
 * @Author: hyx
 * @Date: 2022-08-12 11:31:43
 */

import React from "react"
import $style from "./index.scss"

interface Props {
  link?: string
  children?: any
}

const IcoBtn = ({ link, children }: Props) => {
  return (
    <a
      className={$style.socialBtn}
      href={link}
      target="_blank"
      rel="noreferrer"
    >
      {children}
    </a>
  )
}

export default IcoBtn
