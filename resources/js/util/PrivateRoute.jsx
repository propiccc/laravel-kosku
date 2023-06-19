import React, { useEffect, Suspense, useState, useCallback } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import axios from 'axios'

function PrivateRoute() {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.post('/api/check')
      .then(res => {
        if (res.data.auth === true) {
          setAuthenticated(true);
        } else {
          setAuthenticated(false);
        }
      })
      .catch(error => {
        if (error.response && error.response.status === 401) {
          setAuthenticated(false);
        }
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (<div className='h-screen w-full items-center flex justify-center text-white bg-[#00092b]'>
      <span className='text-2xl font-semibold'>Loading...</span>
    </div>)
  }

  if (authenticated) {
    return <Outlet />;
  } else {
    return <Navigate to="/" />;
  }
}


export default PrivateRoute