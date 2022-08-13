/*
 * @Description: ClockCard
 * @Author: hyx
 * @Date: 2022-08-11 16:29:18
 */

import React from "react"
import Card from "@/components/Card"
import { useClock } from "./useClock"
import { useInterval } from "ahooks"
import $style from "./index.scss"

const ClockCard = () => {
  const { hour, minute, second, runPerSecond } = useClock()
  useInterval(runPerSecond, 1000)
  return (
    <Card className={$style.card}>
      <div className={$style.dial}>
        <div className={$style.zero} />
        <div className={$style.six} />
        <div className={$style.three} />
        <div className={$style.nine} />
      </div>
      <div className={$style.container}>
        <div className={$style.dot} />
        <div
          className={$style.clockMinuteLine}
          style={{ transform: `rotateZ(${minute}deg)` }}
        />
        <div
          className={$style.clockHourLine}
          style={{ transform: `rotateZ(${hour}deg)` }}
        />
        <div
          className={$style.clockSecondLine}
          style={{ transform: `rotateZ(${second}deg)` }}
        />
      </div>
    </Card>
  )
}

export default ClockCard
