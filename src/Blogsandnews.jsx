import blog1 from './assets/blog_1.png'
import blog2 from './assets/blog_2.jpg'
import blog3 from './assets/blog_3.png'
import { FaArrowRightLong } from "react-icons/fa6";


const Blogsandnews = () => {
  return (
    <div className="container justify-center mx-auto mt-20 max-w-7xl">
        <div className="flex justify-between">
            <div>
            <h1 className="text-4xl text-[#081738] text-bold">Latest blog & news</h1>
            </div>
            <div className='gap-2 flex items-center hover:text-blue-400'>
              <button className="text-gray-600 hover:text-blue-500 text-lg cursor-pointer font-semibold">View More</button><span><FaArrowRightLong /></span>
            </div>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 p-2 mt-8">
           <div className='p-4 '>
             <img src={blog1} alt="" className='' />
             <div className='space-y-4 mt-8'>
                <p className='text-2xl font-semibold'>Business from the brink of ruin by optimizing our website....</p>
                <p className='font-semibold'>08 Nov 2024</p>
             </div>
           </div>
           <div className='p-4 '>
             <img src={blog2} alt=""  />
             <div className='space-y-4 mt-8'>
                <p className='text-2xl font-semibold'>The work is top-notch and I consistently outrank all my...</p>
                <p className='font-semibold'>08 Nov 2024</p>
             </div>
           </div>
           <div className='p-4 overflow-hidden w-fullmx-auto h-auto rounded-lg'>
             <img src={blog3} alt=""  />
             <div className='space-y-4 mt-8'>
                <p className='text-2xl font-semibold'>Grow my business through organic search and marketing...</p>
                <p className='font-semibold'>08 Nov 2024</p>
             </div>
           </div>
        </div>
    </div>
  )
}

export default Blogsandnews
