import React, { useState } from 'react'
import  Cancel  from '../../../Components/Button/Cancel'
import axios from 'axios';
import  MultyImageUpload  from '../../../Components/MultyImageUpload'
import CurrencyInput from 'react-currency-input-field';
import { stringify } from 'postcss';

function Form({ Close, DataEdit }) {
    
// * Data
    const [edit, setEdit] = useState(DataEdit);
    const [Images, setImages] = useState([
      
    ]);
    const [DataForm, setDataForm] = useState({
      lebar: edit?.lebar ?? "", 
      panjang: edit?.panjang ?? "", 
      khusus:  edit?.khusus ?? "",
      harga:  edit?.harga ?? 0,
      description: edit?.description ?? "",
      lokasi: edit?.lokasi ?? "",
    });
    console.log(DataForm);

  // * Function 
  const HandleChange = (e) => {
    var key = e.target.name;
    var val = e.target.value;
    setDataForm(data => ({
      ...data,
      [key]: val
    }))
  }


  const HandleSubmit = (e) => {
      e.preventDefault();
        var url = '/api/property/store'
        // if (type == 'update') {
        //   url = `/api/property/${edit?.uuid}/update`
      if(Object.keys(Images).length != 0){
        const ImageFormat = Images.map((item) => ({
            filename: item.file.name,
            data: item.getFileEncodeBase64String()
        }));

        setDataForm( e => ({ ...e, image: ImageFormat}))
      }

      
        axios.post(url, DataForm ).then(res => {
          if (res.data.success === true) {
            toast.success(res.data.data);
            setTimeout(() => {
              close()
            }, 300);
          }
        })
  }
  
      console.log(Object.keys(Images).length);
  return (
    <>
    <div className='bg-gray-500 border-t-[3px] border-b-[2px] border-gray-500 font-semibold rounded-t-lg py-2 px-6 flex justify-between items-center text-white'>
        Add Property
        <Cancel onClick={() => Close()} />
    </div>
    <div className='bg-gray-800 border-b-[3px] border-gray-300 rounded-b-lg p-6'> 
        <div className="bg-full flex p-4 text-white">
            <MultyImageUpload setFiles={setImages} files={Images} />
        </div>

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
                    <label htmlFor="mation" className='font-semibold'>Lokasi : <span className='text-red-600 font-semibold'>*</span></label>
                    <input id='test' type="text" className='border-[1px] border-solid rounded-md border-black focus:outline-blue-500 px-2 py-1 text-black'  name='lokasi' value={DataForm.lokasi} onChange={HandleChange} placeholder='Input the Location' autoComplete='off' required/>
                </div>
                <div className="flex w-[calc(50%-10px)] gap-x-1">
                  <div className="flex flex-col w-full">
                      <label htmlFor="mation" className='font-semibold'>Panjang(m) : <span className='text-red-600 font-semibold'>*</span></label>
                      <input id='test' type="number" className='border-[1px] border-solid rounded-md border-black focus:outline-blue-500 px-2 py-1 text-black' name='panjang' value={DataForm.panjang} onChange={HandleChange} placeholder='Input Panjang' autoComplete='off' required/>
                  </div>
                  <div className="flex flex-col w-full">
                      <label htmlFor="mation" className='font-semibold'>Lebar(m) : <span className='text-red-600 font-semibold'>*</span></label>
                      <input id='test' type="number" className='border-[1px] border-solid rounded-md border-black focus:outline-blue-500 px-2 py-1 text-black'  name='lebar' value={DataForm.lebar} onChange={HandleChange} placeholder='Input Lebar' autoComplete='off' required/>
                  </div>
                </div>
                <div className="flex flex-col w-[calc(50%-10px)]">
                    <label  className='font-semibold'>Tipe : <span className='text-red-600 font-semibold'>*</span></label>
                    <select id="" className='p-1 border-[1px] border-black rounded-lg focus:outline-blue-500 text-black' name='khusus' value={DataForm.khusus} onChange={HandleChange} required>
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
                {/* <div className="flex flex-col w-[calc(50%-10px)]">
                    <label htmlFor="deskripsi" className='font-semibold'>Alamat : <span className='text-red-600 font-semibold'>*</span></label>
                    <input id='deskripsi' type="text" className='border-[1px] border-solid rounded-md border-black focus:outline-blue-500 px-2 py-1 text-black'  placeholder='Input The Description'  autoComplete='off' required/>
                </div> */}
                <div className="flex flex-col w-[calc(50%-10px)]">
                    <label htmlFor="deskripsi" className='font-semibold'>Deskripsi : <span className='text-red-600 font-semibold'>*</span></label>
                    <textarea id='deskripsi' type="text" className='border-[1px] border-solid rounded-md border-black focus:outline-blue-500 px-2 py-1 text-black'  name='description' value={DataForm.description} onChange={HandleChange}  placeholder='Input The Description'  autoComplete='off' required/>
                </div>
                <div className="p-1 w-full">
                    <button type='submit' className='mt-5 px-4 py-2 rounded-lg bg-blue-700 font-semibold text-white'>Submit</button>
                </div>
        </form>
        
    </div>
    </>
  )
}

export default Form