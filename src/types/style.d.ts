/*
 * @Description:
 * @Author: hyx
 * @Date: 2022-08-10 11:51:19
 */

declare module "*.css" {
  const style: { [className: string]: string }
  export default style
}

declare module "*.scss" {
  const style: { [className: string]: string }
  export default style
}

declare module "*.less" {
  const style: { [className: string]: string }
  export default style
}
