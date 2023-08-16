import React from 'react'
import { useState } from "react";

function Leader({Data}) {
    const [DataProfile, setDataProfile] = useState(typeof Data == 'object' && Object.keys(Data).length != 0 ? Data : null);
    return (
        <>
            {DataProfile != null ? (<div className="bg-black w-full flex flex-col p-14 justify-center">
                <span className="text-white text-4xl text-center font-extrabold ">Greja Kami Dipimpin Oleh Pemimpin Hebat</span>
                <div className="flex justify-center text-center mt-3">
                    <p className="text-center text-white w-[1200px] font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam odit ad molestias iste quas iure, illum ab quasi commodi voluptatem veritatis earum eum dolore veniam autem corrupti deleniti deserunt impedit quidem suscipit accusamus. Nesciunt omnis laborum qui, expedita vitae sunt, doloribus minima, error cum voluptatibus tempora molestiae libero maxime ullam?</p>
                </div>
                <div className="flex justify-center">
                    <div className="h-[1px] w-4/5 mt-10 bg-white"></div>
                </div>
                <div className="mt-10 min-h-[400px] flex justify-center flex-wrap gap-x-20 px-5 py-3">
                    {DataProfile?.map((item, index) => (
                        <div className="text-white flex flex-col" key={index}>
                            <div className="bg-transparent h-60 w-60 rounded-lg hover:scale-105 transition-all duration-300">
                                <img className="w-full h-full object-cover rounded-lg" src={item.imagedir} alt="" />
                            </div>
                            <span className="text-center font-semibold text-2xl mt-2">{item.name}</span>
                            <span className="text-center">{item.jabatan}</span>
                        </div>
                    ))}
                </div>
            </div>) : null}
        </>
    )
}

export default Leader