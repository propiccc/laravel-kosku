import React from 'react'
import { Routes, Route } from 'react-router-dom'
import App from '../pages/App'
import Dashboard from '../Layouts/Dashboard'
function Router() {
  return (
    <React.StrictMode>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/home' element={<Dashboard />} />
      </Routes>
    </React.StrictMode>
  )
}

export default Router