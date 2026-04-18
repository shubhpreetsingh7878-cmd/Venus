import hero from './assets/hero-image.png'
import profile1 from './assets/hero-profile-1.jpg'
import profile2 from './assets/hero-profile-2.jpg'
import profile3 from './assets/hero-profile-3.jpg'

const Mainsection = () => {
  return (
    <div className="container flex justify-center mx-auto">
      <div className="grid max-w-6xl sm:grid-cols-2 items-center mt-20">
        <div className='p-3'>
           <div className='flex gap-4 items-center mb-2'>
             <div className='h-3 w-3 bg-green-500 rounded-full py-1'></div><span className='text-sm text-gray-500 font-bold'>build everything</span>
           </div>
          <p className='text-5xl font-bold text-[#081738]'>Unveiling My  <br /> Professional Odyssey: Portfolio Highlights</p>
          <p className='text-xl mt-4 text-gray-400 font-bold'>A brief introduction about myself and my professional <br /> objectives.</p>
          <button className='text-white bg-blue-600 hover:bg-blue-800 px-6 p-3 font-sans mt-4 cursor-pointer hover:text-white rounded '>Get Started</button>
          <div>
            <div className='flex -space-x-4 gap-3 mt-10 items-center'>
              <img src={profile1} alt="" className='w-10 h-10 rounded-full ' />
              <img src={profile2} alt="" className='w-10 h-10 rounded-full'  />
              <img src={profile3} alt="" className='w-10 h-10 rounded-full'  />
              <p className='px-4 font-sans text-gray-500'>Need help? <span className='text-blue-400 hover:text-blue-700 cursor-pointer'> Contact our experts </span> <br /> Tell us about your project</p>
            </div>
          </div>
        </div>
        <div>
          <img src={hero} alt="" className='w-xl' />
        </div>
      </div>
    </div>
  );
};

export default Mainsection;
