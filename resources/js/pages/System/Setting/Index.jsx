import React, { useState } from 'react'
import Update from './../../../Components/Button/Update';
import LoadingBlock from '../../../Components/LoadingBlock';
import { useEffect } from 'react';
import { Toaster, toast } from 'react-hot-toast';
import Create from './../../../Components/Button/Create';
import Swal from 'sweetalert2';
import ImageUpload from './../../../Components/ImageUpload';



function Index() {
  // * Setup 
  const [Block, setBlock] = useState(true)
  const [DataForm, setDataForm] = useState({})
  const [Type, setType] = useState()
  const [Logo, setLogo] = useState(null);
  const [logoNavigation, setLogoNavigation] = useState(null)

  // * Api Call
  const SettingIndex = () => {
    setBlock(true);
    axios.post('/api/setting').then(res => {
      setDataForm(res.data);
      if (res.data.logodir != null) {
        setLogo(res.data.logodir);
      }
      setType('update');
    }).catch(err => {
      if (err.response.data.message != null) {
        toast.error(err.response.data.message)
      } else {
        err.response.data.forEach(el => {
          toast.error(el)
        });
      }
      setType('create');
      setDataForm({});
    }).finally(() => {
      setBlock(false)
    })
  }

  // * function 
  const HandleChange = (e) => {
    var key = e.target.name;
    var val = e.target.value;
    setDataForm(data => ({
      ...data,
      [key]: val
    }))
  }

  const HandleSubmit = () => {
    setBlock(true)
    var url = '/api/setting/store'
    if (Type == 'update') {
      url = `/api/setting/${DataForm?.uuid}/update`
    }

    const headers = {
      'Content-Type': 'multipart/form-data',
    };
    const formData = new FormData();
    formData.append('no_telp', DataForm.no_telp)
    formData.append('link_youtube', DataForm.link_youtube)
    formData.append('link_maps', DataForm.link_maps)
    formData.append('link_facebook', DataForm.link_facebook)
    formData.append('copyright', DataForm.copyright)

    if (typeof Logo == 'object' && Logo?.file?.name != 'blob') {
      formData.append('logo', Logo[0]?.file)
    }

    axios.post(url, formData).then(res => {
      if (res.data.success === true) {
        toast.success(res.data.data);
      }
    }).catch(err => {
      if (err.response.data.message != null) {
        toast.error(err.response.data.message)
      } else {
        err.response.data.data.forEach(el => {
          toast.error(el)
        });
      }
    }).finally(() => {
      SettingIndex()
      setBlock(false)
    })
  }

  const HandleDelete = (uuid) => {
    var url = `/api/setting/${uuid}/delete`
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: 'Please Wait !',
          html: 'Loading...',// add html attribute if you want or remove
          allowOutsideClick: false,
          showConfirmButton: false
        });
        axios.delete(url).then(res => {
          if (res.data.success === true) {
            Swal.fire(
              'Deleted!',
              'Your file has been deleted.',
              'success'
            )
            setTimeout(() => {
              setDataForm(null)
              SettingIndex({});
            }, 300)
          }
        }).catch(error => {
          Swal.fire({
            icon: 'error',
            title: 'Data Failed To Delete!',
            text: 'Something went wrong!',
          })
        });
      }
    })
  }

  // * Effect
  useEffect(() => {
    var a = true;
    if (a) {
      SettingIndex()
    }
    return () => { a = false }
  }, [])

  return (
    <>
      <Toaster />
      <div className="bg-white pt-6 pb-2 px-6 rounded-t-lg">
        <span className='text-xl font-semibold'>Settings</span>
        <div className="h-[2px] w-full bg-gray-300 my-4"></div>
      </div>
      <div className="bg-white rounded-b-lg px-6 pb-6 shadow-lg">
        {Block ? (<div className="w-full">
          <LoadingBlock />
        </div>) : (<>
          <div className="flex gap-x-2">
            <div className="w-full">
              <label htmlFor="link_youtube" className='font-semibold text-lg'>Link Youtube :  <span className='text-red-700 font-semibold'>*</span></label>
              <input name="link_youtube" id="link_youtube" className='w-full border-[1px] border-black items-center rounded-lg p-2' value={DataForm?.link_youtube ?? ""} onChange={HandleChange} />
            </div>
            <div className="w-full">
              <label htmlFor="link_facebook" className='font-semibold text-lg'>Link Facebook :  <span className='text-red-700 font-semibold'>*</span></label>
              <input name="link_facebook" id="link_facebook" className='w-full border-[1px] border-black items-center rounded-lg p-2' value={DataForm?.link_facebook ?? ""} onChange={HandleChange} />
            </div>
            <div className="w-full">
              <label htmlFor="link_maps" className='font-semibold text-lg'>Link Google Maps :  <span className='text-red-700 font-semibold'>*</span></label>
              <input name="link_maps" id="link_maps" className='w-full border-[1px] border-black items-center rounded-lg p-2' value={DataForm?.link_maps ?? ""} onChange={HandleChange} />
            </div>
          </div>
          <div className="flex gap-x-2 mt-4">
            <div className="w-full">
              <label htmlFor="no_telp" className='font-semibold text-lg'>No Telp :  <span className='text-red-700 font-semibold'>*</span></label>
              <input name="no_telp" id="no_telp" className='w-full border-[1px] border-black items-center rounded-lg p-2' value={DataForm?.no_telp ?? ""} onChange={HandleChange} />
            </div>
            <div className="w-full">
              <label htmlFor="copyright" className='font-semibold text-lg'>Copyright :  <span className='text-red-700 font-semibold'>*</span></label>
              <input name="copyright" id="copyright" className='w-full border-[1px] border-black items-center rounded-lg p-2' value={DataForm?.copyright ?? ""} onChange={HandleChange} />
            </div>
          </div>
          <div className="flex gap-x-2">
            <ImageUpload name="Logo Bmc" setFiles={setLogo} files={Logo} />
            <ImageUpload name="Logo Navigationbar" />
          </div>
        </>)}
        <div className="h-[2px] w-full bg-gray-300 my-5"></div>
        <div className="flex justify-end gap-x-2">
          {Type === 'create' ? (<Create onClick={HandleSubmit} />) : null}
          {Type === 'update' ? (
            <button className='flex items-center bg-red-500 text-white hover:bg-red-300 hover:text-red-700 transition-all duration-200 py-2 justify-center px-2 cursor-pointer rounded-md active:scale-95' onClick={() => { HandleDelete(DataForm?.uuid) }}>
              <div className="h-full flex justify-center items-center">
                <span className='font-semibold text-lg px-1'>Reset</span>
              </div>
            </button>
          ) : null}
          {Type === 'update' ? (<Update onClick={HandleSubmit} />) : null}

        </div>
      </div>
    </>
  )
}

export default Index




