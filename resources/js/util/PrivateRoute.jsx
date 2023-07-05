import React, { useEffect, Suspense, useState, useContext } from 'react'
import { Navigate, Outlet, redirect, useNavigate } from 'react-router-dom'
import axios from 'axios';

function PrivateRoute() {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const Redirec = useNavigate()
  useEffect(() => {
    var a = true
    // const headers = {
    //   'Authorization': `Bearer ${localStorage.getItem('access_token')}`
    // };
    window.axios.defaults.headers.common["Authorization"] = 'Bearer ' + localStorage.getItem('access_token');
    axios.post('/api/check')
      .then(res => {
        setAuthenticated(res.data);
      })
      .finally(() => {
        console.log(authenticated);
        setLoading(false);
      });

    return () => a = false
  }, []);

  console.log(authenticated);

  if (loading) {
    return (<div className='h-screen w-full items-center flex justify-center text-white bg-[#00092b]'>
      <span className='text-2xl font-semibold'>Loading...</span>
    </div>)
  }
  if (authenticated?.auth && !loading) {
    return <Outlet />
  } else {
    return Redirec('/');
  }

}

export default PrivateRoute 