/*
 * @Description: 
 * @Author: hyx
 * @Date: 2022-08-10 13:57:50
 */

import { SET_COUNT } from '../constant'

type Action = {
  type: string
  data: number
}

const initState: number = 0

export default function addReducer(preState: number = initState, action: Action): number {
  const { type, data } = action
  switch (type) {
    case SET_COUNT: {
      return data
    }
    default: {
      return preState
    }
  }
}