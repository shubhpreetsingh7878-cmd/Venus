import logo from './assets/logo.svg'
import { Link } from "react-router-dom";


const Header = () => {
  return (
    <div className="Container p-6  shadow-xl">
        <header className='flex max-w-6xl m-auto  justify-around items-center'>
            <div>
                <img src={logo} alt="" />
            </div>
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
      
    </div>
  )
}

export default Header
