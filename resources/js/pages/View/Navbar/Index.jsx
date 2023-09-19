import React from "react";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

function Index({ Auth, Role, Block }) {
    // * Data
    const [open, setOpen] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);

    const [Menu, setMenu] = useState([
        { name: "Home", link: "#" },
        { name: "Divisi", link: "#divisi" },
        { name: "About", link: "/" },
        { name: "Contact", link: "/" },
    ]);

    // * Function
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
        <div className={`${scrollPosition > 300 ? 'bg-transparent' : 'bg-gray-100'} flex ${scrollPosition > 30 ? 'sticky top-0 transition-all duration-500' : null} `}>
            <div className="text-black flex items-center w-full justify-between">
                <span className="font-semibold text-4xl text-balck py-5 px-20 ">
                    KOS
                    <span className="text-md font-semibold text-red-600">
                        Ku
                    </span>
                </span>
            </div>
            <div className="flex p-1 gap-x-3 mr-3 items-center">
                <NavLink to="/" className="font-semibold hover:text-blue-800 cursor-pointer text-lg"> Home </NavLink>
                {!Block ? (
                <>
                    {!Auth ? (<NavLink to={'/login'}  className="font-semibold hover:text-blue-800 cursor-pointer text-lg"> Login </NavLink >) : (<NavLink to={Role == 'user' ? '/dashboard/property' : '/system/user'} className="font-semibold hover:text-blue-800 cursor-pointer text-lg"> Dashboard </NavLink>)}
                </>
                ) : null} 
            </div>
        </div>
    );
}

export default Index;
