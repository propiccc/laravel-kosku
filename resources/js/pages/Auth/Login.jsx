import React from 'react'

function Login() {
  return (
    <div className='bg-gray-800 h-screen flex justify-center items-center '>
        <section className="bg-gray-700 p-6 text-center  w-[400px] shadow-gray-500 shadow-md rounded-xl max-h-fit">
            <span className='text-2xl font-semibold text-white'>Login</span>
            <div className="flex flex-col text-start mt-10 gap-y-8">
                <div className="flex flex-col">
                <input type="text" id="username" className='focus:outline-none focus:border-b-blue-700 bg-transparent border-b-[1px] p-2 text-white transition-colors duration-200' placeholder='Username/Email'/>
                </div>
                <div className="flex flex-col">
                <input type="password" id="username" className='focus:outline-none focus:border-b-blue-700 bg-transparent border-b-[1px] p-2 text-white  transition-colors duration-200' placeholder='Password'/>
                </div>
            <div className="flex justify-center w-full mt-2">
                <button className='bg-blue-700 hover:bg-blue-600 transition-all duration-200 text-white font-semibold shadow-white w-full p-1 rounded-lg active:scale-95'>Login</button>
            </div>
            </div>
        </section>
    </div>
  )
}

export default Login