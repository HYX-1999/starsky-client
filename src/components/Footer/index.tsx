/*
 * @Description: Footer
 * @Author: hyx
 * @Date: 2022-08-10 16:59:35
 */

import React from "react"
import $style from "./index.scss"

const Footer = () => {
  const frameArr = ["React", "Redux", "Antd", "CloudBase"]

  return (
    <footer className={$style.footer}>
      <span>个人博客系统</span>
      <span>
        {frameArr.map((item, index) => (
          <span className={$style.siteFrame} key={index}>
            {item}
          </span>
        ))}
      </span>
    </footer>
  )
}

export default Footer
