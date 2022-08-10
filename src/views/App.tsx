/*
 * @Description: App
 * @Author: hyx
 * @Date: 2022-08-10 14:26:09
 */

import React, { lazy, Suspense } from "react"
import { Link, Route, Routes } from "react-router-dom"

const Admin = lazy(
  () =>
    import(/* webpackChunkName:'Admin', webpackPrefetch:true */ "@/views/Admin")
)
const Home = lazy(
  () =>
    import(/* webpackChunkName:'Home', webpackPrefetch:true */ "@/views/Home")
)

const App = () => {
  return (
    <div>
      <nav>
        <Link to="/admin">admin</Link>
        &nbsp;
        <Link to="/home">home</Link>
      </nav>
      <Suspense fallback={<>123123</>}>
        <Routes>
          <Route path="/" element={<Admin />} />
          <Route path="admin" element={<Admin />} />
          <Route path="home" element={<Home />} />
        </Routes>
      </Suspense>
    </div>
  )
}

export default App
