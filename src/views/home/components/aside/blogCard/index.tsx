/*
 * @Description: BlogCard
 * @Author: hyx
 * @Date: 2022-08-11 16:27:30
 */

import React from "react"
import Card from "@/components/Card"
import $style from "./index.scss"
import { useTime } from "@/utils/hooks/useTime"

const BlogCard = () => {
  const { timeText } = useTime()

  return (
    <Card className={$style.card}>
      <p className={$style.text}>
        {timeText}，<br />
        我叫<span className={$style.color}>小星星</span>，<br />
        欢迎来到
        <br />
        我的<span className={$style.color}>个人博客</span>。
      </p>
    </Card>
  )
}

export default BlogCard
