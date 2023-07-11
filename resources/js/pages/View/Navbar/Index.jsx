import React from "react";
import { useState, useRef, useEffect } from "react";

function Index({ auth }) {
    const [open, setOpen] = useState(false);
    const [istop, setIstop] = useState(true);
    const [scrollPosition, setScrollPosition] = useState(0);
    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <>
            <nav className={`${scrollPosition > 50 ? 'bg-black border-b-[1px] border-white' : 'bg-transparent border-b-0'} h-[100px] fixed w-full transition-all duration-300 top-0 z-50 hidden justify-between px-2 md:flex lg:flex lg:h-[80px] xl:flex xl:h-[100px]`}>
                <div className="lg:w-[200px] xl:w-[240px] bg-transparent flex justify-center items-center">
                    <img src="http://localhost:8000/storage/asset/LogoDashboard.png" alt="Logo Bmc" />
                </div>
                <div className="lg:px-5 xl:w-1/4 bg-transparent flex justify-center items-center gap-x-5">
                    <a href="" className="lg:text-lg xl:text-xl font-semibold text-white hover:text-blue-500 transition-all duration-300">Home</a>
                    <a href="" className="lg:text-lg xl:text-xl font-semibold text-white hover:text-blue-500 transition-all duration-300">Divisi</a>
                    <a href="" className="lg:text-lg xl:text-xl font-semibold text-white hover:text-blue-500 transition-all duration-300">About</a>
                    <a href="" className="lg:text-lg xl:text-xl font-semibold text-white hover:text-blue-500 transition-all duration-300">Contact</a>

                </div>
            </nav >
            <div className="bg-green-500 h-[40px] sticky top-0 z-50 flex md:hidden">

            </div>
        </>
    );
}

export default Index;
