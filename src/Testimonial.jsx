import testimonial from './assets/vector-smart.png'

const Testimonial = () => {
  return (
    <div className="container justify-center mx-auto mt-20">
       <div className='justify-center flex'>
          <img src={testimonial} alt="" className='w-100' />
       </div>
       <p className='text-center mt-10 text-xl font-semibold text-gray-600'>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br /> Ut enim ad minim veniam, quis nostrud exercitation ullamco <br /> laboris nisi ut aliquip exea commodo consequat.</p>
       <div className='text-center mt-20'>
           <h1 className='text-blue-950 text-xl font-semibold'>Jonathan Diesel</h1>
           <p className='text-base font-semibold text-gray-600'>Happy Customer, Apple inc</p>
       </div>
    </div>
  )
}

export default Testimonial
