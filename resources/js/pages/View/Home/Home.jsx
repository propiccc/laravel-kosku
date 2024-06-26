import React, { useState, useEffect, useContext } from "react";
import "./Style.css";
import "@splidejs/react-splide/css";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";
// * components
import Navbar from "../Navbar/Index";
import LoadingPage from "../../../Components/LoadingPage";
import { useNavigate } from "react-router-dom";

function SerachCom() {
    return (
        <div className={`h-[300px] bg-white-400 flex justify-center mt-4`}>
            <div className=" w-[1200px]"><img src="https://png.pngtree.com/png-vector/20230531/ourlarge/pngtree-houses-coloring-pages-and-city-coloring-sheet-for-kids-vector-png-image_6780150.png" alt="Vector" className="w-full h-full object-cover"/></div>
        </div>
    );
}

function Card({ item, Navigate}) {

    function formatRupiah(angka) {
        const formatter = new Intl.NumberFormat('id-ID', {
          style: 'currency',
          currency: 'IDR',
        });
      
        return formatter.format(angka);
    }

    return (
        <div className="h-[500px] w-[350px] rounded-lg border-2 border-black bg-white hover:bg-gray-100">
            <div className="max-w-[350px] h-[250px] min-h-[250px] bg-gray-100 rounded-t-lg">
                <img
                    src={item.child_img[0]?.imagedir}
                    alt="No Image"
                    className="rounded-t-md object-fill w-[350px] h-[250px] "
                    />
            </div>
            <div className="text-black bg-whites hover:bg-gray-100 rounded-b-md p-4 h-[246px] w-full flex flex-col">
                <div className="text-black font-semibold text-lg mb-1 flex gap-x-2 items-center">
                    {formatRupiah(item.harga)}/Bulan
                    <div className="p-1 text-sm py-[2px] font-semibold text-black border-[2px] border-black rounded-md">
                        {item.khusus}
                    </div>
                </div>
                <div className="h-[1px] w-full bg-gray-500 my-2"></div>
                <div className="text-black font-semibold">
                    <p className="text-xl max-h-[50px] overflow-hidden after:content-['...']">
                        {item.lokasi}
                    </p>
                </div>
                <div className="max-w-[300px]">
                    <p className="text-black max-h-[55px] text-ellipsis text-sm overflow-hidden after:content-['...']">
                        {item.description}
                    </p>
                </div>
                <div className="flex h-full items-end">
                    <button className="px-10 py-2 bg-blue-700 font-semibold text-white rounded-lg active:scale-95 hover:scale-105 transition-all duration-300" onClick={() => {Navigate(`/property/${item.uuid}/detail`)}}>Sewa</button>
                </div>
            </div>
        </div>
    )
}

function Home() {

    // * setup
    var Navigate = useNavigate();
    const [Block, setBlock] = useState(true);
    const [Auth, setAuth] = useState(false);

    const [DataResource, setDataResource] = useState([]);

    // * Api Call
    const getDataResource = () => {
        var url = "/api/public/resource";
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

    const CheckAuth  = () => {
        var url = '/api/check'
        setBlock(true);
        axios.post(url).then(res => {
            setAuth(res.data);
        }).finally(() => {
             setBlock(false);
        })
    }

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

    useEffect(() => {
        CheckAuth();
    },[])

    return (
        <>
        
            <Navbar Auth={Auth.auth} Role={Auth?.user?.role} Block={Block} />
            {/* header start */}
            <div className="bg-transparent h-[calc(100vh-30px)] flex justify-center">
                <img src="https://fujifilm-x.com/wp-content/uploads/2019/08/x-t30_sample-images02.jpg" className="absolute -z-10 h-[calc(100vh-30px)] w-full" alt="" />
                <div className="w-[1300px] flex flex-col p-5 mt-[300px]">
                    <span className="font-extrabold text-5xl font-poppins text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-orange-400">Get Your Accommodation Here</span>
                    <span className="font-extrabold text-5xl font-poppins text-center mb-2 text-transparent h-[60px] bg-clip-text bg-gradient-to-r from-purple-500 to-orange-400">Jelajahi Pilihan Penginapan Terluas</span>
                    <span className="font-extrabold font-poppins text-center text-white">Di Kosku, kami berkomitmen untuk menjadikan perjalanan Anda menjadi pengalaman tak terlupakan. Dengan ribuan pilihan penginapan di seluruh dunia, kami memungkinkan Anda untuk menemukan tempat yang sempurna, apa pun jenis perjalanan Anda.</span>
                    <span className="font-extrabold font-poppins text-center text-white">ari hotel mewah hingga vila eksklusif, dan penginapan anggaran yang nyaman, kami memiliki sesuatu untuk setiap jenis pelancong.</span>
                    <div className="flex justify-center gap-x-2 p-1 mt-2">
                        <a href="#product" className="border-[2px] border-white rounded-sm px-14 py-2 text-lg font-semibold text-white transition-all duration-300 hover:scale-[101%] hover:bg-blue-700">Lihat Penginpan</a>
                        {/* <button className="border-[2px] border-white rounded-sm px-14 py-2 text-lg font-semibold text-white transition-all duration-300 hover:scale-[101%] hover:bg-blue-700">Login</button> */}
                    </div>
                </div>
            </div>
            {/* header end */}

            <div className="bg-white text-white h-screen flex flex-col justify-center p-2" id="product">
                <div className="my-4">
                    <div className="w-full text-black text-4xl text-center font-extrabold">
                        Cari Kosmu Disini
                    </div>
                    <div className="w-full h-[4px] flex justify-center mt-3">
                        <div className="h-[2px] w-[1200px] bg-black"></div>
                    </div>
                </div>
                <div className="w-full h-screen flex flex-wrap justify-center overflow-scroll gap-2 scrollbar-none">
                    {/* Card Product Start */}
                    {DataResource.map((item, index) => (
                        <div className="" key={index}>
                            <Card item={item}  Navigate={Navigate} />
                        </div>
                    ))}
                    {/* Card Product ENd */}
                </div>
            </div>
        </>
    );
}

export default Home;

