import React from 'react'
import {
    BsFillTelephoneFill,
    BsYoutube,
    BsInstagram,
} from "react-icons/bs";
function Maps({Data}) {
    return (
        <>
            <div
                className="flex justify-center flex-col md:flex-row"
                id="contact"
            >
                <div className="bg-black w-full md:w-1/4 p-9 flex  gap-y-5 flex-col">
                    <div
                        className="group/location cursor-default"
                        data-aos="fade-right"
                        data-aos-duration="800"
                    >
                        <span className="text-2xl text-center font-semibold transition-all duration-500 text-gray-300 group-hover/location:text-white hover:text-center">
                            Indonesia
                        </span>
                        <div className="h-[4px] w-full bg-black my-2">
                            <div className="h-[4px] w-2/6 hover:w-full transition-all duration-700 bg-white group-hover/location:w-full"></div>
                        </div>
                        <span className="group-hover/location:text-white transition-colors duration-500 text-gray-300 text-4xl font-extrabold mt-5">
                            Surabaya,Lakarsantri Jl. Sumurwelut No. 1
                        </span>
                    </div>
                    <div
                        className="group/contact cursor-default"
                        data-aos="fade-right"
                        data-aos-duration="1200"
                    >
                        <span className="text-2xl text-center font-semibold transition-all duration-500 text-gray-300 group-hover/contact:text-white hover:text-center">
                            Contact Us
                        </span>
                        <div className="h-[4px] w-full bg-black my-2">
                            <div className="h-[4px] w-2/4 hover:w-full transition-all duration-700 bg-white group-hover/contact:w-full"></div>
                        </div>
                        <div className="w-full flex flex-col gap-y-2 mt-5">
                            <div className="flex w-full justify-start group-hover/contact:text-white transition-colors duration-500 text-gray-300 text-2xl font-semibold">
                                <span>
                                    <BsFillTelephoneFill className="w-8 h-10 mr-2" />
                                </span>{" "}
                                : +62 88441134561
                            </div>
                            <div className="flex w-full justify-start group-hover/contact:text-white transition-colors duration-500 text-gray-300 text-2xl font-semibold">
                                <span>
                                    <BsYoutube className="w-8 h-10 mr-2" />
                                </span>{" "}
                                : Bmc Sumurwelut
                            </div>
                            <div className="flex w-full justify-start group-hover/contact:text-white transition-colors duration-500 text-gray-300 text-2xl font-semibold">
                                <span>
                                    <BsInstagram className="w-8 h-10 mr-2" />
                                </span>{" "}
                                : @BmcSumurwelut
                            </div>
                        </div>
                    </div>
                    <div
                        className="flex justify-center mt-24"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                    >
                        <a
                            target="_blank"
                            className="p-4 rounded-sm text-white text-center border-white border-2 font-semibold w-full cursor-pointer active:scale-95 hover:bg-white hover:text-black bg-opacity-40 transition-all duration-500"
                        >
                            Go To Betany Miracle Center Location
                        </a>
                    </div>
                </div>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.2270483128286!2d112.67578567597108!3d-7.3283769720747785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fce7cb57abd7%3A0x46d5d79523d232a9!2sGereja%20BMC%20Sumurwelut%20(Bethany%20Miracle%20Center)!5e0!3m2!1sid!2sid!4v1689002651229!5m2!1sid!2sid"
                    className="w-full h-[600px]"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </>
    );
}

export default Maps