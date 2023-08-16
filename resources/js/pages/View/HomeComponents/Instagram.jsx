import React, {useState} from 'react'

function Instagram() {
    const [DataInstagram, setDataInstagram] = useState(typeof Data == 'object' && Object.keys(Data).length != 0 ? Data : null);
    return (
        <>
        {DataInstagram != null ? ( <div className="flex bg-black max-h-fit p-2 justify-center border-2 border-purple-500">
        <div className="w-full p-4 flex flex-col">
            <div className="w-full text-white p-1">
                <div className="flex justify-center h-[60px]">
                    <h1 className="bg-white font-extrabold text-center text-black text-5xl text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600">
                        Follow Us On Instagram
                    </h1>
                </div>
                <div className="w-full flex justify-center">
                    <h1 className="w-[1000px] text-center">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Esse, libero beatae, odit sint, architecto non
                        consequuntur quaerat adipisci possimus distinctio
                        voluptatum. Repellendus iste ab debitis amet
                        corrupti minima et asperiores hic eos quibusdam
                        excepturi ipsa quas saepe sint ea exercitationem
                        velit repudiandae officiis molestiae unde ex
                        voluptatibus neque, odit accusantium? Placeat
                        doloribus, eligendi porro, provident accusantium
                        unde iure sapiente modi asperiores incidunt quis
                        numquam totam iste omnis cumque dignissimos ipsam?
                        Voluptate nostrum officiis distinctio similique
                        officia a optio dolore ad.
                    </h1>
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
    </div>) : null}
        </>
    );
}

export default Instagram