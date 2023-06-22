import React, { useState } from 'react'
import Update from './../../../Components/Button/Update';

function Index() {
  // * Setup 
  const [VisiMisi, setVisiMisi] = useState();

  // * Api Call
  return (
    <>
      <div className="bg-white pt-6 pb-2 px-6 rounded-t-lg">
        <span className='text-xl font-semibold'>Visi Misi</span>
        <div className="h-[2px] w-full bg-gray-300 my-4"></div>
      </div>
      <div className="bg-white rounded-b-lg px-6 pb-6 shadow-lg">
        <div className="flex gap-x-2">
          <div className="w-full">
            <label htmlFor="visi" className='font-semibold text-xl'>Visi :  <span className='text-red-700 font-semibold'>*</span></label>
            <input name="" id="visi" className='w-full border-[1px] border-black items-center rounded-lg p-2' />
          </div>
          <div className="w-full">
            <label htmlFor="misi" className='font-semibold text-xl'>Misi :  <span className='text-red-700 font-semibold'>*</span></label>
            <input name="" id="misi" className='w-full border-[1px] border-black items-center rounded-lg p-2' />
          </div>
        </div>
        <div className="h-[2px] w-full bg-gray-300 my-4"></div>
        <div className="flex justify-end">
          <Update />
        </div>
      </div>
    </>
  )
}

export default Index