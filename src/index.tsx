/*
 * @Description:
 * @Author: hyx
 * @Date: 2022-08-09 16:59:24
 */

import React from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"
import store from "@/redux/store"
import App from "./App"

const container = document.getElementById("root")
if (container) {
  const root = createRoot(container)
  root.render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  )
}
