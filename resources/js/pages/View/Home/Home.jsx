import React, { useState, useEffect, useContext } from "react";
import "./Style.css";
import "@splidejs/react-splide/css";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";
// * components
import Navbar from "../Navbar/Index";
import LoadingPage from "../../../Components/LoadingPage";

function SerachCom() {
    return (
        <div className={`h-[300px] bg-white-400 flex justify-center mt-4`}>
            <div className=" w-[1200px]"><img src="https://png.pngtree.com/png-vector/20230531/ourlarge/pngtree-houses-coloring-pages-and-city-coloring-sheet-for-kids-vector-png-image_6780150.png" alt="Vector" className="w-full h-full object-cover"/></div>
        </div>
    );
}

function Card({ item, key }) {

    function formatRupiah(angka) {
        const formatter = new Intl.NumberFormat('id-ID', {
          style: 'currency',
          currency: 'IDR',
        });
      
        return formatter.format(angka);
    }
      
    return (
        <div className="h-[500px] w-[350px] rounded-lg border-2 border-black bg-white hover:bg-gray-100" key={key}>
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
                    <p className="max-h-[50px] overflow-hidden after:content-['...']">
                        {item.lokasi}
                    </p>
                </div>
                <div className="max-w-[300px]">
                    <p className="text-black max-h-[55px] text-ellipsis text-sm overflow-hidden after:content-['...']">
                        {item.description}
                    </p>
                </div>
                <div className="flex h-full items-end">
                    <button className="px-10 py-2 bg-blue-700 font-semibold text-white rounded-lg active:scale-95 hover:scale-105 transition-all duration-300">Sewa</button>
                </div>
            </div>
        </div>
    )
}

function Home() {

    // * setup
    const [DataResource, setDataResource] = useState([]);
    const [Block, setBlock] = useState(true);
    const [Auth, setAuth] = useState(false);

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
            CheckAuth();
        }
        return () => {
            a = false;
        };
    }, []);

    return (
        <>
        
            <Navbar Auth={Auth.auth} Role={Auth?.user?.role} />
            <SerachCom />
            <div className="bg-white text-white h-screen flex flex-col justify-center p-2">
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
                    {DataResource.map((item, index) => (<Card item={item} key={index} />))}
                    {/* Card Product ENd */}s
                </div>
            </div>
        </>
    );
}

export default Home;
