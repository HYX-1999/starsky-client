/*
 * @Description: PostCard
 * @Author: hyx
 * @Date: 2022-08-12 16:09:09
 */

import Card from "@/components/Card"
import dayjs from "dayjs"
import React from "react"
import $style from "./index.scss"

interface Props {
  title?: string
  content?: string
  time?: string
  tags?: string[]
}

const PostCard = ({ title, content, time, tags }: Props) => {
  return (
    <Card className={$style.card}>
      <div className={$style.title}>{title}</div>
      <p className={$style.content}>
        {content!
          .replace(/<a(.*?)>(.*?)<\/a>/g, "$2")
          .replace(/[# |**|`|>]/g, "")}
      </p>
      <div className={$style.info}>
        <span className={$style.date}>{dayjs(time!).format("YYYY-MM-DD")}</span>
        <div className={$style.tags}>
          {tags!.map((tag) => (
            <span className={$style.tag} key={tag}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Card>
  )
}

export default PostCard
