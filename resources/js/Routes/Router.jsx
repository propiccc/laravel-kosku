import React from 'react'
import { Routes, Route } from 'react-router-dom'
import App from '../pages/App'
import Dashboard from '../Layouts/Dashboard'
import Test from './../pages/test';
import Login from '../pages/Auth/Login';
import NotFound from '../pages/Auth/NotFound';
import Index from '../pages/User/Index';

function Router() {

  return (
    <>
      <Routes>
        <Route path='/*' element={<NotFound />} />
        <Route path='/' element={<Test />} />
        <Route path='/@System@bmc' element={<Login />} />

        <Route path="/system">
          <Route path='user' element={
            <Dashboard children={<Index />} />
          } />
          {/* <Route path='test' element={
            <Dashboard children={<Test />} />
          } /> */}
        </Route>
      </Routes>
    </>
  )
}
export default Router