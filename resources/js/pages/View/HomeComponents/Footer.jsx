import React from 'react'
import {
    BsYoutube,
    BsInstagram,
} from "react-icons/bs";
function Footer() {
    return (
        <footer className="bg-gray-800 p-4">
            <div className="w-full flex justify-center">
                <img
                    src="http://localhost:8000/storage/asset/LogoDashboard.png"
                    alt="Logo Bmc"
                    className="aspect-auto h-[60px]"
                />
            </div>
            <div className="flex justify-center mt-2">
                <div className="h-[2px] w-1/2 bg-gray-500"></div>
            </div>
            <div className="w-full flex justify-center">
                <div className="gap-x-5 flex p-1">
                    <BsYoutube className="h-[80px] w-[30px] text-gray-500 hover:text-white" />
                    <BsInstagram className="h-[80px] w-[30px] text-gray-500 hover:text-white" />
                </div>
            </div>
            <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-center">
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                    © 2023 Betany Miracle Center.
                </span>
            </div>
        </footer>
    )
}

export default Footer