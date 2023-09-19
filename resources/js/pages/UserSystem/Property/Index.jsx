import React, { useEffect, useState } from 'react'
import Form from './Form'
import axios from 'axios';
import { BsFillTrashFill, BsFillPencilFill } from 'react-icons/bs'
import { CgNotes } from 'react-icons/cg'
import { toast, Toaster } from 'react-hot-toast';
import Swal from 'sweetalert2';


function Card({ item, Getproperty, key, HandleDelete}) {

    function formatRupiah(angka) {
        const formatter = new Intl.NumberFormat('id-ID', {
          style: 'currency',
          currency: 'IDR',
        });
      
        return formatter.format(angka);
      }
      
    return (
        <div className="h-[500px] w-[350px] rounded-lg border-2 border-black bg-white hover:bg-gray-100" key={key}>
            <div className="max-w-[350px] h-[250px] min-h-[250px] bg-gray-100 rounded-t-lg">
                <img
                    src={item.child_img[0]?.imagedir}
                    alt="No Image"
                    className="rounded-t-md object-fill w-[350px] h-[250px] "
                    />
            </div>
            <div className="text-black bg-whites hover:bg-gray-100 rounded-b-md p-4 h-[246px] w-full flex flex-col">
                <div className="text-black font-semibold text-lg mb-1">
                    {key}
                    {formatRupiah(item.harga)}/Bulan
                </div>
                <div className="flex gap-x-1">
                    <div className="p-1 text-sm py-[2px] font-semibold  text-black border-[2px] border-black rounded-md">
                        {item.khusus}
                    </div>
                </div>
                <div className="text-black font-semibold">
                    <p className="max-h-[50px] overflow-hidden after:content-['...']">
                        {item.lokasi}
                    </p>
                </div>
                <div className="max-w-[300px]">
                    <p className="text-black max-h-[55px] text-ellipsis text-sm overflow-hidden after:content-['...']">
                        {item.description}
                    </p>
                </div>
                <div className="flex h-full items-end">
                    <button className="px-5 rounded-lg py-2 border-[1px] font-semibold bg-[#691fab] text-white active:scale-95 transition-all duration-600 hover:scale-105">
                        <CgNotes className='' />
                    </button>
                    <button className="px-5 rounded-lg py-2 border-[1px] font-semibold bg-yellow-500 text-black active:scale-95 transition-all duration-600 hover:scale-105" onClick={() => Getproperty(item.uuid)}>
                        <BsFillPencilFill className='text-white' />
                    </button>
                    <button className="px-5 rounded-lg py-2 border-[1px] font-semibold bg-red-500 text-white active:scale-95 transition-all duration-600 hover:scale-105" onClick={() => HandleDelete(item.uuid)}>
                        <BsFillTrashFill />
                    </button>
                </div>
            </div>
        </div>
    )
}

function Index() {
    // * Data
    const [isOpen, setisOpen] = useState(false);
    const [Dataproperty, setDataproperty] = useState([]);
    const [DataEdit, setDataEdit] = useState(null);
    const [Block, setBlock] = useState(true);
    const [type, setType] = useState('create');


    // * Function && Components
    const LoadingCom = () => {
        return (
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
        setDataEdit(null);
        setisOpen(false);
    }

    const Property = () => {
        setBlock(true)
        axios.post('/api/property').then(res => {
            setDataproperty(res.data);
        }).catch(err => {
            setDataproperty([]);
        }).finally(() => {
            setBlock(false);
        })
    }

    const Getproperty = (uuid) => {
        setisOpen(false);
        Swal.fire({title: 'Please Wait!',html: 'Loading...',allowOutsideClick: false,showConfirmButton: false});
        var url = `/api/property/${uuid}/edit`
        axios.post(url).then(res => {

            setDataEdit(res.data)
            setType('update');
            Swal.fire('Data Founded','Your Data Is Ready To Updated','success');

            setTimeout(() => {
                setisOpen(true);
            }, 1000);
            
        }).catch(err => {

            setDataEdit(null)

            if (err.response.data.message != null) {
                toast.error(err.response.data.message);
            } else {
                err.response.data.data.forEach(el => {
                    toast.error(el);
                });
            }

        })
    }

    const GetParentProperty = (uuid) => {
        var url = `/api/property/${uuid}/edit`
        setisOpen(false);
        axios.post(url).then(res => {
            setDataEdit(res.data)
            setTimeout(() => {
                setisOpen(true);
            }, 500);
        })
    }

    const HandleDelete = (uuid) => {
        
        var url = `/api/property/${uuid}/delete`;
        
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
                html: 'Loading...',
                allowOutsideClick: false,
                showConfirmButton: false
              });
             
              axios.delete(url).then(res => {
                  if(res.data.success){
                      Swal.fire(
                      'Success',
                      'Your file has been Deleted.',
                      'success')
                  }
      
                  setTimeout(() => {
                      Property();
                  }, 500);
      
              }).catch(err => {
                  Swal.fire(
                  'Error',
                  'Failed To Delete.',
                  'error');
              })
            }
          })


    }

    // * Effect
    useEffect(() => {
        var a = true;
        if (a) {
            Property();
        }
        return () => a = false;

    }, [])


    return (
        <>
            <Toaster />
            
            {/* Form Components Start */}
                {isOpen ? (<Form  Close={HandleClose} GetProperty={Property} GetParentProperty={GetParentProperty} DataEdit={DataEdit} type={type} />) : null}
            {/* Form Components End */}

            {/* Button Create Start  */}
                {!isOpen ? (<div className="flex p-1 justify-end">
                    <button onClick={() => { setisOpen(e => !e), setType('create') }} className='px-10 py-2 bg-blue-800 text-white font-semibold rounded-lg hover:opacity-95 active:scale-90 transition-all duration-300'>Add Property</button>
                </div>) : null}
            {/* Button Create End  */}
            
            {/* Card Data Kosku Start */}
                {Block ? (<LoadingCom />) : (
                    <div className="w-full flex flex-wrap justify-center overflow-scroll gap-2 scrollbar-none mt-4 bg-white">
                        {/* Card Product Start */}
                            {Dataproperty.length != 0 ? (<> {Dataproperty.map((item, index) => (
                                <div className="" key={index}>
                                    <Card item={item}  Getproperty={Getproperty} HandleDelete={HandleDelete} />
                                </div>)
                            )} </>) : (<div className="text-gray-500 text-xl font-semibold text-center">No Data In Here :( </div>)}
                        {/* Card Product End */}
                    </div>)} 
            {/* Card Data Kosku End */}
        </>
    )
}
export default Index