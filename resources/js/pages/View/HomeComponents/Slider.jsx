import { Splide, SplideTrack, SplideSlide } from "@splidejs/react-splide";
import React, {useState} from 'react'
import "@splidejs/react-splide/css";
function Slider({Data}) {
    const [Slider, setSlider] = useState(
        typeof Data == "object" && Object.keys(Data).length != 0 ? Data : null
    );
    return (
        <>
            {Slider != null ? (
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
                        {Slider?.map((item, index) => (
                            <SplideSlide key={index}>
                                <img
                                    className="w-full h-[340px] sm:h-[500px] md:h-[100vh] object-cover -z-10"
                                    src={item.imagedir}
                                    alt="Image"
                                />
                                <div
                                    className="p-1 fixed z-10 top-[100px] sm:top-[300px] w-full"
                                    data-aos="zoom-in"
                                >
                                    <div className="flex flex-col justify-center items-center w-full text-white gap-y-4">
                                        <div className="w-1/2 text-center">
                                            <h1 className="text-[25px] sm:text-[40px] font-semibold text-4xl">
                                                {item.title}
                                            </h1>
                                        </div>
                                        <div className="w-2/3">
                                            <p className="text-[20px] sm:text-[20px] text-center">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex justify-center gap-x-5 mt-4 text-white">
                                        <button className="border-2 border-white px-16 py-4 text-lg hover:bg-white hover:text-black transition-all duration-500 font-semibold">
                                            Watch Online
                                        </button>
                                        <button className="border-2 border-white px-16 py-4 text-lg hover:bg-white hover:text-black transition-all duration-500 font-semibold">
                                            Follow Us
                                        </button>
                                    </div>
                                </div>
                            </SplideSlide>
                        ))}
                    </SplideTrack>
                </Splide>
            ) : null}
        </>
    );
}

export default Slider