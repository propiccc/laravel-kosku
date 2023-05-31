import React, { useEffect, Suspense, useState } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import axios from 'axios'
function PrivateRoute() {
  // * Setup
  const [auth, setAuth] = useState(false)
  // * req Api
  const check = async () => {
    try {
      const res = await axios.post('/api/check');
      setAuth(res.data.auth)
    } catch (error) {
      setAuth(false)
    }
  }

  // * chcek user
  useEffect(() => {
    var a = true
    if (a) {
      check()
    }
    return () => { a = false }
  }, []);

  return (
    auth ? <Outlet /> : <Navigate to="/" />
  )
}

export default PrivateRoute