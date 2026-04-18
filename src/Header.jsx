import logo from './assets/logo.svg'


const Header = () => {
  return (
    <div className="Container p-6  shadow-xl">
        <header className='flex max-w-6xl m-auto  justify-around items-center'>
            <div>
                <img src={logo} alt="" />
            </div>
            <nav className='hidden lg:block sm:hidden'>
                <ul className='flex items-center  gap-5 cursor-pointer text-lg content-center'>
                    <li className='hover:text-blue-400'>Home</li>
                    <li className='hover:text-blue-400'>About</li>
                    <li className='hover:text-blue-400'>Services</li>
                    <li className='hover:text-blue-400'>Portfolio</li>
                    <li className='hover:text-blue-400'>Blog</li>
                    <li className='hover:text-blue-400'>Contact</li>
                    <li className='hover:text-blue-400'>Documentation</li>
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
