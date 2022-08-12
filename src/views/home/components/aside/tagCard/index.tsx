/*
 * @Description: TagCard
 * @Author: hyx
 * @Date: 2022-08-11 16:33:02
 */

import React from "react"
import Card from "@/components/Card"
import { map } from "ramda"
import $style from "./index.scss"

const TagCard = () => {
  const tags = [
    "JavaScript",
    "CSS",
    "GitHub",
    "Webpack",
    "ES6",
    "HTML",
    "TypeScript",
    "React",
    "Vue",
    "Golang",
    "HTTP",
  ]

  return (
    <Card className={$style.card}>
      {map(
        (item) => (
          <span key={item} className={$style.tag}>
            {item}
          </span>
        ),
        tags
      )}
    </Card>
  )
}

export default TagCard
