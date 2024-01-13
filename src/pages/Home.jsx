import Card from "../components/Card"
import Navbar from "../components/Navbar/Navbar"
import { FaFaceLaughSquint } from "react-icons/fa6";
import { BsChatSquareQuoteFill } from "react-icons/bs";
import { TbBulbFilled } from "react-icons/tb";

const Home = () => {
  return (
    <>
      <Navbar/>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 md:gap-4 lg:gap-8 mx-4 md:mx-8 lg:mx-10 xl:mx-16 mt-12
        lg:mt-16">
        <Card 
          icon={
            <FaFaceLaughSquint className="text-4xl mx-auto"/>
          }
          title="Joke Generator"
          textColor="text-yellow-500"
          linkTo="/getJoke"/>
        <Card 
          icon={
            <BsChatSquareQuoteFill className="text-4xl mx-auto"/>
          }
          title="Quote Generator"
          textColor="text-red-500"
          linkTo="/getQuote"/>
        <Card 
          icon={
            <TbBulbFilled className="text-4xl mx-auto"/>
          }
          title="Fact Generator"
          textColor="text-blue-500"
          linkTo="/getFact"/>
      </div>
    </>
  )
}

export default Home