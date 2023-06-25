import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Index";
import "./Style.css";
import { Splide, SplideTrack, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import axios from "axios";
import Loading from '../../../Components/Loading';

const Slider = ({ Data }) => {
    const [item, setItem] = useState();
    useEffect(() => {
        setItem(Data)
    }, []);

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
                    {item?.map((card) => (
                        <SplideSlide key={card.index}>
                            <div className="flex flex-col h-[300px] px-3 sm:h-[500px] md:h-[100vh] absolute justify-center items-center w-full text-white z-20">
                                {console.log('alfian', item)}
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
            <div className="bg-[#187FF7] px-10 flex max-h-fit py-20 gap-x-10 md:flex-col lg:flex-row md:justify-center lg:justify-center">
                <div className="h-[400px] w-1/3">
                    <iframe
                        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                        title="YouTube video player"
                        allowFullScreen
                        className="w-full h-full xl:h-full md:h-full lg:h-full rounded-lg"
                    ></iframe>
                </div>
                <div className="flex flex-col justify-center text-white w-2/3">
                    <h1 className="text-[30px] font-bold">Title</h1>
                    <p className="text-[24px]">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Pariatur possimus culpa saepe, tempore unde magni ad,
                        officiis, optio voluptatem quas dicta ipsum deleniti.
                        Expedita libero debitis nihil quasi unde, beatae
                        assumenda, vitae commodi reiciendis ullam corporis, ex
                        placeat incidunt obcaecati quis eaque eos tempora
                        dolore? Nemo omnis cum rem. Placeat.
                    </p>
                </div>
                {/* <div className="text-white w-[1200px] md:w-full md:bg-red-200 lg:w-[1200px] md:mt-4">
          <span className='text-5xl font-semibold md:text-center w-full bg-red-700'>TItle Youtube</span>
          <div className="">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo quis numquam animi iure! Beatae pariatur similique sunt fugiat. Pariatur neque vero quod nemo harum eos, magnam dolorum similique ut eaque error, explicabo unde aperiam! Saepe, nisi eum? Obcaecati recusandae voluptas accusantium totam pariatur officia suscipit iure, nulla natus expedita non, sunt vitae aliquid atque. Eveniet, consectetur? Officia deleniti, quaerat possimus veritatis suscipit, ducimus quisquam pariatur voluptatibus minima tempora autem? Explicabo illo quasi distinctio, amet repudiandae cumque accusamus libero commodi delectus perspiciatis. Sed repellendus earum impedit maiores quasi nisi enim ipsa dolor numquam at, alias consequatur dicta exercitationem sunt. Corrupti aperiam amet omnis eius fugit explicabo, accusantium cumque, autem architecto labore beatae nesciunt earum inventore voluptatibus, distinctio quae consequuntur hic deleniti dolor laboriosam. Fugit quisquam necessitatibus enim ut perspiciatis rerum placeat quas, ipsam minus vel culpa aliquid reprehenderit? Laborum, debitis unde dolorum sit voluptate nesciunt? Corrupti eum eos maxime est omnis ipsam esse explicabo obcaecati? Hic dolorum doloribus ducimus maxime sed dignissimos. Reiciendis natus animi harum, sint veniam nesciunt esse nobis error sequi ad aliquid delectus quisquam nisi ratione exercitationem quibusdam consectetur aliquam maxime dolor expedita labore accusamus. Dicta quaerat distinctio eaque necessitatibus in optio eveniet. Odio dignissimos quam recusandae alias consectetur, soluta consequatur sint porro quisquam maxime similique culpa dolorem omnis facilis officiis at unde? Distinctio dolor repellat debitis nisi voluptatem deserunt nobis, itaque amet at delectus iusto consequatur commodi ut, fugit ullam reiciendis rem maxime veniam magni eum non consectetur perferendis! Animi ipsum modi labore saepe reiciendis quo libero quas quidem provident recusandae, inventore nesciunt consectetur nisi, neque non. Sapiente voluptatum blanditiis nisi adipisci reiciendis provident possimus iure veritatis nulla eos itaque perspiciatis veniam quidem doloremque, a ipsa nemo molestias tempore, assumenda eaque atque! Minima eius tempora impedit sit omnis molestiae, repellat quos voluptatem, ipsum non illum enim ratione.
          </div>
        </div> */}
            </div>
        </>
    );
};

const About = () => {
    return (
        <>
            <div className="bg-[#18C3F7] p-28 flex justify-between gap-[100px]">
                <div className="text-white flex justify-end w-1/2">
                    <div className="w-[500px] text-white flex flex-col gap-7 items-center">
                        <h1 className="text-[36px]">Lorem Ipsum</h1>
                        <p className="text-[18px] text-center w-[500px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quaerat enim aliquid iure magnam consequatur ducimus error, hic beatae tenetur, magni quos, excepturi doloribus. Libero quasi ipsum quisquam tempore aperiam.</p>
                        <hr className="border w-[240px]" />
                        <button className="h-[39px] w-[131px] relative">
                            <a href="" className="w-full h-full border z-10 relative border-black bg-white text-black font-semibold py-2 px-6">
                                Read More
                            </a>
                            <div className="h-[39px] w-[129px] -mt-[27px] ml-[4px] absolute bg-black"></div>
                        </button>
                    </div>
                </div>
                <div className="w-1/2 flex justify-start">
                    <img src="https://www.freecodecamp.org/news/content/images/2022/09/jonatan-pie-3l3RwQdHRHg-unsplash.jpg" alt="" className="w-[315px] h-[350px]" />
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
            <div className="bg-white flex items-center justify-center">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.227001034966!2d112.67617191472291!3d-7.328382294711277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fce7cb57abd7%3A0x46d5d79523d232a9!2sGereja%20BMC%20Sumurwelut%20(Bethany%20Miracle%20Center)!5e0!3m2!1sid!2sid!4v1680935786302!5m2!1sid!2sid" className='w-full h-[600px]' referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </>
    )
}

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
            <Navbar />
            {block ? (<Loading colSpan={5} />) :
                (<Slider Data={slider} />)
            }
            <Youtube />
            <Card Data={card} />
            <About />
            <Banner />
            <Maps />
            <div className="h-screen"></div>
        </>
    );
}

export default Home;
