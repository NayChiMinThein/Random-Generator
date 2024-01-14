import { useState } from "react";
import GetRandomCard from "../components/GetRandomCard"
import Navbar from "../components/Navbar/Navbar"
import { TbBulbFilled } from "react-icons/tb";
import axios from "axios";

const Fact = () => {
  const [data, setData] = useState(null)
  const limit = 1
  const apiKey = "oF8WMm8DYb8i+NIvxzBIHQ==HgXrfWRb6SxfClcr"
  const url = `https://api.api-ninjas.com/v1/facts?limit=${limit}`

  const handleClick = () => {
    axios.get(url, {
      headers: {'X-Api-Key': apiKey },
      contentType: 'application/json'
    })
    .then(res => setData(res.data[0].fact))
  }

  return (
    <>
      <Navbar/>
      <div className="mx-4 mt-10 md:mx-20 md:mt-14 lg:mx-40 lg:mt-16 xl:mx-60 xl:mt-20">
        <GetRandomCard 
          icon={
            <TbBulbFilled className="text-6xl md:text-6xl xl:text-7xl mx-auto mt-4 md:mt-6 lg:mt-8"/>
          }
          buttonText="Get Random Fact"
          copyBtn="Copy Fact"
          bgColor="bg-blue-500"
          textColor="text-blue-500"
          handleClick={handleClick}
          data={data}/>
      </div>
    </>
  )
}

export default Fact