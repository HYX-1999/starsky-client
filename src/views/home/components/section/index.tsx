/*
 * @Description: Section
 * @Author: hyx
 * @Date: 2022-08-11 16:40:47
 */

import React from "react"
import $style from "./index.scss"
import PostCard from "./postCard"

const Section = () => {
  return (
    <section className={$style.section}>
      <PostCard
        title="JavaScript 作用域、作用域链的理解"
        content={"JavaScript 作用域、作用域链的理解".repeat(100)}
        time="2021-10-20"
        tags={["React", "JavaScript", "Git"]}
      />
      <PostCard
        title="JavaScript 作用域、作用域链的理解"
        content={"JavaScript 作用域、作用域链的理解".repeat(100)}
        time="2021-10-20"
        tags={["React", "JavaScript", "Git"]}
      />
      <PostCard
        title="JavaScript 作用域、作用域链的理解"
        content={"JavaScript 作用域、作用域链的理解".repeat(100)}
        time="2021-10-20"
        tags={["React", "JavaScript", "Git"]}
      />
      <PostCard
        title="JavaScript 作用域、作用域链的理解"
        content={"JavaScript 作用域、作用域链的理解".repeat(100)}
        time="2021-10-20"
        tags={["React", "JavaScript", "Git"]}
      />
      <PostCard
        title="JavaScript 作用域、作用域链的理解"
        content={"JavaScript 作用域、作用域链的理解".repeat(100)}
        time="2021-10-20"
        tags={["React", "JavaScript", "Git"]}
      />
      <PostCard
        title="JavaScript 作用域、作用域链的理解"
        content={"JavaScript 作用域、作用域链的理解".repeat(100)}
        time="2021-10-20"
        tags={["React", "JavaScript", "Git"]}
      />
    </section>
  )
}

export default Section
