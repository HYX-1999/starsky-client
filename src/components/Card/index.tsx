/*
 * @Description: Card
 * @Author: hyx
 * @Date: 2022-08-11 16:17:21
 */

import React from "react"
import classNames from "classnames"
import $style from "./index.scss"

interface Props {
  children?: any
  className?: string
}

const Card = ({ children, className }: Props) => {
  return <div className={classNames($style.card, className)}>{children}</div>
}

export default Card
