import { Splide, SplideTrack, SplideSlide } from "@splidejs/react-splide";
import React, {useState} from 'react'
import "@splidejs/react-splide/css";

function News({Data}) {
    const [News, setNews] = useState(
        typeof Data == "object" && Object.keys(Data).length != 0 ? Data : null
    );
    return (
        <>
            {News != null ? (
                <>
                    <div className="p-10 bg-black flex justify-between items-center">
                        <span
                            className="font-bold text-white text-4xl"
                            data-aos="fade-right"
                        >
                            Berita Terbaru Kami
                        </span>
                        <div className="h-[2px] w-2/3 bg-gray-200"></div>
                        <img
                            src="http://localhost:8000/storage/asset/LogoDashboard.png"
                            alt="Logo bmc"
                            className="h-[80px]"
                            data-aos="fade-left"
                        />
                    </div>
                    <div className="w-screen">
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
                    </div>
                </>
            ) : null}
        </>
    );
}

export default News