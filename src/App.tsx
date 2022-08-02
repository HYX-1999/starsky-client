/*
 * @Description:
 * @Author: hyx
 * @Date: 2022-08-01 16:59:12
 * @LastEditors: hyx
 * @LastEditTime: 2022-08-02 18:21:02
 */

import { lazy, Suspense } from "react"
import { Link, Route, Routes } from "react-router-dom"

const Home = lazy(() => import("@/views/Home"))

const Admin = lazy(() => import("@/views/Admin"))

const App = () => {
  return (
    <div>
      <nav>
        <Link to="/admin">admin</Link>
        &nbsp;
        <Link to="/home">home</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Admin />} />
        <Route path="admin" element={<Admin />} />
        <Route path="home" element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
