import progress from './assets/progress-work.png'

const Sectiontwo = () => {
  return (
    <div className="container justify-center mx-auto mt-20">
       <div className="grid sm:grid-cols-2 items-center">
           <div>
              <img src={progress} alt="" className='w-xl justify-self-end mx-10'/>
           </div>
           <div>
              <div className='flex items-center gap-2 mb-5'>
                 <div className='bg-green-400 w-3 h-3 rounded-full'></div>
                 <span className='font-semibold font-sans text-base text-gray-500'>build everything</span>
              </div>
              <div>
                <p className='text-4xl font-bold text-[#081738]'>Build amazing websites and <br /> landing pages with ease vishal</p>
                <p className='mt-8 text-base text-gray-500 font-sans font-bold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br /> tempor incididunt ut labore et dolore magna aliqua. Quis ipsum <br /> suspendisse ultrices gravida.</p>
                <div className='w-5/6 mt-10'>
                    <div className='flex justify-between mb-2'>
                       <p className='text-base text-gray-500 font-semibold'>UX Research and Testing</p> 
                       <p>95%</p>
                    </div>
                    <div className='w-full h-1 bg-blue-300 rounded-full'>
                        <div className='w-5/6 h-1 bg-blue-500'></div>
                    </div>
                </div>
                <div className='w-5/6 mt-10'>
                    <div className='flex justify-between mb-2'>
                       <p className='text-base text-gray-500 font-semibold'>Product Management</p> 
                       <p>84%</p>
                    </div>
                    <div className='w-full h-1 bg-blue-300 rounded-full'>
                        <div className='w-4/6 h-1 bg-blue-500'></div>
                    </div>
                </div>
                <div className='w-5/6 mt-10'>
                    <div className='flex justify-between mb-2'>
                       <p className='text-base text-gray-500 font-semibold'>UI & Visual Design</p> 
                       <p>90%</p>
                    </div>
                    <div className='w-full h-1 bg-blue-300 rounded-full'>
                        <div className='w-4/5 h-1 bg-blue-500'></div>
                    </div>
                </div>
              </div>
           </div>
       </div>
    </div>
  )
}

export default Sectiontwo
