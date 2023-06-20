import React, { useEffect, Suspense, useState, useCallback } from 'react'
import { Navigate, Outlet, redirect, useNavigate } from 'react-router-dom'
import axios from 'axios'

function PrivateRoute() {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const Redirec = useNavigate()

  useEffect(() => {
    var a = true
    axios.post('/api/check')
      .then(res => {
        if (res.data.auth === true) {
          setAuthenticated(true);
        } else {
          setAuthenticated(false);
        }
      })
      .catch(error => {
        setAuthenticated(false);
        return Redirec('/');
      })
      .finally(() => {
        setLoading(false);
      });
    return () => a = false
  }, []);

  if (loading) {
    return (<div className='h-screen w-full items-center flex justify-center text-white bg-[#00092b]'>
      <span className='text-2xl font-semibold'>Loading...</span>
    </div>)
  } else {
    if (authenticated) {
      return <Outlet />
    } else {
      return Redirec('/');
    }
  }
}

export default PrivateRoute