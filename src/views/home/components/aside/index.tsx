/*
 * @Description: Aside
 * @Author: hyx
 * @Date: 2022-08-11 16:34:51
 */

import React from "react"
import BlogCard from "./components/blogCard"
import AccountCard from "./components/accountCard"
import DataCard from "./components/dataCard"
import NoticeCard from "./components/noticeCard"
import ClockCard from "./components/clockCard"
import TagCard from "./components/tagCard"
import SiteCard from "./components/siteCard"
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
