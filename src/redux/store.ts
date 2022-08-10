/*
 * @Description: 
 * @Author: hyx
 * @Date: 2022-08-10 11:52:35
 */

import { legacy_createStore as createStore } from "redux"
import { composeWithDevTools } from "@redux-devtools/extension"
import allReducers from "./reducers"

const enhancers =
  process.env.NODE_ENV === "development" ? composeWithDevTools() : undefined

export default createStore(allReducers, enhancers)
