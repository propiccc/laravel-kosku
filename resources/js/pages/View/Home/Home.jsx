import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Index";
import "./Style.css";
import { Splide, SplideTrack, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import axios from "axios";
import Loading from '../../../Components/Loading';
import LoadingPage from "../../../Components/LoadingPage";

const Slider = ({ Data }) => {
    const [item, setItem] = useState(Data);
    return (
        <>
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
                    {item?.map((card, index) => (
                        <SplideSlide key={index}>
                            <div className="flex flex-col h-[300px] px-3 sm:h-[500px] md:h-[100vh] absolute justify-center items-center w-full text-white z-20">
                                <p className="text-[10px] sm:text-[20px] text-center">
                                    {card.description}
                                </p>
                                <h1 className="text-[15px] sm:text-[40px]">
                                    {card.title}
                                </h1>
                            </div>
                            <div className="w-full h-[300px] sm:h-[500px] md:h-[100vh] z-10 bg-black opacity-30 absolute"></div>
                            <img
                                className="w-full h-[300px] sm:h-[500px] md:h-[100vh] object-cover -z-10"
                                src={card.imagedir}
                                alt="Image 1"
                            />
                        </SplideSlide>
                    ))}
                </SplideTrack>
            </Splide>
        </>
    );
};
const News = ({ Data }) => {
    const [item, setItem] = useState(Data);
    return (
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
                    {item?.map((card, index) => (
                        <SplideSlide key={index}>
                            <img
                                className="w-full h-[300px] sm:h-[500px] md:h-[100vh] object-cover -z-10"
                                src={card.imagedir}
                                alt="Image 1"
                            />
                        </SplideSlide>
                    ))}
                </SplideTrack>
            </Splide>
        </>
    );
};

const Card = ({ Data, ...props }) => {
    const card = useState(Data);
    return (
        <>
            <section className="flex flex-col justify-center items-center py-[100px]">
                <h1 className="text-[48px] font-bold">Our Division</h1>
                <p className="text-[24px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quas vero nihil.</p>
                <div className="snap-x mx-auto py-[100px] px-[100px] gap-24 snap-mandatory flex w-full overflow-x-scroll scrollbar-none">
                    {card[0]?.map((item) => (
                        <div key={item.id} className="snap-center flex-shrink-0 relative w-[520px] h-[320px] rounded-[35px] border-t border-slate-400 shadow-md shadow-slate-400 overflow-hidden">
                            <div className="p-6 w-full h-full absolute">
                                <p className="text-[26px] font-bold">
                                    {item.title}
                                </p>
                            </div>
                            <div className="absolute bottom-0 bg-[#18C3F7] w-[520px] h-[230px] rounded-tr-[40px] -z-10">
                                <div className="w-[50px] h-[50px] absolute left-0 top-[-50px] bg-[#18C3F7]"></div>
                                <div className="w-[50px] h-[50px] absolute left-0 top-[-50px] rounded-bl-[40px] bg-white"></div>
                                <div className="flex items-center px-4 gap-5 w-full h-full">
                                    <img
                                        src={item.imagedir}
                                        alt=""
                                        className="w-[100px] h-[100px] object-cover rounded-sm"
                                    />
                                    <p className="text-white text-[18px]">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
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
            <div className="flex justify-center">
                <div className="bg-black w-1/4">test</div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126636.3291129682!2d112.70553600000001!3d-7.310540800000009!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fe9f794adb13%3A0x4da089d5c4cb9016!2sMitra%20Keluarga%20Surabaya!5e0!3m2!1sid!2sid!4v1687676442449!5m2!1sid!2sid" className='w-full h-[600px]' referrerPolicy="no-referrer-when-downgrade"></iframe>
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
                        <h1 className="bg-white font-extrabold text-center text-black text-5xl text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600">Follow Us On Instagram </h1>
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



function Home() {

    const [card, setCard] = useState([
        {
            id: 1,
            title: "Lorem ipsum dolor sit amet1.",
            description:
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni aperiam non voluptatem ipsa error suscipit.",
            imagedir:
                "https://www.pcclean.io/wp-content/uploads/2020/4/ZB3uqq.jpg",
        },
        {
            id: 2,
            title: "Lorem ipsum dolor sit amet2.",
            description:
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni aperiam non voluptatem ipsa error suscipit.",
            imagedir:
                "https://www.pcclean.io/wp-content/uploads/2020/4/ZB3uqq.jpg",
        },
        {
            id: 3,
            title: "Lorem ipsum dolor sit amet3.",
            description:
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni aperiam non voluptatem ipsa error suscipit.",
            imagedir:
                "https://www.pcclean.io/wp-content/uploads/2020/4/ZB3uqq.jpg",
        },
        {
            id: 4,
            title: "Lorem ipsum dolor sit amet4.",
            description:
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni aperiam non voluptatem ipsa error suscipit.",
            imagedir:
                "https://www.pcclean.io/wp-content/uploads/2020/4/ZB3uqq.jpg",
        },
        {
            id: 5,
            title: "Lorem ipsum dolor sit amet5.",
            description:
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni aperiam non voluptatem ipsa error suscipit.",
            imagedir:
                "https://www.pcclean.io/wp-content/uploads/2020/4/ZB3uqq.jpg",
        },
        {
            id: 6,
            title: "Lorem ipsum dolor sit amet6.",
            description:
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni aperiam non voluptatem ipsa error suscipit.",
            imagedir:
                "https://www.pcclean.io/wp-content/uploads/2020/4/ZB3uqq.jpg",
        },
    ]);

    const [block, setBlock] = useState(true)
    const [slider, setSlider] = useState([])

    // * Api Call & Request
    useEffect(() => {
        setBlock(true);

        axios
            .get('/api/public/slider')
            .then(res => {
                setSlider(res.data);
            })
            .catch(error => {
                setSlider([]);
            })
            .finally(() => {
                setTimeout(() => {
                    setBlock(false);
                }, 600);
            });
    }, []);

    return (
        <>
            {block ? (<LoadingPage />) :

                (
                    <>
                        <Navbar />
                        <Slider Data={slider} />
                        <Youtube />
                        <Card Data={card} />
                        <News Data={card} />
                        <AboutRevese />
                        <About />
                        <Maps />
                        <Instagram />
                    </>
                )
            }

        </>
    );
}

export default Home;
