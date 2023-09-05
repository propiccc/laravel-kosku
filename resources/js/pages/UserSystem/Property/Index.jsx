import React, { useEffect, useState } from 'react'
import Form from './Form'
import axios from 'axios';
import {BsFillTrashFill, BsFillPencilFill} from 'react-icons/bs'
import { CgNotes } from 'react-icons/cg'

function Index() {
// * Data
const [isOpen, setisOpen] = useState(false);
const [Dataproperty, setDataproperty] = useState(false);
const [Block, setBlock] = useState(true);


// * Function && Components
const LoadingCom  = () => {
    return(
        <div className='flex justify-center p-4'>
            <span className='text-xl mr-2 font-semibold'>Loading</span>
            <svg aria-hidden="true" className="w-6 h-6 text-white animate-spin dark:text-gray-300 fill-blue-700" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
            </svg>
        </div>
    )
}
const HandleClose = () => {
    setisOpen(false);
}
const GetProperty = () => {
    setBlock(true)
    axios.post('/api/property').then(res => {
      setDataproperty(res.data);
    }).catch(err => {
        setDataproperty([]);
    }).finally(() => {
        setBlock(false);
    })
}

const GetPropertyDetail = () => {
    
}
//  Effect
useEffect(() => {
    var a = true;
    if(a){
        GetProperty();
    }
    return () => a = false;

},[])
  return (
    <>
    {isOpen ? (
      <Form Close={HandleClose} GetProperty={GetProperty} />
    ) : null}
    {!isOpen ? (
    
        <div className="flex p-1 justify-end">
            <button onClick={() => {setisOpen(e => !e)}} className='px-10 py-2 bg-blue-800 text-white font-semibold rounded-lg hover:opacity-95 active:scale-90 transition-all duration-300'>Add Property</button>
        </div>
    ) : null}
    {Block ? ( <LoadingCom />) : (
    <div className="w-full flex flex-wrap justify-center overflow-scroll gap-2 scrollbar-none mt-4 bg-white">
                    {/* Card Product Start */}
        {Dataproperty.length != 0 ? (
            <>
                {Dataproperty.map((item, index) => (
                    <div className="h-[500px] w-[350px] rounded-lg border-2 border-black bg-white">
                        <div className="max-w-[350px] max-h-[250px] min-h-[250px] bg-gray-100 rounded-t-lg">
                            <img
                                src="data:image/jpeg;base64,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"
                                alt=""
                                className="w-full rounded-t-md object-fill"
                            />
                        </div>
                        <div className="text-black bg-white hover:bg-gray-50 rounded-b-md p-4 h-[246px] w-full flex flex-col">
                            <div className="text-black font-semibold text-lg mb-1">
                                Rp{item.harga}/Bulan
                            </div>
                            <div className="flex gap-x-1">
                                <div className="p-1 text-sm py-[2px] font-semibold  text-black border-[2px] border-black rounded-md">
                                    {item.khusus}
                                </div>
                            </div>
                            <div className="text-black font-semibold">
                                {item.lokasi}
                            </div>
                            <div className="h-[80px] max-w-[300px]">
                                <p className="text-black max-h-[80px] text-ellipsis text-sm overflow-hidden after:content-['...']">
                                {item.description}
                                </p>
                            </div>
                            <div className="flex h-full items-end">
                                <button className="px-5 rounded-lg py-2 border-[1px] font-semibold bg-[#691fab] text-white active:scale-95 transition-all duration-600">
                                <CgNotes className='' />
                                </button>
                                <button className="px-5 rounded-lg py-2 border-[1px] font-semibold bg-yellow-500 text-black active:scale-95 transition-all duration-600">
                                <BsFillPencilFill className='text-white'/>
                                </button>
                                <button className="px-5 rounded-lg py-2 border-[1px] font-semibold bg-red-500 text-white active:scale-95 transition-all duration-600">
                                <BsFillTrashFill />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </>
        ) : (
            <div className="text-gray-500 text-xl font-semibold text-center">Data Not Found</div>
        )}
            
                    
                    {/* Card Product ENd */}
    </div>
    )}
   

    </>
  )
}

export default Index