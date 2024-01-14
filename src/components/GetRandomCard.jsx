/* eslint-disable react/prop-types */
import { useState } from "react"
import { Link } from "react-router-dom";
import { IoArrowBackOutline } from "react-icons/io5";

const GetRandomCard = ({icon, buttonText, copyBtn, bgColor, textColor, handleClick, data}) => {
    const [copyBtnText, setCopyBtnText] = useState(copyBtn)
    
    const handleCopy = async() => {
        await navigator.clipboard.writeText(data)
        setCopyBtnText('Copied! ✓')

        setTimeout(() => {
            setCopyBtnText(copyBtn)
        }, 2000);
    }

  return (
    <div className={`rounded-md shadow-xl p-8 md:px-10 xl:px-14 relative bg-white ${textColor}`}>
         <Link to="/">
            <button className={`${bgColor} text-white p-1 rounded-full text-sm md:text-base absolute top-3 left-2 md:left-3`}>
                <IoArrowBackOutline/>
            </button>
        </Link>
        {icon}
        <p className="mt-5 mb-6 xl:mt-6 xl:mb-7 text-base md:text-base xl:text-lg tracking-wide md:tracking-normal text-slate-800 text-center">
            {data}
        </p>
        <div className="flex items-center justify-around md:justify-evenly text-sm md:text-sm xl:text-base">
            <button onClick={handleClick} className={`text-white rounded p-2 ${bgColor}`}>
                {buttonText}
            </button>
            {data && 
                <button onClick={handleCopy} className={`text-white rounded p-2 ${bgColor}`}>
                    {copyBtnText}
                </button>
            }
        </div>
    </div>
  )
}

export default GetRandomCard