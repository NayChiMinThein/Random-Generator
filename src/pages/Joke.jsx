import GetRandomCard from "../components/GetRandomCard"
import Navbar from "../components/Navbar/Navbar"
import { FaFaceLaughSquint } from "react-icons/fa6";
import axios from "axios";
import { useState } from "react";

const Joke = () => {
  const [data, setData] = useState(null)
  const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,explicit&type=single";
  
  const handleClick = () => {
    axios.get(url)
      .then(res => setData(res.data.joke))
  }

  return (
    <>
      <Navbar/>
      <div className="mx-4 mt-10 md:mx-20 md:mt-14 lg:mx-40 lg:mt-16 xl:mx-60 xl:mt-20">
        <GetRandomCard 
          icon={
            <FaFaceLaughSquint className="text-6xl xl:text-7xl mx-auto mt-5 md:mt-6"/>
          }
          buttonText="Get Random Joke"
          copyBtn="Copy Joke"
          bgColor="bg-yellow-500"
          textColor="text-yellow-500"
          handleClick={handleClick}
          data={data}/>
      </div>
    </>
  )
}

export default Joke