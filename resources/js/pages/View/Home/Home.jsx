import React, { useState, useEffect, useContext } from "react";
import "./Style.css";
import "@splidejs/react-splide/css";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";
// * components
import Navbar from "../Navbar/Index";
import LoadingPage from "../../../Components/LoadingPage";
function Home() {
    // * setup
    const [DataResource, setDataResource] = useState([]);
    const [Block, setBlock] = useState(true);

    // * Api Call
    const getDataResource = () => {
        var url = "/api/public/home/resource";
        setBlock(true);
        axios
            .post(url)
            .then((res) => {
                setDataResource(res.data);
            })
            .finally(() => {
                setBlock(false);
            });
    };

    // * effect
    useEffect(() => {
        var a = true;
        if (a) {
            AOS.init();
            getDataResource();
        }
        return () => {
            a = false;
        };
    }, []);
    return (
        <>
            {Block ? (
                <LoadingPage />
            ) : (
                <>
                    <Navbar />
                    <div className="bg-black text-white">Hello World</div>
                </>
            )}
        </>
    );
}

export default Home;
