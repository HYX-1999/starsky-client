/*
 * @Description:
 * @Author: hyx
 * @Date: 2022-08-01 16:59:12
 * @LastEditors: hyx
 * @LastEditTime: 2022-08-03 11:33:36
 */

import { BrowserRouter, Route, Routes } from "react-router-dom"
import { map } from "ramda"
import routes from "./router"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {map((route) => {
          const Component = route.component
          return (
            <Route path={route.path} key={route.name} element={<Component />} />
          )
        }, routes)}
      </Routes>
    </BrowserRouter>
  )
}

export default App
