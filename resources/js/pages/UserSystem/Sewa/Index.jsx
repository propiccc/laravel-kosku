import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { MdAssistantDirection } from 'react-icons/md';



function Card({ item, token, status}) {

  function formatRupiah(angka) {
      const formatter = new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
      });
    
      return formatter.format(angka);
  }
    
  return (
      <div className="h-[500px] w-[350px] rounded-lg border-2 border-black bg-white hover:bg-gray-100">
          <div className="max-w-[350px] h-[250px] min-h-[250px] bg-gray-100 rounded-t-lg">
              <img
                  src={item.child_img[0]?.imagedir}
                  alt="No Image"
                  className="rounded-t-md object-fill w-[350px] h-[250px] "
                  />
          </div>
          <div className="text-black bg-whites hover:bg-gray-100 rounded-b-md p-4 h-[246px] w-full flex flex-col">
              <div className="text-black font-semibold text-lg mb-1 flex gap-x-2 items-center">
                  {formatRupiah(item.harga)}/Bulan
                  <div className="p-1 text-sm py-[2px] font-semibold text-black border-[2px] border-black rounded-md">
                      {item.khusus}
                  </div>
              </div>
              <div className="h-[1px] w-full bg-gray-500 my-2"></div>
              <div className="text-black font-semibold">
                  <p className="text-xl max-h-[50px] overflow-hidden after:content-['...']">
                      {item.lokasi}
                  </p>
              </div>
              <div className="max-w-[300px]">
                  <p className="text-black max-h-[55px] text-ellipsis text-sm overflow-hidden after:content-['...']">
                      {item.description}
                  </p>
              </div>
              {status == 'pending' ? (
              <div className="flex h-full items-end">
                  <button className="px-10 py-2 bg-blue-700 font-semibold text-white rounded-lg active:scale-95 hover:scale-105 transition-all duration-300" onClick={() => {window.snap.pay(token)}}>Bayar</button>
              </div>
              ) : null}
          </div>
      </div>
  )
}

function Index() {

  // * Data 
  const [DataProperty, setDataProperty] = useState(null);
  const [Block, setBlock] = useState(null);

  // * Function 
  const GetProperty = () => {
    setBlock(true);
    var url = '/api/property/pending'
    axios.post(url).then(res => {
      setDataProperty(res.data);
    }).catch(err => {
      setDataProperty(null);
    }).finally(() => {
      setBlock(false);
    })
  }

  // * Effect
  useEffect(() => {
    var a = true
    
    if(a){
      GetProperty();
    }

    return () => a = false

    },[])
    console.log(DataProperty);
  return (
    <>
    <div className="">
      {DataProperty != null ? (
        <>
        {DataProperty.map((item, index) => (
          <div className="bg-blue-400">
            <div className="" key={index}>
              <Card item={item.property} token={item.token}  status={item.status} />
            </div>
          </div>
        ))}
        </>
      ) : (<span>No Data</span>)}
    </div>
    </>
  )
}

export default Index