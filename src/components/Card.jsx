/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"

const Card = ({icon, title, textColor, linkTo}) => {
  return (
    <Link to={linkTo} className="hover:scale-105 transition-transform duration-300">
      <div className={`rounded-md shadow-2xl p-8 bg-slate-50 mb-8 ${textColor}`}>
        {icon}
        <h2 className="mt-3 text-center lg:text-lg font-medium text-slate">{title}</h2>
      </div>
    </Link>
  )
}

export default Card