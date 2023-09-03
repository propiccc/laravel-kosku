import React, { Suspense } from 'react'
import PemilikNav from '../pages/View/Navbar/PemilikNav'
import { Outlet } from 'react-router-dom'
import './Scroll.css'
function Loading() {
  return (
      <>
          <div className="flex p-40 bg-white rounded-lg shadow-lg justify-center">
              <span className="text-lg text-center">Loading...</span>
          </div>
      </>
  );
}
function DashboardPemilik() {
  return (
    <>
    <PemilikNav />
        <div className="w-full bg-white  p-10 h-[calc(100vh-72px)] overflow-scroll scrollbar-none">
            <Suspense fallback={<Loading />}>
                <Outlet />
            </Suspense>
        </div>
    </>
    )
}

export default DashboardPemilik