import { Link } from "react-router"
import { assets } from "../assets/assets"
import Navbar from "./Navbar"

const Header = () => {
  return (
    <header className="bg-gray-200 w-full sticky top-0">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-2 flex items-center justify-between">
        <Link to='/' className="logo flex items-center gap-2">
          <img src={assets.logo} alt="Logo" className="h-10" />
          <h1 className="text-4xl font-medium text-[#75667a]">YOLO</h1>
        </Link>

        <Navbar />
      </div>
    </header>
  )
}

export default Header
