import React from "react";
import { useState, useRef, useEffect } from "react";

function Index({auth}) {
    const [open, setOpen] = useState(false);
    const [istop, setIstop] = useState(true);
    const [activeLink, setActiveLink] = useState('home');

    function handleLinkClick(link) {
      setActiveLink(link);
    }

    useEffect(() => {
        document.addEventListener("scroll", () => {
            const scrollPosition = window.pageYOffset;
            if (scrollPosition > 50) {
                setIstop(false);
            } else {
                setIstop(true);
            }
        });
    }, []);

    const navClassClose = `items-center px-4 py-3  md:px-8 lg:flex duration-300 ${
        istop ? "bg-transparent" : "bg-white"
    }`;
    const navClassOpen = `items-center px-4 py-3  md:px-8 lg:flex duration-300 border-b border-slate-400  ${
        istop ? "bg-transparent" : "bg-white"
    }`;

    const itemClass = `text-white w-full duration-500 ${
        open ? "mt-0" : "-mt-[500px]"
    }`;

    const containerDropdownClass =  `overflow-hidden ${
        istop ? "bg-transparent" : "bg-black  bg-opacity-60"
    }`

    const desktopItemClass = `items-center justify-between px-4 py-3  md:px-8 hidden w-full lg:flex ${
        istop ? "text-white" : "text-black"
    }`;

    const lineItemClass = `duration-300 rounded-r-sm h-[3px] w-0 group-hover:w-full ${
        istop ? "bg-white" : "bg-black "
    }`
    const lineOnItemClass = `rounded-r-sm h-[3px] w-full ${
        istop ? "bg-white" : "bg-black "
    }`

    return (
        <nav className="fixed top-0 left-0 w-full duration-300 z-50">
            <div className={open ? navClassOpen : navClassClose}>
                {/* mobile */}
                <div className="flex flex-col">
                    <div className="flex items-center justify-between py-3 lg:hidden">
                        <div className="items-center">
                            <img
                                src="/storage/asset/LogoDashboard.png"
                                alt="logo"
                                className="w-[100px]"
                            />
                        </div>
                        {istop ? (
                            <div
                                className="flex flex-col justify-center items-center  w-[36px] h-[36px]"
                                onClick={() => setOpen(!open)}
                            >
                                <div
                                    className={
                                        open
                                            ? "duration-500 bg-red-700 w-[20px] h-[2px] -rotate-45 absolute"
                                            : "duration-500 bg-white w-[20px] h-[2px]"
                                    }
                                ></div>
                                <div
                                    className={
                                        open
                                            ? "duration-500 bg-black w-[20px] h-[2px] hidden"
                                            : "duration-500 bg-white w-[20px] h-[2px] my-1"
                                    }
                                ></div>
                                <div
                                    className={
                                        open
                                            ? "duration-500 bg-red-700 w-[20px] h-[2px] rotate-45 absolute"
                                            : "duration-500 bg-white w-[20px] h-[2px] "
                                    }
                                ></div>
                            </div>
                        ) : (
                            <div
                                className="flex flex-col justify-center items-center  w-[36px] h-[36px]"
                                onClick={() => setOpen(!open)}
                            >
                                <div
                                    className={
                                        open
                                            ? "duration-500 bg-red-700 w-[20px] h-[2px] -rotate-45 absolute"
                                            : "duration-500 bg-black w-[20px] h-[2px]"
                                    }
                                ></div>
                                <div
                                    className={
                                        open
                                            ? "duration-500 bg-black w-[20px] h-[2px] hidden"
                                            : "duration-500 bg-black w-[20px] h-[2px] my-1"
                                    }
                                ></div>
                                <div
                                    className={
                                        open
                                            ? "duration-500 bg-red-700 w-[20px] h-[2px] rotate-45 absolute"
                                            : "duration-500 bg-black w-[20px] h-[2px] "
                                    }
                                ></div>
                            </div>
                        )}
                    </div>
                </div>

                {/* laptop */}
                <div className={desktopItemClass}>
                    <div className="items-center">
                        <img src="/logo.svg" alt="logo" className="w-[100px]" />
                    </div>
                    <div
                        className={`relative items-center text-start gap-10 lg:overflow-visible lg:flex lg:pb-0 lg:pr-0 lg:h-auto font-['Roboto'] uppercase justify-center`}
                    >
                        <a href="/" className="group hover:cursor-pointer mt-[3px]" onClick={() => handleLinkClick('home')}>
                            <h1>Home</h1>
                            <div className={`${activeLink === 'home' ? lineItemClass : lineOnItemClass}`}></div>
                        </a>
                        <a href="/contact" className="group hover:cursor-pointer mt-[3px]">
                            <h1>Contact</h1>
                            <div className={lineItemClass}></div>
                        </a>
                        <a href="about" className="group hover:cursor-pointer mt-[3px]">
                            <h1>About</h1>
                            <div className={lineItemClass}></div>
                        </a>
                        <a href="blog" className="group hover:cursor-pointer mt-[3px]">
                            <h1>Blog</h1>
                            <div className={lineItemClass}></div>
                        </a>
                        <a href="divisi" className="group hover:cursor-pointer mt-[3px]">
                            <h1>Divisi</h1>
                            <div className={lineItemClass}></div>
                        </a>

                    </div>
                </div>
            </div>

            {/* dropdown item */}
            <div className={containerDropdownClass}>
                <div className={itemClass}>
                    <div className="py-5 border-b border-slate-400 flex justify-center">
                        <a href="/" className="w-fit">Home</a>
                    </div>
                    <div className="py-5 border-b border-slate-400 flex justify-center">
                        <a href="/contact" className="w-fit">Contact</a>
                    </div>
                    <div className="py-5 border-b border-slate-400 flex justify-center">
                        <a href="/about" className="w-fit">About</a>
                    </div>
                    <div className="py-5 border-b border-slate-400 flex justify-center">
                        <a href="/blog" className="w-fit">Blog</a>
                    </div>
                    <div className="py-5 border-b border-slate-400 flex justify-center">
                        <a href="/divisi" className="w-fit">Divisi</a>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Index;
