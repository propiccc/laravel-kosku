import React, { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import Dashboard from '../Layouts/Dashboard'
import Test from './../pages/test';
import Login from '../pages/Auth/Login';
import NotFound from '../pages/Auth/NotFound';
import PrivateRoute from '../util/PrivateRoute';
import Guest from '../util/Guest';

const Form = lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => resolve(import("../pages/User/Form")), 1000);
  });
})
// const Index = lazy(() => {
//   return new Promise(resolve => {
//     setTimeout(() => resolve(import("../pages/User/Index")), 1000);
//   });
// })
const Index = lazy(() => import('../pages/User/Index'));

function Router() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Test />} />
        <Route path='/*' element={<NotFound />} />

        <Route element={<Guest />}>
          <Route path='/@System@bmc' element={<Login />} />
        </Route>

        <Route path="/system" element={<PrivateRoute />}>
          <Route element={<Dashboard />}>
            <Route path='user' element={<Index />} exact />
            <Route path='test' element={<Form />} exact />
          </Route>
        </Route>

      </Routes>
    </>
  )
}
export default Router