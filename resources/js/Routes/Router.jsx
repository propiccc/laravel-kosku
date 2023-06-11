import React, { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import Dashboard from '../Layouts/Dashboard'
import Login from '../pages/Auth/Login';
import NotFound from '../pages/Auth/NotFound';
import PrivateRoute from '../util/PrivateRoute';
import Guest from '../util/Guest';

const Index = lazy(() => import('../pages/System/User/Index'));
const Home = lazy(() => import('../pages/View/Home/Home'));

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
            <Route path='user' element={<Index />} exact />
          </Route>
        </Route>

      </Routes>
    </>
  )
}
export default Router