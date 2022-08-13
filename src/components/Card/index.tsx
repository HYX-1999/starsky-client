/*
 * @Description: Card
 * @Author: hyx
 * @Date: 2022-08-11 16:17:21
 */

import React from "react"
import classNames from "classnames"
import Loading from "../Loading"
import $style from "./index.scss"

interface Props {
  children?: any
  loading?: boolean
  className?: string
}

const Card = ({ children, className, loading }: Props) => {
  return (
    <div
      className={classNames(
        $style.card,
        { [$style.center]: loading },
        className
      )}
    >
      {loading ? <Loading /> : children}
    </div>
  )
}

export default Card
