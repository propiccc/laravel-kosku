import '@splidejs/react-splide/css';
import React, { useEffect, useState } from 'react'
import { useParams,NavLink, useNavigate } from 'react-router-dom'
import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
import { toast, Toaster } from 'react-hot-toast';
import './Style.css'

import axios from 'axios';

function LoadingCom(){
    return (
     <div className="bg-white w-[800px] max-w-[800px] p-4 flex justify-center items-center text-2xl">
        <div className="flex flex-col justify-center">
        Loading
        <div className="flex justify-center">
            <svg aria-hidden="true" className="w-8 h-8 text-white animate-spin dark:text-gray-300 fill-blue-700" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
            </svg>
        </div>

        </div>
     </div>
    )
}


function PropertyDetails(){
    // * Data
    var { uuid } = useParams();
    const redirec = useNavigate();
    const [block, setBlock] = useState(true);
    const [DisableButton, setDisableButton] = useState(false);
    const [DataProperty, setDataProperty] = useState([]);

    // * Functions
    const GetProperty = () => {
        setBlock(true)
        var url =`/api/property/${uuid}/detail`
        axios.post(url).then(res => {
            setDataProperty(res.data);
        }).catch(err => {
            setDataProperty([])
        }).finally(() => {
            setBlock(false);
        })
    }


    const HandlePending = (uuid, token) =>  {
        var url = `/api/payment/${uuid}/pending`
        axios.post(url, {token: token}).then(res => {
            if (res.data.success) {
                toast.success(res.data.message);
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

        });
    }

    const HandleSubmit = () => {
        setDisableButton(true)
        var url = `/api/payment/${DataProperty.uuid}/snaptoken`
        axios.post(url).then(res => {
            window.snap.pay(res.data.token, {
                onSuccess: function(result){
                    axios.post(`/api/property/${DataProperty.uuid}/set`,).then(res => {
                        if(res.data.success){
                            toast.success(res.data.message);
                            setTimeout(() => {
                                redirec('/dashboard/sewa');
                            }, 2000);
                        }
                    })
                },
                onPending: function(result){
                  alert("wating your payment!");
                  HandlePending(DataProperty.uuid, res.data.token);
                
                },
                onError: function(result){
                  alert("payment failed!");
                },
            });

            setTimeout(() => {
                setDisableButton(false)
            }, 5000);

        }).catch(err => {
            if (err.response.data.message != null) {
                toast.error(err.response.data.message);
              } else {
                err.response.data.data.forEach(el => {
                  toast.error(el)
                });
              }
            setTimeout(() => {
                setDisableButton(false)
            }, 5000); 
        }).finally(() => {
            setTimeout(() => {
                setDisableButton(false)
            }, 5000);        
        })
    }

    function formatRupiah(angka) {
        const formatter = new Intl.NumberFormat('id-ID', {
          style: 'currency',
          currency: 'IDR',
        });
      
        return formatter.format(angka);
    }

    // * Effects
    useEffect(() => {
     var a = true;
     if(a){
     GetProperty();
    } 
    return () => a = false
    },[])

    console.log(DisableButton);
  return (
    <>
        <Toaster />
        <div className='bg-gray-700 flex justify-center min-h-screen'>
            {block ? (<LoadingCom />) : 
            (<div className="bg-white pb-1 w-[800px] max-w-[800px] flex flex-col">
            <div className="bg-gray-200 p-4 flex justify-end sticky top-0 z-10" >
                <NavLink to={'/'} className={'font-semibold'}>Home</NavLink>
            </div>

            <div className="bg-red-500 border-t-[2px] border-x-[2px] border-gray-400 flex h-1/2">
                        {/* Gambar Start  */}
                        <div className="bg-white w-full p-2 border-r-[2px] border-gray-400">
                            <Splide hasTrack={ false }>
                                <SplideTrack>
                                    {DataProperty.length != 0 ? (
                                        <>
                                            {DataProperty.child_img.map((item, index) => (
                                                <SplideSlide>
                                                    <img className='w-full bg-white object-contain h-full rounded-sm' src={item.imagedir} alt="" />
                                                </SplideSlide>                                   
                                            ))}
                                        </>
                                    ) : null}
                                </SplideTrack>
                            </Splide>
                        </div>
                        {/* Gambar Ends  */}

                        {/* Detail Start */}
                        <div className="bg-white w-full p-4 flex gap-y-10 flex-col">
                            <div className="bg-transparent font-semibold flex flex-col">
                                <span className='text-gray-600 text-xl'>Harga : </span>
                                <span className='text-xl font-semibold text-center'>
                                    {formatRupiah(DataProperty.harga)}/Bulan
                                </span>
                            </div>
                            <div className="bg-transparent font-semibold flex flex-col">
                                <span className='text-gray-600 text-xl'>Khusus : </span>
                                <div className='font-semibold flex justify-center mt-1'>
                                    <div className="p-1 text-sm py-[2px] font-semibold text-black border-[2px] border-black rounded-md">
                                        {DataProperty.khusus}
                                    </div>
                                </div>
                            </div>
                            <div className="bg-transparent font-semibold flex flex-col">
                                <span className='text-gray-600 text-xl'>Lokasi : </span>
                                <span className='font-semibold max-h-[260px] overflow-scroll scrollbar-none text-md'>
                                   {DataProperty?.lokasi ?? 'Tidak Ada Lokasi'}
                                </span>
                            </div>
                            
                        </div>
                        {/* Detail Ends */}

                    </div>

                    <div className="h-1/2 border-x-[2px] border-t-[2px] p-2 border-b-[2px] border-gray-400">
                        <div className="bg-white font-semibold text-xl h-[30px]">
                            Description : 
                        </div>
                        <div className="bg-white overflow-scroll scrollbar-none h-[calc(100%-30px)]">
                            <p>
                                {DataProperty.description}
                            </p>
                        </div>
                    </div>

                    <div className="flex mt-1 px-2">
                        <button onClick={HandleSubmit} disabled={DisableButton ? true : false} className='bg-blue-700 rounded-md w-full p-2 font-semibold text-lg text-white active:scale-95 duration-300 transition-all'>Sewa</button>
                    </div>

                </div>)}
        </div>
    </>
  )
}

export default PropertyDetails