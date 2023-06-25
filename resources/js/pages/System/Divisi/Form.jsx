import React, { useState, useEffect } from 'react'
import Cancel from '../../../Components/Button/Cancel';
import Create from '../../../Components/Button/Create';
import Update from '../../../Components/Button/Update';
import axios from 'axios';
import { toast, Toaster } from 'react-hot-toast';
import ImageUpload from './../../../Components/ImageUpload';
import { BsSliders } from 'react-icons/bs';

function Form({ DataEdit, type, setToggle, cancle, close }) {
  // * Setup 
  const [edit, setEdit] = useState(DataEdit)
  const [ImageFile, setImageFile] = useState(edit?.imagedir ?? null);
  const [Data, setData] = useState({
    title: edit?.title ?? "",
    description: edit?.description ?? "",
  })


  const HandleChange = (e) => {
    var key = e.target.name;
    var val = e.target.value;
    setData(data => ({
      ...data,
      [key]: val
    }))
  }

  const HandleSubmit = (e) => {
    e.preventDefault()
    var url = '/api/divisi/store'
    if (type == 'update') {
      url = `/api/divisi/${edit?.uuid}/update`
    }

    const headers = {
      'Content-Type': 'multipart/form-data',
    };

    const formData = new FormData();
    formData.append('title', Data.title)
    formData.append('description', Data.description)

    if (typeof ImageFile == 'object' && ImageFile?.file?.name != 'blob') {
      formData.append('image', ImageFile[0]?.file)
    }
    axios.post(url, formData, { headers }).then(res => {
      if (res.data.success === true) {
        toast.success(res.data.data);
        setTimeout(() => {
          close()
        }, 300);
      }
    }).catch(err => {
      if (err.response.data.message != null) {
        toast.error(err.response.data.message)
      } else {
        err.response.data.forEach(el => {
          toast.error(el)
        });
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
      <form onSubmit={HandleSubmit} >
        <div className="flex flex-wrap gap-x-1 gap-y-2">
          <div className="flex w-full gap-x-1">
            <div className="flex flex-col w-full">
              <label htmlFor="title" className='font-semibold'>Title : <span className='text-red-600 font-semibold'>*</span></label>
              <input id='title' type="text" className='border-[1px] border-solid rounded-md border-black focus:outline-blue-500 px-2 py-1' name='title' value={Data.title} onChange={HandleChange} autoComplete='off' />
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="description" className='font-semibold'>Description : <span className='text-red-600 font-semibold'>*</span></label>
              <input id='description' type="text" className='border-[1px] border-solid rounded-md border-black focus:outline-blue-500 px-2 py-1' name='description' value={Data.description} onChange={HandleChange} autoComplete='off' />
            </div>
          </div>
          <div className=" w-full flex">
            <ImageUpload files={ImageFile} setFiles={setImageFile} />
          </div>
          <div className="h-[2px] w-full bg-gray-200 my-3"></div>
          <div className="flex justify-end w-full">
            {type == 'create' ? (<Create onClick={HandleSubmit} />) : (<Update onClick={HandleSubmit} />)}
          </div>
        </div>
      </form>
    </div>
  )
}

export default Form