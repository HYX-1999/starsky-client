/*
 * @Description: Home
 * @Author: hyx
 * @Date: 2022-08-11 15:50:25
 */

import PageTitle from "@/components/PageTitle"
import React from "react"
import Aside from "./components/aside"
import Section from "./components/section"
import $style from "./index.scss"

const Home = () => {
  return (
    <div>
      <PageTitle
        height="100vh"
        title="满天星辰"
        desc="若到江南赶上春，千万和春住。"
      />
      <div className={$style.body}>
        <Section />
        <Aside />
      </div>
    </div>
  )
}

export default Home
