import GetRandomCard from "../components/GetRandomCard"
import { FaHandHoldingHeart } from "react-icons/fa";
import { useState } from "react";
import affirmations from "../json/affirmations"

const Affirmation = () => {
  const [data, setData] = useState(null)
  
  const handleClick = () => {
    const getRandomAff = affirmations[Math.floor(Math.random() * affirmations.length)];
    setData(getRandomAff)
  }

  return (
    <div className="">
      <div className="mx-4 mt-10 md:mx-20 md:mt-14 lg:mx-40 lg:mt-16 xl:mx-60 xl:mt-20">
        <GetRandomCard 
          icon={
            <FaHandHoldingHeart className="text-6xl xl:text-7xl mx-auto mt-5 md:mt-6"/>
          }
          buttonText="Get Affirmation"
          copyBtn="Copy Affirmation"
          bgColor="bg-violet-500"
          textColor="text-violet-500"
          handleClick={handleClick}
          data={data}/>
      </div>
    </div>
  )
}

export default Affirmation