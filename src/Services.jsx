import uxdesign1 from './assets/ux-design-product_1.svg'
import uxdesign2 from './assets/ux-design-product_2.svg'
import performance from './assets/perfomance-optimization.svg'
import Getstartedbutton from './components/Getstartedbutton';

const Services = () => {
  return (
    <div className="container max-w-8/12 justify-center mx-auto mt-30">
      <div className="justify-self-center">
            <div className="flex items-center justify-center gap-3">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-lg font-bold text-gray-500">our services</span>
            </div>
            <div className="text-center mt-5">
              <p className="text-4xl text-[#081738] font-bold">Services specifically designed to meet your </p>
              <p className="text-4xl text-[#081738] font-bold">business needs</p>
            </div>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 text-center ">
            <div className="p-10 mt-20">
                <img src={uxdesign1} alt="" className='justify-self-center mb-10' />
                <p className="text-3xl text-[#081738] font-bold mb-10">UX & Product <br /> Design</p>
                <p className='text-[16px] font-semibold text-gray-500'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                 <Getstartedbutton/>
            </div>
            <div className="p-10 mt-20">
                <img src={performance} alt="" className='justify-self-center mb-10' />
                <p className="text-3xl text-[#081738] font-bold mb-10">Performance Optimization</p>
                <p className='text-[16px] font-semibold text-gray-500'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                 <Getstartedbutton/>
            </div>
            <div className="p-10 mt-20">
                <img src={uxdesign2} alt="" className='justify-self-center mb-10' />
                <p className="text-3xl text-[#081738] font-bold mb-10">UX & Products <br /> Design</p>
                <p className='text-[16px] font-semibold text-gray-500'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                 <Getstartedbutton/>
            </div>
      </div>
    </div>
  );
};

export default Services;
