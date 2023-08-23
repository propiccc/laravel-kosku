import React from "react";
import { useState } from "react";

function Index({ auth }) {
    const [open, setOpen] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [Menu, setMenu] = useState([
        { name: "Home", link: "#" },
        { name: "Divisi", link: "#divisi" },
        { name: "About", link: "/" },
        { name: "Contact", link: "/" },
    ]);

    return (
        <div className="bg-gray-100 flex">
            <div className="text-black flex items-center w-full justify-between">
                <span className="font-semibold text-4xl text-balck py-5 px-20 ">
                    KOS
                    <span className="text-md font-semibold text-red-600">
                        Ku
                    </span>
                </span>
            </div>
            <div className="flex p-1 gap-x-3 mr-3 items-center">
                <div className="font-semibold hover:text-blue-800 cursor-pointer text-lg">
                    Home
                </div>
                <div className="font-semibold hover:text-blue-800 cursor-pointer text-lg">
                    Login
                </div>
                <div className="font-semibold hover:text-blue-800 cursor-pointer text-lg">
                    Contact
                </div>
            </div>
        </div>
    );
}

export default Index;
