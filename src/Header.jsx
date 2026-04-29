import logo from './assets/logo.svg'
import { Link } from "react-router-dom";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { useState } from "react";
import Sidebar from "./Sidebar";


const Header = () => {
     const [open, setOpen] = useState(false);
  return (
    <div className="Container p-6  shadow-xl">
        <header className='flex max-w-6xl m-auto  justify-around items-center'>
            <div>
                <img src={logo} alt="" />
            </div>
                <HiOutlineMenuAlt3 
                className="block lg:hidden text-2xl cursor-pointer"
                onClick={() => setOpen(true)}
               />
            
            <nav className='hidden lg:block'>
                <ul className='flex items-center gap-5 cursor-pointer text-lg'>

                <li className='hover:text-blue-400'>
                    <Link to="/">Home</Link>
                </li>

                <li className='hover:text-blue-400'>
                    <Link to="/about">About</Link>
                </li>

                <li className='hover:text-blue-400'>
                    <Link to="/services">Services</Link>
                </li>

                <li className='hover:text-blue-400'>
                    <Link to="/portfolio">Portfolio</Link>
                </li>

                <li className='hover:text-blue-400'>
                    <Link to="/blog">Blog</Link>
                </li>

                <li className='hover:text-blue-400'>
                    <Link to="/contact">Contact</Link>
                </li>

                <li className='hover:text-blue-400'>
                    <Link to="/docs">Documentation</Link>
                </li>

                </ul>
                </nav>
            <div className='hidden gap-4 lg:flex'>
                <button className='border border-blue-500 bg-white text-blue-500 p-2 px-4 rounded-2xl cursor-pointer hover:bg-blue-500 hover:text-white'>Sign In</button>
                <button className='bg-blue-500 text-white p-2 px-4 rounded-2xl cursor-pointer hover:bg-blue-800 hover:text-white'>Sign Up</button>
            </div>
            
        </header>
       <Sidebar open={open} setOpen={setOpen} />
    </div>
  )
}

export default Header
