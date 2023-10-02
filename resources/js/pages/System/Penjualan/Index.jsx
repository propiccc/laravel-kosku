import React, { useState, useEffect } from 'react'
import Add from '../../../Components/Button/Add';
import Loading from '../../../Components/Loading';
import axios from 'axios';
import Delete from '../../../Components/Button/Delete';
import Swal from 'sweetalert2';
import Edit from '../../../Components/Button/Edit';
import toast, { Toaster } from 'react-hot-toast';
import { MdOutlineNavigateNext, MdNavigateBefore } from 'react-icons/md'

import { FaPencilRuler } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom';

function DateKu() {
  var d = (new Date() + "").split(" ");
  return [d[2], d[1], d[3]].join(" ");
}

function Index() {

  const [block, setBlock] = useState(true)
  const navigate = useNavigate()
  const [Penjualan, setPenjualan] = useState([])
  const [page, setPage] = useState(1)
  const [Paginate, setPagiante] = useState({
    search: "",
    tampilkan: ""
  })

  // * Api Call & Request
  const SwitchPage = (url, page) => {
    setBlock(true)
    axios.post(url + page, Paginate).then(res => {
      setPenjualan(res.data);
    }).catch(error => {
      setPenjualan([]);
      console.log(error);
    }).finally(
      setTimeout(() => {
        setBlock(false)
      }, 600)
    );
  }



  // * function
  const HandleSwitchPage = (type) => {
    switch (type) {
      case "next":
        setPage(e => e + 1)
        break;
      case "prev":
        setPage(e => e - 1)
        break;
    }
  }

  const HandleToggle = () => {
    setType('create')
    setToggle(e => !e)
  }

  // * Debonce Search && Paginate && Show
  useEffect(() => {
    const debounce = setTimeout(() => {
      SwitchPage('/api/payment?page=', page)
    }, 700);
    return () => clearTimeout(debounce)
  }, [Paginate, page])


  return (
    <>
      <Toaster />
      <div className="bg-white rounded-lg p-6 shadow-lg transition-all duration-1000">
        <div className="flex justify-between items-center">
          <span className='font-semibold text-xl'>Penjualan Data</span>
          {/* <Add onClick={HandleToggle} /> */}
        </div>
        <div className="h-[2px] w-full bg-gray-300 my-3"></div>
        <div className="flex justify-between items-center mb-4">
          <input type="number" className='p-2 border-[1px] border-gray-400 rounded-md w-[80px] [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none' value={Paginate.tampilkan} onChange={(e) => setPagiante({ ...Paginate, tampilkan: e.target.value })} />
          <input disabled type="text" className='p-2 border-[1px] border-gray-400 rounded-md' placeholder='Search' value={Paginate.search} onChange={(e) => setPagiante({ ...Paginate, search: e.target.value })} />
        </div>
        <div className="overflow-y-auto">
          <table className='w-full'>
            <thead className='h-10 bg-gray-300 rounded-lg text-start'>
              <tr className='rounded-lg'>
                <th className='text-start px-2'>No.</th>
                <th className='text-start'>Status</th>
                <th className='text-start'>Tgl Dibuat</th>
                <th className='text-center'>Action</th>
              </tr>
            </thead>
            <tbody className=''>
              {block ? (<Loading colSpan={6} />) :
                (Penjualan?.data?.map((item, index) => (
                  <tr className={`${index % 2 ? 'bg-gray-100' : 'bg-white'} h-14 hover:bg-gray-200`} key={item.id}>
                    <td className={`text-start px-2 font-semibold`}>{index + Penjualan.from}</td>
                    <td className={`font-semibold ${item.status == 'success' ? 'text-green-600' : 'text-red-600'}`}>{item?.status == 'success' ? 'Success' : 'Pending'}</td>
                    <td>{DateKu(item.created_at)}</td>
                    <td className='flex justify-center'>
                        <button onClick={() => navigate(`/sewa/${item.uuid}/detail`)} className='px-4 py-2 text-white bg-blue-600 rounded-lg mt-3'><FaPencilRuler /></button>
                    </td>
                  </tr>)
                ))
              }
              {Penjualan?.data?.length == 0 && !block ? (
                <tr className='bg-gray-200 h-14'>
                  <td colSpan={6} className='font-semibold'><span className='ml-1'>Not Found</span></td>
                </tr>
              ) : null}
            </tbody>
          </table>
          <div className="flex justify-between mt-2">
            <span className='font-semibold'>Page {Penjualan.current_page ?? null} of {Penjualan?.last_page ?? null}</span>
            <div className="flex">
              {page != 1 ? (
                <button className='bg-blue-600 p-1 rounded-md active:scale-95 transition-transform duration-200' onClick={() => HandleSwitchPage('prev')} readOnly><MdNavigateBefore className='text-white' /></button>
              ) : null}

              <input disabled type="number" className='h-8 w-8 max-w-fit rounded-md [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none border-black border-[2px] p-1 mx-1 active:scale-10' value={page} />
              {page != Penjualan?.last_page ? (
                <button className='bg-blue-600 p-1 rounded-md active:scale-95 transition-transform duration-200' onClick={() => HandleSwitchPage('next')}><MdOutlineNavigateNext className='text-white' /></button>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}


export default Index
