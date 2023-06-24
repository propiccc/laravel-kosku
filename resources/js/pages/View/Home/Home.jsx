import React, { useState } from "react";
import Navbar from "../Navbar/Index";
import "./Style.css";
import { Splide, SplideTrack, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const Slider = ({ Data, ...props }) => {
    const item = useState(Data);
    return (
        <>
            {/* <div className="flex h-screen w-full md:h-[500px] lg:h-full">
                <img src="https://plus.unsplash.com/premium_photo-1682551838486-a10e3704e8d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80" alt="Slider Image" className='w-full' />
            </div> */}
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
                    {item[0]?.map((card) => (
                        <SplideSlide key={card.index}>
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

const Card = ({ Data, ...props }) => {
    const card = useState(Data);
    console.log(card);
    return (
        <>
            <section className="flex flex-col justify-center items-center py-[100px]">
                <h1 className="text-[48px] font-bold">Our Division</h1>
                <div className="snap-x mx-auto py-[100px] px-[100px] gap-24 snap-mandatory flex w-full overflow-x-scroll scrollbar-none">
                    {card[0]?.map((item) => (
                        <div className="snap-center flex-shrink-0 relative w-[520px] h-[320px] rounded-[35px] border-t border-slate-400 shadow-md shadow-slate-400 overflow-hidden">
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
            <div className="bg-[#187FF7] px-10 flex max-h-fit py-10 gap-x-10 md:flex-col lg:flex-row md:justify-center lg:justify-center">
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
            <div className="bg-[#18C3F7]">
                <div className="text-white ">
                    <h1>Lorem Ipsum</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quaerat enim aliquid iure magnam consequatur ducimus error, hic beatae tenetur, magni quos, excepturi doloribus. Libero quasi ipsum quisquam tempore aperiam.</p>
                    <hr className="border w-[240px]" />
                    <button>
                        <a href="" className="border border-black bg-white text-black font-semibold py-2 px-6">
                            Read More
                        </a>
                    </button>
                </div>
                <div className=""></div>
            </div>
        </>
    )
}

function Home() {
    const [Data, setData] = useState([
        {
            id: 1,
            title: "Lorem ipsum dolor sit amet.",
            description:
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni aperiam non voluptatem ipsa error suscipit.",
            imagedir:
                "https://www.pcclean.io/wp-content/uploads/2020/4/ZB3uqq.jpg",
        },
        {
            id: 2,
            title: "Lorem ipsum dolor sit amet.",
            description:
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni aperiam non voluptatem ipsa error suscipit.",
            imagedir:
                "https://www.pcclean.io/wp-content/uploads/2020/4/ZB3uqq.jpg",
        },
        {
            id: 3,
            title: "Lorem ipsum dolor sit amet.",
            description:
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni aperiam non voluptatem ipsa error suscipit.",
            imagedir:
                "https://www.pcclean.io/wp-content/uploads/2020/4/ZB3uqq.jpg",
        },
    ]);
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
    return (
        <>
            <Navbar />
            <Slider Data={Data} />
            <Youtube />
            <Card Data={card} />
            <About />
        </>
    );
}

export default Home;
