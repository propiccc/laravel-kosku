import React, {useState} from 'react'

function Divisi({Data}) {
    const [Card, setCard] = useState(
        typeof Data == "object" && Object.keys(Data).length != 0 ? Data : null
    );
    return (
        <>
            {Card != null ? (
                <section
                    className="flex flex-col justify-center items-center py-10 bg-gray-200"
                    id="divisi"
                >
                    <h1 className="text-[48px] font-bold">Our Division</h1>
                    <p className="text-[24px] text-center">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Non quas vero nihil.
                    </p>
                    <div
                        className="mx-auto p-10 gap-24 flex justify-center flex-wrap w-full"
                        data-aos="zoom-in-up"
                        data-aos-duration="1000"
                    >
                        {Card?.map((item, index) => (
                            <div
                                key={index}
                                className="h-[300px] md:h-[410px] w-max rounded-lg shadow-xl shadow-gray-500 relative group/edit "
                            >
                                <img
                                    src={item.imagedir}
                                    alt=""
                                    className="w-full h-full rounded-lg"
                                />
                                <div className="flex h-[170px] max-w-[500px] p-2 opacity-0 text-white  transition-all duration-500 rounded-lg flex-col overflow-scroll scrollbar-none relative -top-[175px] left-4 group-hover/edit:opacity-100">
                                    <h1 className="font-semibold text-xl">
                                        {item.title}
                                    </h1>
                                    <p>{item.description}</p>
                                </div>
                                <span className="text-center font-semibold text-2xl mt-2">{item.title}</span>
                                <span className="text-center">{item.description}</span>
                            </div>
                        ))}
                    </div>
                </section>
            ) : null}
        </>
    );
}

export default Divisi