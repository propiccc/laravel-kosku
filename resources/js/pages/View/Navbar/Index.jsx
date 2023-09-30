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
        <div className={`${scrollPosition < 800 ? 'bg-transparent' : 'bg-gray-200'} flex ${scrollPosition > 100 ? 'sticky top-0 transition-all duration-500' : 'absolute w-full text-white'} `}>
            <div className="text-black flex items-center w-full justify-between">
                <span className="font-semibold text-4xl text-balck py-5 px-20 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-orange-400">
                    KOS
                    <span className="text-md font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-orange-400">
                        KU
                    </span>
                </span>
            </div>
            <div className="flex p-1 gap-x-3 mr-3 items-center">
                <NavLink to="/" className="font-semibold hover:text-blue-300 cursor-pointer text-lg"> Home </NavLink>
                {!Block ? (
                <>
                    {!Auth ? (<NavLink to={'/login'}  className="font-semibold hover:text-blue-300 cursor-pointer text-lg"> Login </NavLink >) : (<NavLink to={Role == 'user' ? '/dashboard/property' : '/system/user'} className="font-semibold hover:text-blue-300 cursor-pointer text-lg"> Dashboard </NavLink>)}
                </>
                ) : null} 
            </div>
        </div>
    );
}

export default Index;
