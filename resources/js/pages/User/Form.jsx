import React, { useState } from 'react'
import Cancel from './../../Components/Button/Cancel';
import Create from './../../Components/Button/Create';
import Update from './../../Components/Button/Update';
import axios from 'axios';
import { toast, Toaster } from 'react-hot-toast';

function Form({ DataEdit, type, setToggle, cancle, close }) {
  // * Setup 
  const [edit, setEdit] = useState(DataEdit)
  const [Data, setData] = useState({
    name: edit?.name ?? "",
    email: edit?.email ?? "",
    password: edit?.password ?? "",
  })


  const HandleChange = (e) => {
    var key = e.target.name;
    var val = e.target.value;
    setData(data => ({
      ...data,
      [key]: val
    }))
  }

  const HandleSubmit = () => {
    var url = '/api/user/store'
    if (type == 'update') {
      url = `/api/user/${edit?.uuid}/update`
    }
    axios.post(url, Data).then(res => {
      if (res.data.success === true) {
        toast.success(res.data.data);
        setTimeout(() => {
          close()
        }, 300);
      }
    }).catch((error) => {
      if (error.response.data.data[0]) {
        error.response.data.data.forEach(e => {
          toast.error(e)
        })
      } else {
        toast.error(error.response.data)
      }
    })
  }

  return (
    <div className='bg-white rounded-lg p-6 mb-2'>
      <Toaster />
      <div className="flex justify-between items-center">
        <span className='font-semibold text-xl'>User {type == 'create' ? 'Create' : "Edit"}</span>
        <Cancel onClick={() => { cancle() }} />
      </div>
      <div className="h-[2px] w-full bg-gray-200 my-3"></div>
      <div className="flex flex-wrap gap-x-1 gap-y-2">
        <div className="flex flex-col w-full">
          <label htmlFor="name" className='font-semibold'>Name : <span className='text-red-600 font-semibold'>*</span></label>
          <input id='name' type="text" className='border-[1px] border-solid rounded-md border-black focus:outline-blue-500 px-2 py-1' name='name' value={Data.name} onChange={HandleChange} />
        </div>
        <div className="flex flex-col w-full">
          <label htmlFor="email" className='font-semibold'>Email : <span className='text-red-600 font-semibold'>*</span></label>
          <input id='email' type="text" className='border-[1px] border-solid rounded-md border-black focus:outline-blue-500 px-2 py-1' name='email' value={Data.email} onChange={HandleChange} />
        </div>
        <div className="flex flex-col w-full">
          <label htmlFor="password" className='font-semibold'>Password : <span className='text-red-600 font-semibold'>*</span></label>
          <input id='password' type="password" className='border-[1px] border-solid rounded-md border-black focus:outline-blue-500 px-2 py-1' name='password' value={Data.password} onChange={HandleChange} />
        </div>
        <div className="flex flex-col w-full">
          <label htmlFor="password_confirmation" className='font-semibold'>Password Confirmation : <span className='text-red-600 font-semibold'>*</span></label>
          <input id='password_confirmation' type="password" className='border-[1px] border-solid rounded-md border-black focus:outline-blue-500 px-2 py-1' name='password_confirmation' value={edit?.password_confirmation} onChange={HandleChange} />
        </div>
        <div className="h-[2px] w-full bg-gray-200 my-3"></div>
        <div className="flex justify-end w-full">
          {type == 'create' ? (<Create onClick={HandleSubmit} />) : (<Update onClick={HandleSubmit} />)}
        </div>
      </div>

    </div>
  )
}

export default Form