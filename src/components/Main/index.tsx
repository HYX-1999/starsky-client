/*
 * @Description: Main
 * @Author: hyx
 * @Date: 2022-08-10 17:24:16
 */

import React, { lazy, Suspense } from "react"
import { Navigate, Route, Routes } from "react-router-dom"
import PageLoading from "../PageLoading"
import $style from "./index.scss"

const Home = lazy(() => import(/* webpackPrefetch:true */ "@/views/home"))
const Articles = lazy(
  () => import(/* webpackPrefetch:true */ "@/views/articles")
)
const Classes = lazy(() => import(/* webpackPrefetch:true */ "@/views/classes"))
const Tags = lazy(() => import(/* webpackPrefetch:true */ "@/views/tags"))
const Gallery = lazy(() => import(/* webpackPrefetch:true */ "@/views/gallery"))
const Say = lazy(() => import(/* webpackPrefetch:true */ "@/views/say"))
const Msg = lazy(() => import(/* webpackPrefetch:true */ "@/views/msg"))
const Link = lazy(() => import(/* webpackPrefetch:true */ "@/views/link"))
const Show = lazy(() => import(/* webpackPrefetch:true */ "@/views/show"))
const Log = lazy(() => import(/* webpackPrefetch:true */ "@/views/log"))
const About = lazy(() => import(/* webpackPrefetch:true */ "@/views/about"))

const Main = () => {
  return (
    <main className={$style.main}>
      <Suspense fallback={<PageLoading />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="articles" element={<Articles />} />
          <Route path="classes" element={<Classes />} />
          <Route path="tags" element={<Tags />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="say" element={<Say />} />
          <Route path="msg" element={<Msg />} />
          <Route path="link" element={<Link />} />
          <Route path="show" element={<Show />} />
          <Route path="log" element={<Log />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </main>
  )
}

export default Main
