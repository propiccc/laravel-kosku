import React, { useState } from 'react'
import Add from './../../Components/Button/Add';
import Form from './Form';
import Loading from '../../Components/Loading';
import axios from 'axios';
import Edit from './../../Components/Button/Edit';
import Delete from './../../Components/Button/Delete';
import Swal from 'sweetalert2';

function DateKu() {
  var d = (new Date() + "").split(" ");
  return [d[2], d[1], d[3]].join(" ");
}


function Index() {
  const [type, setType] = useState('create')
  const [toggle, setToggle] = useState(false)
  const [block, setBlock] = useState(true)
  const [User, setUser] = useState([])
  const [Paginate, setPagiante] = useState({
    search: "",
    tampilkan: ""
  })



  // * Api Call & Request
  const getUser = () => {
    axios.post('/api/user', Paginate).then(res => {
      setUser(res.data);
    }).catch(error => {
      setUser([]);
    }).finally(
      setTimeout(() => {
        setBlock(false)
      }, 600)
    )
  }

  // * effect 
  useState(() => {
    var a = true;
    if (a) {
      setTimeout(() => {
        getUser();
      }, 400)
    }
    return () => { a = false }
  }, [])

  // * Swal Fire
  const HandleDelete = () => {
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
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
  }



  return (
    <>
      {toggle ? (<Form />) : null}
      <div className="bg-white rounded-lg p-6 shadow-lg">
        <div className="flex justify-between items-center">
          <span className='font-semibold text-xl'>User Data</span>
          <Add onClick={() => { setToggle(e => !e) }} />
        </div>
        <div className="h-[2px] w-full bg-gray-300 my-3"></div>
        <div className="flex justify-between items-center mb-4">
          <input type="text" className='p-2 border-[1px] border-gray-400 rounded-md w-[80px]' />
          <input type="text" className='p-2 border-[1px] border-gray-400 rounded-md' placeholder='Search' />
        </div>
        <div className="overflow-y-auto">
          <table className='w-full'>
            <thead className='h-10 bg-gray-300 rounded-lg text-start'>
              <tr className='rounded-lg'>
                <th className='text-start px-2'>No.</th>
                <th className='text-start'>Name</th>
                <th className='text-start'>Email</th>
                <th className='text-start'>Tgl Dibuat</th>
                <th className='text-center'>Action</th>
              </tr>
            </thead>
            <tbody className=''>
              {block ? (<Loading colSpan={5} />) :
                (User?.data?.map((item, index) => (
                  <tr className={`${index % 2 ? 'bg-gray-100' : 'bg-white'} h-14 hover:bg-gray-200`} key={item.id}>
                    <td className='text-start px-2 font-semibold'>{index + 1}</td>
                    <td>{item?.name}</td>
                    <td>{item?.email}</td>
                    <td>{DateKu(item.created_at)}</td>
                    <td>
                      <div className="flex justify-center gap-x-1">
                        <Edit />
                        <Delete onClick={HandleDelete} />
                      </div>
                    </td>
                  </tr>)
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default Index