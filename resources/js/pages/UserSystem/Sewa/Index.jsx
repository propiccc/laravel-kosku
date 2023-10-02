import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { MdAssistantDirection } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';



function Card({ item, token, status, redirec, uuidPayments}) {

  function formatRupiah(angka) {
      const formatter = new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
      });
    
      return formatter.format(angka);
  }

  function DateKu() {
    var d = (new Date() + "").split(" ");
    return [d[2]+'-',d[1]+'-', d[3]].join("");
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
              <div className="text-black font-semibold text-lg mb-2 flex gap-x-2 items-center">
                  <span className={`text-md text-center w-full ${status == 'success' ? 'text-green-600' : 'text-red-600'}`}>
                      {status == 'success' ?  'Success' : 'Pending'}
                  </span>
              </div>
              <div className="text-black font-semibold text-lg mb-1 flex items-center">
                  <span className={`text-center w-full`}>
                    {DateKu()} <span className=''>s/d</span> {item.waktu_sewa}
                  </span>
              </div>
              {status == 'pending' ? (
              <div className="text-black font-semibold text-lg mb-1 flex gap-x-2 items-center">
                  {formatRupiah(item.harga)}/Bulan
                  <div className="p-1 text-sm py-[2px] font-semibold text-black border-[2px] border-black rounded-md">
                      {item.khusus}
                  </div>
              </div>
              ) : null}
              <div className="text-black text-sm flex gap-x-2 items-center mb-1">
                  <span className='w-full text-center'>Panjang*Lebar : {item.panjang}m<span className='text-red-600'>*</span>{item.lebar}m</span>
              </div>
              <div className="h-[1px] w-full bg-gray-500"></div>
              <div className="text-black font-semibold">
                  <p className="max-h-[40px] overflow-hidden after:content-['...']">
                      {item.lokasi}
                  </p>
              </div>
              <div className="max-w-[300px]">
                  <p className="text-black max-h-[40px] text-ellipsis text-sm overflow-hidden after:content-['...']">
                      {item.description}
                  </p>
              </div>
              {status == 'pending' ? (
              <div className="flex h-full items-end">
                  <button className="px-10 py-2 bg-blue-700 font-semibold text-white rounded-lg active:scale-95 hover:scale-105 transition-all duration-300" onClick={() => {window.snap.pay(token)}}>Bayar</button>
              </div>
              ) : null}
              {status == 'success' ? (
              <div className="flex h-full items-end">
                  <button className="px-10 py-2 bg-purple-700 font-semibold text-white rounded-lg active:scale-95 hover:scale-105 transition-all duration-300" onClick={() => redirec(`/sewa/${uuidPayments}/detail`)}>Details</button>
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
  const redirec = useNavigate();

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

    return (
    <>
    <div className="">
      {DataProperty != null ? (
        <>
        {DataProperty.length == '0' ? 'No Data In Here' : (
          <>
            {DataProperty.map((item, index) => (
                <div key={index}>
                  <Card item={item.property} token={item.token}  status={item.status} uuidPayments={item.uuid} redirec={redirec} />
                </div>
            ))}
          </>
        )}
        </>
      ) : (<span>Loading</span>)}
    </div>
    </>
  )
}

export default Index