import React from 'react'

const About = () => {
    return (
        <>
            <div className="p-10 flex justify-center items-center bg-[url(https://www.freecodecamp.org/news/content/images/2022/09/jonatan-pie-3l3RwQdHRHg-unsplash.jpg)] bg-cover">
                {/* <img src="https://www.freecodecamp.org/news/content/images/2022/09/jonatan-pie-3l3RwQdHRHg-unsplash.jpg" alt="" className="-z-10 h-[600px] fixed" /> */}
                <div className="bg-white bg-opacity-5 backdrop-blur-lg p-10 flex justify-between gap-10 min-h-[570px] rounded-lg">
                    <div
                        className="w-full h-full text-white p-4"
                        data-aos="fade-right"
                        data-aos-duration="1000"
                    >
                        <h1 className="font-extrabold text-4xl text-start">
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Distinctio, maiores!
                        </h1>
                        <div className="flex justify-start">
                            <div className="bg-white/40 backdrop-blur-xl h-[4px] w-[1000px] mt-6"></div>
                        </div>
                        <p className="text-start text-lg mt-4">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Odio architecto veniam, soluta minima officiis
                            ut nesciunt! Quaerat reiciendis vero esse officia ab
                            amet nostrum consequuntur hic, eius sunt illo animi
                            dolorem perferendis corporis minus rerum. Doloribus
                            non eaque, natus labore, vero quasi nihil
                            necessitatibus voluptate reiciendis deserunt iste
                            asperiores ratione qui laborum, odio assumenda
                            quisquam! Itaque, quidem unde? Fugiat omnis eveniet
                            mollitia repellendus at laboriosam perspiciatis non
                            rem veniam. Placeat soluta similique, doloremque
                            corporis vitae sequi temporibus ipsum consequatur
                            quo! Error officia recusandae distinctio veritatis
                            deleniti culpa tempore, porro cum voluptate ipsa!
                            Harum voluptatibus necessitatibus omnis laudantium
                            voluptas praesentium minima?
                        </p>
                    </div>

                    <div className="bg-black w-1/2 h-full rounded-lg p-2 hover:p-0 transition-all duration-500 ">
                        <img
                            src="https://www.freecodecamp.org/news/content/images/2022/09/jonatan-pie-3l3RwQdHRHg-unsplash.jpg"
                            alt=""
                            className="w-full h-full rounded-lg"
                        />
                    </div>
                </div>
            </div>
        </>
    );
};
const AboutRevese = () => {
    return (
        <>
            <div className="p-10 flex justify-center items-center  bg-[url(https://www.freecodecamp.org/news/content/images/2022/09/jonatan-pie-3l3RwQdHRHg-unsplash.jpg)] bg-cover">
                {/* <img src="https://www.freecodecamp.org/news/content/images/2022/09/jonatan-pie-3l3RwQdHRHg-unsplash.jpg" alt="" className="-z-10 h-[600px] fixed" /> */}
                <div className="bg-white bg-opacity-5 backdrop-blur-lg p-10 flex justify-center gap-10 h-[570px] rounded-lg">
                    <div className="bg-black w-1/2 h-full rounded-lg p-2 hover:p-0 transition-all duration-500">
                        <img
                            src="https://www.freecodecamp.org/news/content/images/2022/09/jonatan-pie-3l3RwQdHRHg-unsplash.jpg"
                            alt=""
                            className="w-full h-full rounded-lg"
                        />
                    </div>
                    <div
                        className="w-full h-full text-white p-4"
                        data-aos="fade-left"
                        data-aos-duration="1000"
                    >
                        <h1 className="font-extrabold text-4xl text-start">
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Distinctio, maiores!
                        </h1>
                        <div className="flex justify-start">
                            <div className="bg-white/40 backdrop-blur-xl h-[4px] w-[1000px] mt-6"></div>
                        </div>
                        <p className="text-start text-lg mt-4">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Odio architecto veniam, soluta minima officiis
                            ut nesciunt! Quaerat reiciendis vero esse officia ab
                            amet nostrum consequuntur hic, eius sunt illo animi
                            dolorem perferendis corporis minus rerum. Doloribus
                            non eaque, natus labore, vero quasi nihil
                            necessitatibus voluptate reiciendis deserunt iste
                            asperiores ratione qui laborum, odio assumenda
                            quisquam! Itaque, quidem unde? Fugiat omnis eveniet
                            mollitia repellendus at laboriosam perspiciatis non
                            rem veniam. Placeat soluta similique, doloremque
                            corporis vitae sequi temporibus ipsum consequatur
                            quo! Error officia recusandae distinctio veritatis
                            deleniti culpa tempore, porro cum voluptate ipsa!
                            Harum voluptatibus necessitatibus omnis laudantium
                            voluptas praesentium minima?
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

function Content() {
  return (
    <>
    <About />
    <AboutRevese />
    </>
  )
}

export default Content