import React from "react";
import { useState, useRef, useEffect } from "react";

function Index({ auth }) {
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

    // * Effect
    useEffect(() => {
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className="bg-gray-200 p-1">
            <span className="">Kosku</span>
        </div>
    );
}

export default Index;
