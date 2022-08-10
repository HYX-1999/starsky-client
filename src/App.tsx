/*
 * @Description: App
 * @Author: hyx
 * @Date: 2022-08-10 14:26:09
 */

import React from "react"
import Nav from "@/components/Nav"
import Main from "@/components/Main"
import Footer from "@/components/Footer"
import $style from "./App.scss"

const App = () => {
  return (
    <div className={$style.AppBox}>
      <Nav />
      <Main />
      <Footer />
    </div>
  )
}

export default App
