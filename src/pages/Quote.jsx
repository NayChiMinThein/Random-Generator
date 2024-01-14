import Navbar from "../components/Navbar/Navbar"
import GetRandomCard from "../components/GetRandomCard"
import { BsChatSquareQuoteFill } from "react-icons/bs";
import axios from "axios";
import { useState } from "react";

const Quote = () => {
  const [data, setData] = useState(null)
  const url = "https://api.quotable.io/random";
  
  const handleClick = () => {
    axios.get(url)
      .then(res => setData(res.data.content))
  }

  return (
    <>
      <Navbar/>
      <div className="mx-4 mt-10 md:mx-20 md:mt-14 lg:mx-40 lg:mt-16 xl:mx-60 xl:mt-20">
        <GetRandomCard 
          icon={
            <BsChatSquareQuoteFill className="text-6xl xl:text-7xl mx-auto mt-5 md:mt-6"/>
          }
          buttonText="Get Random Quote"
          copyBtn="Copy Quote"
          bgColor="bg-red-500"
          textColor="text-red-500"
          handleClick={handleClick}
          data={data}/>
      </div>
    </>
  )
}

export default Quote