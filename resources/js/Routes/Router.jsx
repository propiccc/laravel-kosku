import React, { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import Dashboard from '../Layouts/Dashboard'
import Login from '../pages/Auth/Login';
import NotFound from '../pages/Auth/NotFound';
import PrivateRoute from '../util/PrivateRoute';
import Guest from '../util/Guest';

const UserIndex = lazy(() => import('../pages/System/User/Index'));
const SliderIndex = lazy(() => import('../pages/System/Slider/Index'));
const Home = lazy(() => import('../pages/View/Home/Home'));
const VisiMisiIndex = lazy(() => import('../pages/System/VisiMisi/Index'));
const SettingInadex = lazy(() => import('../pages/System/Setting/Index'));
const DivisiIndex = lazy(() => import('../pages/System/Divisi/Index'));
const NewsIndex = lazy(() => import('../pages/System/News/Index'));

function Router() {
  return (
    <>
      <Routes>
        <Route path='/*' element={<NotFound />} />
        <Route path='/' element={<Home />} />
        <Route element={<Guest />}>
          <Route path='/@System@bmc' element={<Login />} />
        </Route>

        <Route path="/system" element={<PrivateRoute />}>
          <Route element={<Dashboard />}>
            <Route path='user' element={<UserIndex />} />
            <Route path='slider' element={<SliderIndex />} exact />
            <Route path='visimisi' element={<VisiMisiIndex />} exact />
            <Route path='news' element={<NewsIndex />} exact />
            <Route path='setting' element={<SettingInadex />} exact />
            <Route path='divisi' element={<DivisiIndex />} exact />
          </Route>
        </Route>

      </Routes>
    </>
  )
}
export default Router