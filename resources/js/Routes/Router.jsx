import React from 'react'
import { Routes, Route } from 'react-router-dom'
import App from '../pages/App'
import Dashboard from '../Layouts/Dashboard'
import Test from './../pages/test';
import Login from '../pages/Auth/Login';
function Router() {
  return (
    <React.StrictMode>
      {/* 
      // * Route Front 
      */}
      <Routes>
        <Route path='/' element={<Test />} />
        <Route path='/@System@bmc' element={<Login />} />
      </Routes>

      {/*
      // *  Route Content Management System 
      */}
      <Routes>
        <Route path='/user' element={
          <Dashboard children={<App />} />
        } />
        <Route path='/test' element={
          <Dashboard children={<Test />} />
        } />
      </Routes>


    </React.StrictMode>
  )
}

export default Router