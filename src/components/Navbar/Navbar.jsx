import { GiPerspectiveDiceSixFacesRandom } from "react-icons/gi";
import { Link } from "react-router-dom";
import "./Navbar.css"

const Navbar = () => {
  return (
    <nav className="custom-bgColor p-4 md:p-5 text-slate-100 shadow-xl sticky top-0 
      flex items-center justify-between">
      <Link to="/">
        <div className="flex items-center lg:ms-2 xl:ms-4">
          <GiPerspectiveDiceSixFacesRandom className="text-4xl lg:text-4xl xl:text-5xl me-1"/>
          <h2 className="text-lg md:text-lg lg:text-xl xl:text-2xl font-semibold">Random Generators</h2>
        </div>
      </Link>
      <div className="hidden md:block md:text-sm xl:text-base md:me-1 lg:me-4 font-medium">
        <Link to="/" className="md:me-8 lg:me-9">
          HOME
        </Link>
        <button className="">
          THEME
        </button>
      </div>
    </nav>
  )
}

export default Navbar