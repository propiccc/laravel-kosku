import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, redirect, useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';



function Login() {

  const navigate = useNavigate()
  const [animate, setAnimate] = useState(1);
  const [loading, setLoading] = useState(false)
  const [Data, setData] = useState({
    'username': "",
    'password': ""
  });

  const HandleChange = (e) => {
    var value = e.target.value;
    var key = e.target.name;
    setData(e => ({
      ...e,
      [key]: value
    }))
  }

  const Login = async () => {
    setLoading(true);
    try {
      const res = await axios.post('/api/login', Data);
      if (res.data.data.access_token) {
        var token = `Bearer ${res.data.data.access_token}`;
        localStorage.setItem("access_token", token);
        return navigate('/system/user');
      } else {
        localStorage.removeItem('access_token');
        return navigate('/')
      }

    } catch (error) {
      if (error.response.data.data) {
        error.response.data.data.forEach(e => {
          toast.error(e);
        });
      } else {
        toast.error("Username/Password Anda Salah!");
      }
    } finally {
      setLoading(false)
    }
  }

  const ComLoading = () => {
    return (
      <div role="status">
        <svg aria-hidden="true" className="inline w-6 h-6 mr-2 text-white animate-spin dark:text-gray-800 fill-white dark:bg-transparent" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
          <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
        </svg>
      </div>
    )
  }


  return (
    <div className={`bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-screen flex justify-center items-center `}>
      <Toaster />
      <section className="bg-opacity-10 bg-white p-6 text-center w-[600px] shadow-md rounded-xl max-h-fit border-[1px] border-white backdrop-blur-sm animate-background ">

        <div className='h-20 w-full flex justify-center mb-5'>
          <img src="/storage/asset/LogoBmc.png" alt="Logo Bmc" className='w-20 h-20 bg-white rounded-[50%]' />
        </div>
        <span className='text-xl font-semibold text-white'>Login Your Account Here!</span>

        <div className="flex flex-col text-start mt-5">
          <div className="flex flex-col mb-10">
            <input type="text" id="username" className='focus:outline-none focus:border-b-blue-500 bg-transparent border-b-[2px] p-4 text-white transition-colors duration-200 text-lg placeholder-white' placeholder='Username/Email' autoComplete='off' name='username' onChange={HandleChange} />
          </div>
          <div className="flex flex-col mb-10">
            <input type="password" id="password" className='focus:outline-none focus:border-b-blue-500 bg-transparent border-b-[2px] p-4 text-white transition-colors duration-200 text-lg placeholder-white' placeholder='Password' autoComplete='off' name='password' onChange={HandleChange} />
          </div>
          <div className="flex justify-center w-fu ll mt-2 mb-5">
            <button className='bg-blue-700 hover:bg-blue-600 transition-all duration-200 text-white font-semibold shadow-white w-full p-2 rounded-lg active:scale-95' onClick={Login} disabled={loading}>{loading ? (<ComLoading />) : "Login"}</button>
          </div>
          <div className="flex w-full justify-start font-semibold">
            <Link className='text-gray-200 hover:text-cyan-400' to="/">Back To Home</Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Login