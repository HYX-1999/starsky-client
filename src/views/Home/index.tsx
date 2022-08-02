/*
 * @Description: Home
 * @Author: hyx
 * @Date: 2022-08-02 15:52:32
 * @LastEditors: hyx
 * @LastEditTime: 2022-08-02 17:40:20
 */

import { Button, DatePicker, Space } from "antd"

interface Props {
  count?: number
  setCount?: Function
}

const Home = ({ count, setCount }: Props) => {
  const add = () => {
    setCount && setCount(count! + 1)
  }

  const sub = () => {
    setCount && setCount(count! - 1)
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

export default Home
