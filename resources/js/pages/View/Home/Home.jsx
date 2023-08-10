import React, { useState, useEffect, useContext } from "react";
import Navbar from "../Navbar/Index";
import {
    BsFillTelephoneFill,
    BsYoutube,
    BsTwitter,
    BsInstagram,
} from "react-icons/bs";
import "./Style.css";
import "@splidejs/react-splide/css";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";
// * components 
import Slider from "../HomeComponents/Slider";
import News from "../HomeComponents/News";
import Divisi from "../HomeComponents/Divisi";
import LoadingPage from "../../../Components/LoadingPage";
import Youtube from "../HomeComponents/Youtube";
import Maps from "../HomeComponents/Maps"
import Instagram from "../HomeComponents/Instagram"
import Content from "../HomeComponents/Content"
import Leader from "../HomeComponents/Leader"
import Footer from "../HomeComponents/Footer"
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
    console.log(DataResource);
    return (
        <>
            {Block ? (
                <LoadingPage />
            ) : (
                <>
                    <Navbar />
                    <Slider Data={DataResource.slider} />
                    <Youtube />
                    <Divisi Data={DataResource.divisi} />
                    <News Data={DataResource.news} />
                    <Leader Data={DataResource.leader} />
                    <Content />
                    <Maps />
                    <Instagram />
                    <Footer />
                </>
            )}
        </>
    );
}

export default Home;
