/*
 * @Description: Home
 * @Author: hyx
 * @Date: 2022-08-10 14:12:44
 */

import { setCount } from "@/redux/actions"
import { storeState } from "@/redux/interface"
import { useTitle } from "ahooks"
import { Button, DatePicker, Space } from "antd"
import { isNil } from "ramda"
import React from "react"
import { connect } from "react-redux"

interface Props {
  count?: number
  setCount?: Function
}

const Home = ({ count, setCount }: Props) => {
  useTitle("Home")

  const add = () => {
    if (!isNil(setCount) && !isNil(count)) {
      setCount(count + 1)
    }
  }

  const sub = () => {
    if (!isNil(setCount) && !isNil(count)) {
      setCount(count - 1)
    }
  }

  return (
    <div>
      <DatePicker />
      <div>
        <h2>{count}</h2>
        <Space>
          <Button type="primary" onClick={add}>
            ADD
          </Button>
          <Button type="primary" onClick={sub}>
            SUB
          </Button>
        </Space>
      </div>
    </div>
  )
}

export default connect(
  (state: storeState) => ({
    count: state.count,
  }),
  { setCount }
)(Home)
