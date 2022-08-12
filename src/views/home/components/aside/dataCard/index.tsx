/*
 * @Description: DataCard
 * @Author: hyx
 * @Date: 2022-08-11 16:30:00
 */

import React from "react"
import Card from "@/components/Card"
import $style from "./index.scss"

const DataCard = () => {
  return (
    <Card className={$style.card}>
      <div className={$style.blogData}>
        <div className={$style.name}>文章</div>
        <div className={$style.num}>{1}</div>
      </div>
      <div className={$style.blogData}>
        <div className={$style.name}>分类</div>
        <div className={$style.num}>{2}</div>
      </div>
      <div className={$style.blogData}>
        <div className={$style.name}>标签</div>
        <div className={$style.num}>{3}</div>
      </div>
    </Card>
  )
}

export default DataCard
