import React from 'react'
import Cancel from './../../Components/Button/Cancel';
import Create from './../../Components/Button/Create';
import Update from './../../Components/Button/Update';

function Form({ DataEdit = null, Type = 'create', setToggle }) {
  return (
    <div className='bg-white rounded-lg p-6 mb-2'>
      <div className="flex justify-between items-center">
        <span className='font-semibold text-xl'>User Data</span>
        <Cancel />
      </div>
      <div className="h-[2px] w-full bg-gray-200 my-3"></div>
      <div className="flex flex-wrap gap-x-1 gap-y-2">
        <div className="flex flex-col w-full">
          <label htmlFor="name" className='font-semibold'>Name : *</label>
          <input type="text" className='border-[1px] border-solid rounded-md border-black focus:outline-blue-500 p-1' />
        </div>
        <div className="flex flex-col w-full">
          <label htmlFor="email" className='font-semibold'>Email : *</label>
          <input type="text" className='border-[1px] border-solid rounded-md border-black focus:outline-blue-500 p-1' />
        </div>
        <div className="flex flex-col w-full">
          <label htmlFor="email" className='font-semibold'>Password : *</label>
          <input type="text" className='border-[1px] border-solid rounded-md border-black focus:outline-blue-500 p-1' />
        </div>
        <div className="flex flex-col w-full">
          <label htmlFor="email" className='font-semibold'>Password Confirmation : *</label>
          <input type="text" className='border-[1px] border-solid rounded-md border-black focus:outline-blue-500 p-1' />
        </div>
        <div className="h-[2px] w-full bg-gray-200 my-3"></div>
        <div className="flex justify-end w-full">
          {Type == 'create' ? (<Create />) : (<Update />)}
        </div>
      </div>

    </div>
  )
}

export default Form