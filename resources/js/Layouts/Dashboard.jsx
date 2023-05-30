import React, { useEffect, useState } from 'react'
import { FaRegSun, FaUserAlt } from 'react-icons/fa'
import Menu from './../Components/Menu';
import { Link, Outlet } from 'react-router-dom';

function Dashboard({ children, className }) {
  const [Time, setTime] = useState(null)
  //setup

  //functions
  function DateKu() {
    var d = (new Date() + "").split(" ");
    return [d[2], d[1], d[3]].join(" ");
  }

  useEffect(() => {
    const test = setInterval(() => {
      var d = (new Date() + "").split(" ");
      setTime(d[4])
    }, 1000);
    return (() => clearInterval(test))
  }, [])

  return (
    <>
      <div className="flex w-full bg-gray-300 h-screen max-h-fit scrollbar-hide flex-col lg:flex-row">
        <div className="bg-[#00092b] w-full lg:w-80 flex flex-col overflow-auto">
          <div className="h-[106px] border-b-2 border-gray-200 flex items-center">
            <img className='h-[80px] w-[240px] text-white' src="/storage/asset/LogoDashboard.png" alt="logo bmc" />
          </div>
          <div className="h-full overflow-y-scroll p-2 py-1 scrollbar-none">
            <Menu href='/system/user' name="User" icon={<FaUserAlt className={`w-[27px] h-[37px] ${"/system/user" == window.location.pathname ? 'text-black' : "text-white"}`} />} className={`w-[27px] h-[37px] ${"/system/user" == window.location.pathname ? 'text-black' : "text-white"}`} />
            <Menu href='/system/test' name="Test" icon={<FaRegSun className={`w-[27px] h-[37px] ${"/system/test" == window.location.pathname ? 'text-black' : "text-white"}`} />} className={`w-[27px] h-[37px] ${"/system/test" == window.location.pathname ? 'text-black' : "text-white"}`} />
          </div>
        </div>
        <div className="w-full overflow-y-auto-auto scrollbar-hide">
          {/* Navabr Start */}
          <div className="bg-[#00092b] w-full flex h-24 justify-between text-white border-b-2 border-gray-200">
            <div className="flex items-center w-full justify-center">
              <div className="bg-white bg-opacity-5 text-white px-10 py-2 rounded-lg">
                {DateKu()}  {Time}
              </div>
            </div>
            {/* <div className="flex justify-center items-center text-lg font-semibold ml-4">{header}</div> */}
            <div className="flex justify-center items-center mr-2">
              <Link to='/' className='btn btn-ghost btn-info'>Home</Link>
              {/* <button className='btn btn-ghost btn-info' onClick={Logout}>Logout</button> */}
              {/* <button className='btn btn-circle btn-info' onClick={HandleZise}>Profile</button> */}
            </div>
          </div>
          {/* Navabr end */}

          {/* Componenet start */}
          <div className={`bg-gray-300 h-max max-h-fit ${className} py-6 px-6 transition-all duration-500`}>
            {children}
          </div>
          {/* Componenet end */}
        </div>
      </div>
    </>
  )
}

export default Dashboard