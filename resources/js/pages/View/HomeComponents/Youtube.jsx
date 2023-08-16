import React from 'react'
import {
    BsFillTelephoneFill,
    BsYoutube,
    BsTwitter,
    BsInstagram,
} from "react-icons/bs";
function Youtube({Data}) {
    return (
        <>
            <div className="flex w-full bg-black p-5 ">
                <div className="w-full min-h-[500px] rounded-lg flex justify-center flex-col md:flex-row">
                    <div className="p-1 flex justify-center">
                        <div
                            className="h-[260px] w-[450px]  md:w-[480px] mb-5 md:mb-0"
                            data-aos="fade-right"
                            data-aos-duration="1000"
                        >
                            <iframe
                                src="https://www.youtube.com/embed/jiDUOP6bXik"
                                frameBorder="2"
                                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                className="h-full w-full rounded-lg"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                    <div className="min-h-[260px] w-[2px] md:bg-white ml-5 mr-5 hidden md:block"></div>
                    <div
                        className="min-h-[400px] w-full text-white flex flex-col"
                        data-aos="fade-left"
                        data-aos-duration="1000"
                    >
                        <div className="">
                            <img
                                src="http://localhost:8000/storage/asset/LogoDashboard.png"
                                alt="Logo bmc"
                                className="h-[80px]"
                            />
                        </div>
                        <div className="h-[1px] my-2 bg-white w-full"></div>
                        <h1 className="font-semibold text-4xl mb-2">
                            Maaf ipsum dolor sit amet consectetur adipisicing
                            elit. Natus, quia!
                        </h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Sit rem earum ipsa dignissimos laboriosam
                            modi, itaque nostrum similique nobis, quidem ex
                            officiis maiores, ullam rerum quaerat vel amet!
                            Ratione natus totam dolores minima provident soluta
                            consequatur nam placeat magnam officia iusto eum,
                            nobis corporis tenetur non ex cumque iure quod? Illo
                            placeat amet tenetur alias repellendus ipsum
                            consequatur, consectetur mollitia aperiam eaque vero
                            veritatis et accusamus accusantium pariatur
                            asperiores dignissimos, excepturi iusto fugiat
                            dolorem quia. Numquam sapiente id maiores. Similique
                            veniam accusamus quisquam vel temporibus ut non vero
                            dolor! Vitae excepturi nulla molestias sint, ipsum
                            dignissimos minus id porro quae impedit officiis
                            obcaecati quo cumque omnis? Ducimus maxime, rerum
                            soluta asperiores pariatur mollitia illum
                            praesentium! Accusantium rem delectus nobis eius!
                            Saepe cum assumenda iure laborum ipsum delectus
                            distinctio fugit enim, consequatur incidunt
                            voluptatibus libero recusandae, exercitationem
                            reprehenderit dolor deserunt accusantium in commodi
                            doloribus reiciendis rem. Inventore provident nulla
                            illum facilis, neque, exercitationem quae ut rem
                            optio ad quia sed sapiente iure. Dolorem aliquid
                            alias deleniti id voluptates, repellendus temporibus
                            tenetur porro ab odio distinctio? Itaque ut ipsa
                            ducimus asperiores at soluta voluptas alias dolores
                            provident mollitia vitae sequi repellendus animi
                            voluptatum quod quas, exercitationem odit id ratione
                            tempora tenetur dignissimos!
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Youtube