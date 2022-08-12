/*
 * @Description: Aside
 * @Author: hyx
 * @Date: 2022-08-11 16:34:51
 */

import React from "react"
import BlogCard from "./blogCard"
import AccountCard from "./accountCard"
import DataCard from "./dataCard"
import NoticeCard from "./noticeCard"
import ClockCard from "./clockCard"
import TagCard from "./tagCard"
import SiteCard from "./siteCard"
import $style from "./index.scss"

const Aside = () => {
  return (
    <aside className={$style.aside}>
      <BlogCard />
      <AccountCard />
      <DataCard />
      <NoticeCard />
      <ClockCard />
      <TagCard />
      <SiteCard />
    </aside>
  )
}

export default Aside
