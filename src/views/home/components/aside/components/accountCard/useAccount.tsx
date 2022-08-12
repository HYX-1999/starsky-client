/*
 * @Description: useAccount
 * @Author: hyx
 * @Date: 2022-08-12 11:34:08
 */

import React from "react"
import { GithubOutlined, WechatOutlined, QqOutlined, AlipayCircleOutlined } from "@ant-design/icons"

export const useAccount = () => {
  return [
    {
      isLink: true,
      link: "https://www.baidu.com/",
      ico: <GithubOutlined />,
    },
    {
      isLink: true,
      link: "https://www.baidu.com/",
      ico: <AlipayCircleOutlined />,
    },
    {
      isLink: false,
      link: "",
      ico: <WechatOutlined />,
    },
    {
      isLink: false,
      link: "",
      ico: <QqOutlined />,
    },
  ]
}
