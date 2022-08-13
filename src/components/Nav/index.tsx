/*
 * @Description: Nav
 * @Author: hyx
 * @Date: 2022-08-10 17:20:27
 */

import { setNavShow } from "@/redux/actions"
import { storeState } from "@/redux/interface"
import { useEventListener } from "ahooks"
import { map } from "ramda"
import React from "react"
import { HomeOutlined, SettingOutlined } from "@ant-design/icons"
import { connect } from "react-redux"
import { NavLink, useNavigate } from "react-router-dom"
import { useLinkList } from "./config"
import $style from "./index.scss"
import classNames from "classnames"

interface Props {
  navShow?: boolean
  setNavShow?: Function
}

const Nav = ({ navShow, setNavShow }: Props) => {
  useEventListener(
    "mousewheel",
    (event) => {
      event = event || window.event
      if (setNavShow) {
        setNavShow(event.wheelDeltaY > 0)
      }
    },
    { target: document.body }
  )

  const { navArr, secondNavArr } = useLinkList()
  const navigate = useNavigate()
  return (
    <nav className={classNames($style.nav, { [$style.hiddenNav]: !navShow })}>
      <div className={$style.navContent}>
        {/* 主页 */}
        <div className={$style.homeBtn} onClick={() => navigate("/")}>
          <HomeOutlined />
        </div>
        {/* 后台管理 */}
        <a
          className={$style.adminBtn}
          href="https://www.baidu.com/"
          target="_blank"
          rel="noreferrer"
        >
          <SettingOutlined />
        </a>
        {/* 文章单独按钮 */}
        <div className={$style.articlesBtn}>
          <div className={$style.articelsSecond}>
            {map(
              (item) => (
                <NavLink
                  className={({ isActive }) =>
                    isActive ? $style.sedActive : $style.articelsSecondItem
                  }
                  to={item.to}
                  key={item.id}
                >
                  {item.name}
                </NavLink>
              ),
              secondNavArr
            )}
          </div>
          文章
        </div>
        {/* 其他按钮 */}
        {map(
          (item) => (
            <NavLink
              className={({ isActive }) =>
                isActive ? $style.navActive : $style.navBtn
              }
              to={item.to}
              key={item.id}
            >
              {item.name}
            </NavLink>
          ),
          navArr
        )}
      </div>
    </nav>
  )
}

export default connect(
  (state: storeState) => ({
    navShow: state.navShow,
  }),
  { setNavShow }
)(Nav)
