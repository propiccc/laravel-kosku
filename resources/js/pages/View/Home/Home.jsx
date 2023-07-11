import React, { useState, useEffect, useContext } from "react";
import Navbar from "../Navbar/Index";
import "./Style.css";
import { Splide, SplideTrack, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import axios from "axios";
import Loading from '../../../Components/Loading';
import LoadingPage from "../../../Components/LoadingPage";
import { BsFillTelephoneFill, BsYoutube, BsTwitter, BsInstagram } from 'react-icons/bs'

const Slider = ({ Data }) => {
    const [Slider, setSlider] = useState(typeof Data == 'object' && Object.keys(Data).length != 0 ? Data : null);
    return (
        <>
            {Slider != null ? (<Splide
                options={{
                    rewind: true,
                    perPage: 1,
                    pagination: true,
                    autoplay: true,
                    arrows: false,
                }}
                hasTrack={false}
                aria-label="..."
            >
                <SplideTrack className="">
                    {Slider?.map((item, index) => (
                        <SplideSlide key={index}>
                            <div className="flex flex-col h-[300px] px-3 sm:h-[500px] md:h-[100vh] absolute justify-center items-center w-full text-white z-20">
                                <p className="text-[10px] sm:text-[20px] text-center">
                                    {item.description}
                                </p>
                                <h1 className="text-[15px] sm:text-[40px]">
                                    {item.title}
                                </h1>
                            </div>
                            <div className="w-full h-[300px] sm:h-[500px] md:h-[100vh] z-10 bg-black opacity-30 absolute"></div>
                            <img
                                className="w-full h-[300px] sm:h-[500px] md:h-[100vh] object-cover -z-10"
                                src={item.imagedir}
                                alt="Image 1"
                            />
                        </SplideSlide>
                    ))}
                </SplideTrack>
            </Splide>) : null}
        </>
    );
};
const News = ({ Data }) => {
    const [News, setNews] = useState(typeof Data == 'object' && Object.keys(Data).length != 0 ? Data : null);
    return (
        <>
            {News != null ? (
                <>
                    <div className="p-10 bg-black flex justify-between items-center">
                        <span className="font-bold text-white text-4xl">Berita Terbaru Kami</span>
                        <div className="h-[2px] w-2/3 bg-gray-200"></div>
                        <img src="http://localhost:8000/storage/asset/LogoDashboard.png" alt="Logo bmc" className="h-[80px]" />
                    </div>
                    <Splide
                        options={{
                            rewind: true,
                            perPage: 1,
                            pagination: true,
                            autoplay: true,
                            arrows: false,
                        }}
                        hasTrack={false}
                        aria-label="..."
                    >
                        <SplideTrack className="">
                            {News?.map((item, index) => (
                                <SplideSlide key={index}>
                                    <img
                                        className="w-full h-[300px] sm:h-[500px] md:h-[100vh] object-cover -z-10"
                                        src={item.imagedir}
                                        alt="Image 1"
                                    />
                                </SplideSlide>
                            ))}
                        </SplideTrack>
                    </Splide>
                </>
            ) : null}

        </>
    );
};

const Divisi = ({ Data }) => {
    const [Card, setCard] = useState(typeof Data == 'object' && Object.keys(Data).length != 0 ? Data : null);
    return (
        <>
            {Card != null ? (
                <section className="flex flex-col justify-center items-center py-10 bg-gray-200">
                    <h1 className="text-[48px] font-bold">Our Division</h1>
                    <p className="text-[24px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quas vero nihil.</p>
                    <div className="mx-auto p-10 gap-24 flex justify-center flex-wrap w-full">
                        {Card?.map((item, index) => (

                            <div key={index} className="h-[410px] w-max rounded-lg shadow-xl shadow-gray-500 group/edit ">
                                <img src={item.imagedir} alt="" className="w-full h-full rounded-lg" />
                                <div className="flex h-[170px] max-w-[500px] p-2 opacity-0 text-white transition-all duration-500 rounded-lg flex-col overflow-scroll scrollbar-none relative -top-[175px] left-4 group-hover/edit:opacity-100">
                                    <h1 className="font-semibold text-xl">{item.title}</h1>
                                    <p>{item.description}</p>
                                </div>
                                {/* <div className="transition-all duration-500 opacity-0  text-white group-hover/edit:opacity-100 bg-red-300 relative -top-[175px] h-[40px] left-4 w-[500px] text-ellipsis p-1 rounded-t-lg">
                                    <h1 className="text-xl font-semibold">{item.title}</h1>
                                </div>
                                <div className="transition-all duration-500 opacity-0 bg-blue-400  text-white group-hover/edit:opacity-100 relative -top-[180px] h-[130px] left-4 w-[500px] overflow-y-scroll scrollbar-none text-ellipsis p-1 rounded-b-lg">
                                    <p className="font-semibold">{item.description}</p>
                                </div> */}
                            </div>

                        ))}
                    </div>
                </section>) : null}

        </>
    );
};

const Youtube = ({ url }) => {
    return (
        <>
            <div className="flex w-full bg-black p-5 flex-col">
                <div className="w-full min-h-[500px] rounded-lg flex p-4 justify-center">
                    <div className="p-1">
                        <div className="h-[260px] w-[480px]">
                            <iframe src="https://www.youtube.com/embed/jiDUOP6bXik" frameBorder="2" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" className="h-full w-full rounded-lg" allowFullScreen></iframe>
                        </div>
                    </div>
                    <div className="min-h-[260px] w-[2px] bg-white ml-5 mr-5"></div>
                    <div className="min-h-[400px] w-full text-white">
                        <div className="">
                            <img src="http://localhost:8000/storage/asset/LogoDashboard.png" alt="Logo bmc" className="h-[80px]" />
                        </div>
                        <div className="h-[1px] my-2 bg-white w-full"></div>
                        <h1 className="font-semibold text-4xl mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, quia!</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit rem earum ipsa dignissimos laboriosam modi, itaque nostrum similique nobis, quidem ex officiis maiores, ullam rerum quaerat vel amet! Ratione natus totam dolores minima provident soluta consequatur nam placeat magnam officia iusto eum, nobis corporis tenetur non ex cumque iure quod? Illo placeat amet tenetur alias repellendus ipsum consequatur, consectetur mollitia aperiam eaque vero veritatis et accusamus accusantium pariatur asperiores dignissimos, excepturi iusto fugiat dolorem quia. Numquam sapiente id maiores. Similique veniam accusamus quisquam vel temporibus ut non vero dolor! Vitae excepturi nulla molestias sint, ipsum dignissimos minus id porro quae impedit officiis obcaecati quo cumque omnis? Ducimus maxime, rerum soluta asperiores pariatur mollitia illum praesentium! Accusantium rem delectus nobis eius! Saepe cum assumenda iure laborum ipsum delectus distinctio fugit enim, consequatur incidunt voluptatibus libero recusandae, exercitationem reprehenderit dolor deserunt accusantium in commodi doloribus reiciendis rem. Inventore provident nulla illum facilis, neque, exercitationem quae ut rem optio ad quia sed sapiente iure. Dolorem aliquid alias deleniti id voluptates, repellendus temporibus tenetur porro ab odio distinctio? Itaque ut ipsa ducimus asperiores at soluta voluptas alias dolores provident mollitia vitae sequi repellendus animi voluptatum quod quas, exercitationem odit id ratione tempora tenetur dignissimos!</p>
                    </div>
                </div>
            </div>
        </>
    );
};

const About = () => {
    return (
        <>
            <div className="bg-gradient-to-r from-indigo-500 from-5% via-sky-500 via-30% to-indigo-700 p-10 flex justify-center gap-10 h-[570px] border-b-2">

                <div className="w-full h-full text-white p-4">
                    <h1 className="font-extrabold text-4xl text-start">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio, maiores!</h1>
                    <div className="flex justify-start">
                        <div className="bg-gradient-to-r from-black to-slate-700 h-[4px] w-[1000px] mt-6"></div>
                    </div>
                    <p className="text-start text-lg mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio architecto veniam, soluta minima officiis ut nesciunt! Quaerat reiciendis vero esse officia ab amet nostrum consequuntur hic, eius sunt illo animi dolorem perferendis corporis minus rerum. Doloribus non eaque, natus labore, vero quasi nihil necessitatibus voluptate reiciendis deserunt iste asperiores ratione qui laborum, odio assumenda quisquam! Itaque, quidem unde? Fugiat omnis eveniet mollitia repellendus at laboriosam perspiciatis non rem veniam. Placeat soluta similique, doloremque corporis vitae sequi temporibus ipsum consequatur quo! Error officia recusandae distinctio veritatis deleniti culpa tempore, porro cum voluptate ipsa! Harum voluptatibus necessitatibus omnis laudantium voluptas praesentium minima?</p>
                    <div className="mt-10 flex justify-start">
                        <button className="p-4 border-2 border-black w-52 font-semibold rounded-md hover:bg-white hover:text-black hover:scale-105 transition-all duration-500">Watch Online</button>
                    </div>
                </div>

                <div className="bg-black w-1/2 h-full rounded-lg p-2 hover:p-0 transition-all duration-500">
                    <img src="https://www.freecodecamp.org/news/content/images/2022/09/jonatan-pie-3l3RwQdHRHg-unsplash.jpg" alt="" className="w-full h-full rounded-lg" />
                </div>
            </div>
        </>
    )
}
const AboutRevese = () => {
    return (
        <>
            <div className="bg-gradient-to-r from-indigo-500 from-5% via-sky-500 via-30% to-indigo-700 p-10 flex justify-center gap-10 h-[570px] border-y-2">

                <div className="bg-black w-1/2 h-full rounded-lg p-2 hover:p-0 transition-all duration-500">
                    <img src="https://www.freecodecamp.org/news/content/images/2022/09/jonatan-pie-3l3RwQdHRHg-unsplash.jpg" alt="" className="w-full h-full rounded-lg" />
                </div>

                <div className="w-full h-full text-white p-4">
                    <h1 className="font-extrabold text-4xl text-start">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio, maiores!</h1>
                    <div className="flex justify-start">
                        <div className="bg-gradient-to-r from-black to-slate-700 h-[4px] w-[1000px] mt-6"></div>
                    </div>
                    <p className="text-start text-lg mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio architecto veniam, soluta minima officiis ut nesciunt! Quaerat reiciendis vero esse officia ab amet nostrum consequuntur hic, eius sunt illo animi dolorem perferendis corporis minus rerum. Doloribus non eaque, natus labore, vero quasi nihil necessitatibus voluptate reiciendis deserunt iste asperiores ratione qui laborum, odio assumenda quisquam! Itaque, quidem unde? Fugiat omnis eveniet mollitia repellendus at laboriosam perspiciatis non rem veniam. Placeat soluta similique, doloremque corporis vitae sequi temporibus ipsum consequatur quo! Error officia recusandae distinctio veritatis deleniti culpa tempore, porro cum voluptate ipsa! Harum voluptatibus necessitatibus omnis laudantium voluptas praesentium minima?</p>
                    <div className="mt-10 flex justify-start">
                        <button className="p-4 border-2 border-black w-52 font-semibold rounded-md hover:bg-white hover:text-black hover:scale-105 transition-all duration-500">Watch Online</button>
                    </div>
                </div>
            </div>
        </>
    )
}

const Banner = () => {
    return (
        <>
            <img src="https://akcdn.detik.net.id/community/media/visual/2021/04/01/gereja-bethany-miracle-center-1_43.jpeg?w=250&q=" alt=""
                className="w-full h-screen"
            />
        </>
    )
}

const Maps = () => {
    return (
        <>
            <div className="flex justify-center" id="contact">
                <div className="bg-black w-1/4 p-9 flex flex-col gap-y-5">
                    <div className="group/location cursor-default">
                        <span className="text-2xl text-center font-semibold transition-all duration-500 text-gray-300 group-hover/location:text-white hover:text-center">Indonesia</span>
                        <div className="h-[4px] w-full bg-black my-2">
                            <div className="h-[4px] w-2/6 hover:w-full transition-all duration-700 bg-white group-hover/location:w-full"></div>
                        </div>
                        <span className="group-hover/location:text-white transition-colors duration-500 text-gray-300 text-4xl font-extrabold mt-5">Surabaya,Lakarsantri Jl. Sumurwelut No. 1</span>
                    </div>
                    <div className="group/contact cursor-default">
                        <span className="text-2xl text-center font-semibold transition-all duration-500 text-gray-300 group-hover/contact:text-white hover:text-center">Contact Us</span>
                        <div className="h-[4px] w-full bg-black my-2">
                            <div className="h-[4px] w-2/4 hover:w-full transition-all duration-700 bg-white group-hover/contact:w-full"></div>
                        </div>
                        <div className="w-full flex flex-col gap-y-2 mt-5">
                            <div className="flex w-full justify-start group-hover/contact:text-white transition-colors duration-500 text-gray-300 text-2xl font-semibold"><span><BsFillTelephoneFill className="w-8 h-10 mr-2" /></span> : +62 88441134561</div>
                            <div className="flex w-full justify-start group-hover/contact:text-white transition-colors duration-500 text-gray-300 text-2xl font-semibold"><span><BsYoutube className="w-8 h-10 mr-2" /></span> : Bmc Sumurwelut</div>
                            <div className="flex w-full justify-start group-hover/contact:text-white transition-colors duration-500 text-gray-300 text-2xl font-semibold"><span><BsInstagram className="w-8 h-10 mr-2" /></span> : @BmcSumurwelut</div>
                        </div>
                    </div>
                    <div className="flex justify-center mt-24">
                        <a target="_blank" className="p-4 rounded-sm text-white text-center border-white border-2 font-semibold w-full cursor-pointer active:scale-95 hover:bg-white hover:text-black bg-opacity-40 transition-all duration-500">
                            Go To Betany Miracle Center Location
                        </a>
                    </div>
                </div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.2270483128286!2d112.67578567597108!3d-7.3283769720747785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fce7cb57abd7%3A0x46d5d79523d232a9!2sGereja%20BMC%20Sumurwelut%20(Bethany%20Miracle%20Center)!5e0!3m2!1sid!2sid!4v1689002651229!5m2!1sid!2sid" className='w-full h-[600px]' referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </>
    )
}

const Instagram = (url) => {
    return (
        <div className="flex bg-black max-h-fit p-2 justify-center border-2 border-purple-500">
            <div className="w-full p-4 flex flex-col">
                <div className="w-full text-white p-1">
                    <div className="flex justify-center h-[60px]">
                        <h1 className="bg-white font-extrabold text-center text-black text-5xl text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600">Follow Us On Instagram</h1>
                    </div>
                    <div className="w-full flex justify-center">
                        <h1 className="w-[1000px] text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, libero beatae, odit sint, architecto non consequuntur quaerat adipisci possimus distinctio voluptatum. Repellendus iste ab debitis amet corrupti minima et asperiores hic eos quibusdam excepturi ipsa quas saepe sint ea exercitationem velit repudiandae officiis molestiae unde ex voluptatibus neque, odit accusantium? Placeat doloribus, eligendi porro, provident accusantium unde iure sapiente modi asperiores incidunt quis numquam totam iste omnis cumque dignissimos ipsam? Voluptate nostrum officiis distinctio similique officia a optio dolore ad.</h1>
                    </div>
                    <div className="bg-gradient-to-r from-pink-500 to-blue-500 h-[1px] w-full mt-6"></div>
                </div>
                <div className="h-full p-6 flex gap-4 justify-center flex-wrap">
                    <div className="bg-gray-800  h-80 w-80 rounded-lg"></div>
                    <div className="bg-gray-800  h-80 w-80 rounded-lg"></div>
                    <div className="bg-gray-800  h-80 w-80 rounded-lg"></div>
                    <div className="bg-gray-800  h-80 w-80 rounded-lg"></div>
                    <div className="bg-gray-800  h-80 w-80 rounded-lg"></div>
                    <div className="bg-gray-800  h-80 w-80 rounded-lg"></div>
                    <div className="bg-gray-800  h-80 w-80 rounded-lg"></div>
                    <div className="bg-gray-800  h-80 w-80 rounded-lg"></div>
                    <div className="bg-gray-800  h-80 w-80 rounded-lg"></div>
                </div>
            </div>
        </div >
    )
};

const Footer = () => {
    return (

        <footer className="bg-gray-800">
            <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 Betany Miracle Center.
                </span>
                <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6 ">About</a>
                    </li>
                    <li>
                        <a href="#contact" className="hover:underline">Contact</a>
                    </li>
                </ul>
            </div>
        </footer>

    )
}

function Home() {
    // * setup 
    const [DataResource, setDataResource] = useState([]);
    const [Block, setBlock] = useState(true);

    // * Api Call
    const getDataResource = () => {
        var url = '/api/public/home/resource'
        setBlock(true);
        axios.post(url).then(res => {
            setDataResource(res.data);
        }).finally(() => {
            setBlock(false);
        })
    }

    // * effect
    useEffect(() => {
        var a = true;
        if (a) {
            getDataResource();
        }
        return () => { a = false }
    }, []);
    return (
        <>
            {Block ? (<LoadingPage />) :
                (<>
                    <Navbar />
                    <Slider Data={DataResource.slider} />
                    <Youtube />
                    <Divisi Data={DataResource.divisi} />
                    <About />
                    <News Data={DataResource.news} />
                    <AboutRevese />
                    <Maps />
                    <Instagram />
                    <Footer />
                </>)
            }
        </>
    );
}

export default Home;
