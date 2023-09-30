import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Index() {

  // * Data
  const [block, setBlock] = useState();
  const [Data, setData] = useState(null);

  // * Function
  const getData = () => {
    setBlock(true);
    axios.post('/api/dashboard').then(res => {
      setData(res.data);
    }).catch(err => {
      setData(null);
    }).finally(() => {
      setBlock(false);
    })
  }

  // * Effect
  useEffect(() => {
    var a = true;
    if(a){
      getData();
    }
    return () => a = false
  },[])

  return (
    <div className='flex gap-x-3'>
      {!block ? (
        <>
          <div className="h-[150px] w-[300px] rounded-lg bg-white shadow-xl flex flex-col">
            <span className='bg-black text-lg font-semibold p-2 rounded-t-lg text-white'>Jumlah User :</span>
            <div className="h-full rounded-b-lg text-4xl font-semibold flex justify-center items-center">{Data?.user ?? '0'}</div>
          </div>
          <div className="h-[150px] w-[300px] rounded-lg bg-white shadow-xl flex flex-col">
            <span className='bg-black text-lg font-semibold p-2 rounded-t-lg text-white'>Jumlah Penjualan :</span>
            <div className="h-full rounded-b-lg text-4xl font-semibold flex justify-center items-center">{Data?.payment ?? '0'}</div>
          </div>
          <div className="h-[150px] w-[300px] rounded-lg bg-white shadow-xl flex flex-col">
            <span className='bg-black text-lg font-semibold p-2 rounded-t-lg text-white'>Jumlah Property :</span>
            <div className="h-full rounded-b-lg text-4xl font-semibold flex justify-center items-center">{Data?.property ?? '0'}</div>
          </div>
        </>
      ) : 'Loading'}

    </div>
  )
}

export default Index