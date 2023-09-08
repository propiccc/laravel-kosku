import React, { useState } from 'react'
import  Cancel  from '../../../Components/Button/Cancel'
import axios from 'axios';
import  MultyImageUpload  from '../../../Components/MultyImageUpload'
import CurrencyInput from 'react-currency-input-field';
import { toast, Toaster } from 'react-hot-toast';
import Swal from 'sweetalert2';


function Form({ Close, DataEdit, GetProperty, GetParentProperty, type }) {
    
// * Data
  const [edit, setEdit] = useState(DataEdit);
  const [ImageFile, setImageFile] = useState([]);
  const [DataForm, setDataForm] = useState({
    lebar: edit?.lebar ?? "", 
    panjang: edit?.panjang ?? "", 
    khusus:  edit?.khusus ?? "",
    harga:  edit?.harga ?? 0,
    description: edit?.description ?? "",
    lokasi: edit?.lokasi ?? "",
  });

  // * Function 



  const HandleChange = (e) => {
    var key = e.target.name;
    var val = e.target.value;
    setDataForm(data => ({
      ...data,
      [key]: val
    }))
  }
  
  const HandleDeleteChildImg = (uuid) => {
    var url = `/api/property/childimgproperty/${uuid}/delete`;
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
        axios.post(url).then(res => {
          if (res.data.success === true) {
            GetParentProperty(edit.uuid);
            Swal.fire(
              'Deleted!',
              'Your file has been deleted.',
              'success'
              )
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

  const HandleSubmit = (e) => {
      e.preventDefault();

      var url = '/api/property/store'
      
      if (type == 'update') {
        url = `/api/property/${edit?.uuid}/update`
      }

      const headers = {
        'Content-Type': 'multipart/form-data',
      };
    
      const formData = new FormData();
      if (typeof ImageFile == 'object' && ImageFile?.file?.name != 'blob') {
        
        formData.append('harga', DataForm.harga)
        formData.append('panjang', DataForm.panjang)
        formData.append('lebar', DataForm.lebar)
        formData.append('khusus', DataForm.khusus)
        formData.append('description', DataForm.description)
        formData.append('lokasi', DataForm.lokasi)

        for (let index = 0; index < ImageFile.length; index++) {
          formData.append('images[]', ImageFile[index]?.file)
        }
      }
  
      axios.post(url, formData, { headers }).then(res => {
          if (res.data.success === true) {
            toast.success(res.data.data);
            setTimeout(() => {
              GetProperty();
              Close();
            }, 700);
          }
        }).catch(err => {
          if (err.response.data.message != null) {
            toast.error(err.response.data.message)
          } else {
            err.response.data.data.forEach(el => {
              toast.error(el)
            });
          }
        })
  }
  

  return (
    <>
    <Toaster />
    <div className='bg-gray-700 border-t-[3px] border-b-[2px] border-gray-700 font-semibold rounded-t-lg py-2 px-6 flex justify-start items-center text-white'>
        Add Property
    </div>
    <div className='bg-gray-800 border-b-[3px] border-gray-300 rounded-b-lg p-6'> 

        <div className="bg-full flex p-4 text-white">
            <MultyImageUpload setFiles={setImageFile} files={ImageFile} name={type === 'update' ? 'Tambah Image' : 'Image'} />
        </div>

        {type === "update" && edit != null ? (
        <div className='p-4'>
          <span className='font-semibold text-white'>Edit Image : </span>
          <span className='font-normal text-sm text-gray-400'>Click Image Jika Ingin Melihat Detail Image</span>
          <div className="flex gap-x-2 mt-1">
            {edit?.child_img.map((item, index) => (
              <>
                <div className=" flex flex-col">
                  <a href={item.imagedir} target='_blank'>
                    <img src={item.imagedir} alt="" className='h-[90px]' key={index}/>
                  </a>
                  <button onClick={() => HandleDeleteChildImg(item.uuid)} className='text-center text-white flex justify-center mt-1 items-center bg-red-500 rounded-sm active:scale-95 transition-all duration-300 '>
                    Delete
                  </button>
                </div>
              </>
              ))}
          </div>
        </div>
        ) : null}

        <form method='POST' onSubmit={HandleSubmit} className='bg-full flex flex-wrap gap-2 w-full p-4 text-white'>
                <div className="flex flex-col w-[calc(50%-10px)]">
                    <label htmlFor="password_confirmation" className='font-semibold'>Harga : <span className='text-red-600 font-semibold'>*</span></label>
                    <CurrencyInput
                      id="input-example"
                      name="harga"
                      placeholder="Please enter a number"
                      decimalsLimit={2}
                      value={DataForm.harga}
                      className='text-black p-1 rounded-lg focus:outline-blue-600'
                      onValueChange={(value, name) => setDataForm(e => ({
                        ...e,
                        harga: value == null ? 0 : value
                      }))}
                      required
                    />
                </div>
                <div className="flex flex-col w-[calc(50%-10px)]">
                    <label htmlFor="location" className='font-semibold'>Lokasi : <span className='text-red-600 font-semibold'>*</span></label>
                    <input id='location' type="text" className='border-[1px] border-solid rounded-md border-black focus:outline-blue-500 px-2 py-1 text-black'  name='lokasi' value={DataForm.lokasi} onChange={HandleChange} placeholder='Input the Location' autoComplete='off' required/>
                </div>
                <div className="flex w-[calc(50%-10px)] gap-x-1">
                  <div className="flex flex-col w-full">
                      <label htmlFor="panjang" className='font-semibold'>Panjang(m) : <span className='text-red-600 font-semibold'>*</span></label>
                      <input id='panjang' type="number" className='border-[1px] border-solid rounded-md border-black focus:outline-blue-500 px-2 py-1 text-black' name='panjang' value={DataForm.panjang} onChange={HandleChange} placeholder='Input Panjang' autoComplete='off' required/>
                  </div>
                  <div className="flex flex-col w-full">
                      <label htmlFor="lebar" className='font-semibold'>Lebar(m) : <span className='text-red-600 font-semibold'>*</span></label>
                      <input id='lebar' type="number" className='border-[1px] border-solid rounded-md border-black focus:outline-blue-500 px-2 py-1 text-black'  name='lebar' value={DataForm.lebar} onChange={HandleChange} placeholder='Input Lebar' autoComplete='off' required/>
                  </div>
                </div>
                <div className="flex flex-col w-[calc(50%-10px)]">
                    <label htmlFor='op'  className='font-semibold'>Tipe : <span className='text-red-600 font-semibold'>*</span></label>
                    <select id="op" className='p-1 border-[1px] border-black rounded-lg focus:outline-blue-500 text-black' name='khusus' value={DataForm.khusus} onChange={HandleChange} required>
                        <option value={null} className='p-10 text-xl'>
                            Pilih
                        </option>
                        <option value="Campur" className='p-2 text-xl'>
                            Campur
                        </option>
                        <option value="Putra" className='p-2 text-xl'>
                            Putra
                        </option>
                        <option value="Putri" className='p-2 text-xl'>
                            Putri
                        </option>
                    </select>
                </div>

                <div className="flex flex-col w-[calc(50%-10px)]">
                    <label htmlFor="description" className='font-semibold'>Deskripsi : <span className='text-red-600 font-semibold'>*</span></label>
                    <textarea id='description' type="text" className='border-[1px] border-solid rounded-md border-black focus:outline-blue-500 px-2 py-1 text-black'  name='description' value={DataForm.description} onChange={HandleChange}  placeholder='Input The Description'  autoComplete='off' required/>
                </div>
                <div className="p-1 flex w-full gap-x-1">
                  {type != 'update' ? (
                    <button type='submit' className='mt-5 px-4 py-2 rounded-lg bg-blue-700 font-semibold text-white'>Submit</button>
                  ): (
                    <button type='submit' className='mt-5 px-4 py-2 rounded-lg bg-green-600 font-semibold text-white'>Update</button>
                  )}
                  <button onClick={() => Close()} className='mt-5 px-4 py-2 rounded-lg bg-red-600 font-semibold text-white'>Cancel</button>
                </div>
        </form>
        
    </div>
    </>
  )
}

export default Form