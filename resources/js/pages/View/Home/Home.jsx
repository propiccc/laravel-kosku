import React from 'react'


const Slider = () => {
  return (
    <>
      <div className="flex h-screen w-full md:h-[500px] lg:h-full">
        <img src="https://plus.unsplash.com/premium_photo-1682551838486-a10e3704e8d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80" alt="Slider Image" className='w-full' />
      </div>
    </>
  )
}

const Card = () => {
  return (
    <>
      <div className="bg-blue-500 max-h-fit py-[100px] flex items-center justify-center gap-4 flex-wrap">
        <div className="bg-red-500 h-80 w-80 rounded-lg">

        </div>
        <div className="bg-red-500 h-80 w-80 rounded-lg">

        </div>
        <div className="bg-red-500 h-80 w-80 rounded-lg">

        </div>
        <div className="bg-red-500 h-80 w-80 rounded-lg">

        </div>
        <div className="bg-red-500 h-80 w-80 rounded-lg">

        </div>
        <div className="bg-red-500 h-80 w-80 rounded-lg">

        </div>
        <div className="bg-red-500 h-80 w-80 rounded-lg">

        </div>
        <div className="bg-red-500 h-80 w-80 rounded-lg">

        </div>
        <div className="bg-red-500 h-80 w-80 rounded-lg">

        </div>
        <div className="bg-red-500 h-80 w-80 rounded-lg">

        </div>
      </div>
    </>
  )
}


const Youtube = ({ url }) => {
  return (
    <>
      <div className="bg-black px-10 flex max-h-fit py-10 gap-x-10 md:flex-col lg:flex-row md:justify-center lg:justify-center">
        <div className="h-[400px] w-[700px] bg-red-100">
          <iframe
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="YouTube video player"
            allowFullScreen
            className="w-full h-full xl:h-full md:h-full lg:h-full rounded-lg"
          ></iframe>
        </div>
        {/* <div className="text-white w-[1200px] md:w-full md:bg-red-200 lg:w-[1200px] md:mt-4">
          <span className='text-5xl font-semibold md:text-center w-full bg-red-700'>TItle Youtube</span>
          <div className="">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo quis numquam animi iure! Beatae pariatur similique sunt fugiat. Pariatur neque vero quod nemo harum eos, magnam dolorum similique ut eaque error, explicabo unde aperiam! Saepe, nisi eum? Obcaecati recusandae voluptas accusantium totam pariatur officia suscipit iure, nulla natus expedita non, sunt vitae aliquid atque. Eveniet, consectetur? Officia deleniti, quaerat possimus veritatis suscipit, ducimus quisquam pariatur voluptatibus minima tempora autem? Explicabo illo quasi distinctio, amet repudiandae cumque accusamus libero commodi delectus perspiciatis. Sed repellendus earum impedit maiores quasi nisi enim ipsa dolor numquam at, alias consequatur dicta exercitationem sunt. Corrupti aperiam amet omnis eius fugit explicabo, accusantium cumque, autem architecto labore beatae nesciunt earum inventore voluptatibus, distinctio quae consequuntur hic deleniti dolor laboriosam. Fugit quisquam necessitatibus enim ut perspiciatis rerum placeat quas, ipsam minus vel culpa aliquid reprehenderit? Laborum, debitis unde dolorum sit voluptate nesciunt? Corrupti eum eos maxime est omnis ipsam esse explicabo obcaecati? Hic dolorum doloribus ducimus maxime sed dignissimos. Reiciendis natus animi harum, sint veniam nesciunt esse nobis error sequi ad aliquid delectus quisquam nisi ratione exercitationem quibusdam consectetur aliquam maxime dolor expedita labore accusamus. Dicta quaerat distinctio eaque necessitatibus in optio eveniet. Odio dignissimos quam recusandae alias consectetur, soluta consequatur sint porro quisquam maxime similique culpa dolorem omnis facilis officiis at unde? Distinctio dolor repellat debitis nisi voluptatem deserunt nobis, itaque amet at delectus iusto consequatur commodi ut, fugit ullam reiciendis rem maxime veniam magni eum non consectetur perferendis! Animi ipsum modi labore saepe reiciendis quo libero quas quidem provident recusandae, inventore nesciunt consectetur nisi, neque non. Sapiente voluptatum blanditiis nisi adipisci reiciendis provident possimus iure veritatis nulla eos itaque perspiciatis veniam quidem doloremque, a ipsa nemo molestias tempore, assumenda eaque atque! Minima eius tempora impedit sit omnis molestiae, repellat quos voluptatem, ipsum non illum enim ratione.
          </div>
        </div> */}
      </div>
    </>
  )
}

function Home() {
  return (
    <>
      <Slider />
      <Youtube />
      <Card />
    </>
  )
}

export default Home