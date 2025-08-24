import { IoMenu, IoCloseSharp } from "react-icons/io5";
import { NavLink } from "react-router"
import { navItems } from "../data/appData"
import { useState } from "react";

const Navbar = () => {

  const [showMenu, setShowMenu] = useState<boolean>(false);

  return (    
    <nav className="">
      <ul className="hidden md:flex items-center gap-5">
        {navItems.map(({ path, label }) => (
          <NavLink key={label} to={path} className={ ({ isActive }) => `${ isActive && 'underline'} text-gray-500 hover:underline underline-offset-4 transition-[text-decoration] duration-500` } >
            {label}
          </NavLink>                
        ))}
      </ul>

      <button onClick={() => setShowMenu((prev) => !prev)} className="md:hidden flex items-center text-3xl text-[#75667a] cursor-pointer">
        { showMenu? <IoCloseSharp /> : <IoMenu />}
      </button>

      <ul className={`${showMenu? 'h-[175px] py-3 border-t' : 'h-0 py-0'} md:hidden w-full overflow-hidden flex flex-col gap-2 px-4  border-[#75667a] absolute top-14 right-0 bg-gray-200 transition-[height] duration-500`}>
        {navItems.map(({ path, label }) => (
          <NavLink onClick={() => setShowMenu(false)} key={label} to={path} className={ ({ isActive }) => `${ isActive && 'underline'} text-gray-500 hover:underline underline-offset-4 transition-[text-decoration] duration-500` } >
            {label}
          </NavLink>                
        ))}
      </ul>
    </nav>    
  )
}

export default Navbar
