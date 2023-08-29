import React, { useEffect, Suspense, useState, useContext } from 'react'
import { Navigate, Outlet, redirect, useNavigate } from 'react-router-dom'
import axios from 'axios';

function PrivateRoute() {
  const [authenticated, setAuthenticated] = useState({});
  const [loading, setLoading] = useState(true);
  const Redirec = useNavigate()
  useEffect(() => {
    var a = true
    window.axios.defaults.headers.common["Authorization"] = 'Bearer ' + localStorage.getItem('access_token');
    axios.post('/api/check')
      .then(res => {
        setAuthenticated(res.data);
      })
      .finally(() => {
        setLoading(false);
      });

    return () => a = false
  }, []);

  if (loading) {
    return (<div className='h-screen w-full items-center flex justify-center text-white bg-[#000000]'>
      <span className='text-2xl font-semibold'>Loading...</span>
    </div>)
  }

  if (authenticated.auth == true && authenticated.auth != false && authenticated.user.role === 'admin'  && !loading) {
    return <Outlet />
  }  else if(authenticated.auth == true && authenticated.auth != false && authenticated.user.role === 'user'  && !loading){
    return Redirec('/');
    }  else  {
    return Redirec('/');
  }

}

export default PrivateRoute 