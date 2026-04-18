import star from './assets/star.svg'
import admin from './assets/admin.svg'
import bag from './assets/bag.svg'

const Section = () => {
  return (
    <div className="container justify-center mx-auto mt-25">
       <div className="grid sm:grid-cols-2 md:grid-cols-3 text-center  p-4">
           <div className="p-4 justify-items-center ">
              <img src={star} alt="" className='mb-3'/>
              <h1 className="text-5xl font-bold mb-4 text-[#081738]">4.86</h1>
              <p className="text-gray-500 text-base font-semibold">Out of 5 stars from 3896 reviews on <br />Google platform</p>
           </div>
           <div className="p-4 justify-items-center">
              <img src={admin} alt="" className='mb-3' />
              <h1 className="text-5xl font-bold mb-4 text-[#081738]">364</h1>
              <p className="text-gray-500 text-base font-semibold">Client testimonials received in the <br /> year 2021</p>
           </div>
           <div className="p-4 justify-items-center">
              <img src={bag} alt="" className='mb-3' />
              <h1 className="text-5xl font-bold mb-4 text-[#081738]">45M+</h1>
              <p className="text-gray-500 text-base font-semibold">Revenue generated through new <br /> projects & marketing</p>
           </div>
       </div>
    </div>
  )
}

export default Section
