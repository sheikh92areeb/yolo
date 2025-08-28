import { Link } from "react-router"
import { contactUs, navItems, states } from "../data/appData"
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-purple-200 text-gray-500 w-full">
      <div className="max-w-6xl mx-auto px-4 md:px-8 pt-6">

        <h1 className="text-4xl font-medium text-[#75667a] mb-6 cursor-pointer">YOLO</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pb-4">

          <div className="flex flex-col">
            <p className="address w-[25ch] text-lg mb-4">{contactUs.address}</p>
            <a href="" className="email hover:underline underline-offset-2 mb-2">{contactUs.email}</a>
            <a href="" className="phone hover:underline underline-offset-2 mb-2">{contactUs.phone}</a>
          </div>

          <div className="flex flex-col gap-1">
            { navItems.map(({ path, label }) => (
              <Link key={label} to={path} className="hover:underline underline-offset-2">
                {label}
              </Link>
            )) }
          </div>

          <div className="flex gap-6">
            {states.map(({ text,iconNoColor }) => (
              <div className="flex flex-col items-center cursor-pointer">
                <img key={text} src={iconNoColor} alt={text} className="w-14 h-14" />
                {text}
              </div>
            ))}
          </div>

        </div>

        <div className="border-t border-[#75667a] py-4 flex max-sm:flex-col max-sm:gap-2 items-center justify-between">
          <p className="text-sm">© 2025 by <a href="/" className="hover:underline">YOLO</a>. All Rights Reserved</p>
          <div className="links flex gap-3 text-[#75667a]">
            <a href=""><FaFacebook /></a>
            <a href=""><FaInstagram /></a>
            <a href=""><FaXTwitter /></a>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer
