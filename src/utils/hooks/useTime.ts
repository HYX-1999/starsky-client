/*
 * @Description: useTime
 * @Author: hyx
 * @Date: 2022-08-12 14:22:43
 */

const getTimeText = (hour: number): string => {
  switch (true) {
    case hour < 6:
      return "凌晨好"
    case hour < 9:
      return "早上好"
    case hour < 11:
      return "上午好"
    case hour < 13:
      return "中午好"
    case hour < 17:
      return "下午好"
    case hour < 19:
      return "傍晚好"
    default:
      return "晚上好"
  }
}

export const useTime = () => {
  const hour = new Date().getHours()
  const timeText = getTimeText(hour)
  return { timeText }
}
