import wise from "./assets/wise.png";
import google from "./assets/google-pay.png";
import juction from "./assets/play-juction.png";
import stripe from "./assets/stripe.png";
import logowhite from "./assets/logo-white.svg"

const Footer = () => {
  return (
    <div className="container-fluid bg-[#081738]">
      <div className="container justify-center mx-auto">
        <div className="grid sm:grid-cols-2 px-25">
          <div className="p-15">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-base font-semibold text-white">
                build everything
              </span>
            </div>
            <h1 className=" text-white text-4xl font-bold mt-10">
              Let’s discuss about your project <br /> and take it the next
              level.
            </h1>
            <div className="grid sm:grid-cols-2 mt-8">
              <div>
                <h1 className="text-gray-500 text-xl font-semibold">Phone</h1>
                <p className=" text-white text-lg font-semibold">
                  +323-25-8964
                </p>
              </div>
              <div>
                <h1 className="text-gray-500 text-xl font-semibold">Email</h1>
                <p className=" text-white text-lg font-semibold">
                  me@landingpro.com
                </p>
              </div>
            </div>
            <div className="mt-5">
              <h1 className="text-gray-500 text-xl font-semibold">Location</h1>
              <p className=" text-white text-lg font-semibold">
                Mark Avenue, Dalls Road, New York
              </p>
            </div>
            <div className="mt-5 mb-5">
              <hr className="text-blue-400" />
            </div>
            <div className="mt-5 mb-3">
              <h1 className="text-gray-500 text-base font-bold">Trusted by</h1>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 items-center">
              <img src={google} alt="" className="w-8/12" />
              <img src={juction} alt="" className="w-7/12" />
              <img src={stripe} alt="" className="w-4/12" />
              <img src={wise} alt="" className="w-4/12" />
            </div>
          </div>
          <div className="justify-items-center items-center grid py-8">
            <div className="bg-white w-8/12 rounded-xl p-5 px-13">
              <h1 className="text-3xl font-bold text-blue-950">Start the project</h1>
              <form action="">
                <div className="mt-5 flex gap-4 mb-3">
                  <input type="text" className="border border-gray-300 p-2 py-3 rounded-xl w-1/2" placeholder="First Name "/>
                  <input type="text" className="border border-gray-300 p-2 py-3 rounded-xl w-1/2" placeholder="Last Name"/>
                </div>
                <div className="space-y-3">
                   <input type="text" className="border border-gray-300 p-2 py-3 rounded-xl w-full" placeholder="Youremail@website.com" />
                   <input type="text" className="border border-gray-300 p-2 py-3 rounded-xl w-full" placeholder="Country" />
                   <textarea className="border border-gray-300 p-2 rounded-xl w-full" placeholder="Let us about your project" row="8" name="" id=""></textarea>
                </div>
                
                <div className="flex items-start text-sm gap-1"> 
                  <input type="checkbox" class="mt-1" />
                  <p className="text-base font-semibold text-gray-500">I have read and acknowledge the <span className="text-blue-600 cursor-pointer">Terms and Conditions</span></p>
                </div>
                <button className="bg-blue-500 text-xl text-white font-semibold px-8 p-2 rounded-xl w-full mt-4">Submit Inquiry</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <hr className="border-t-1 border-blue-300" />
      <div className="grid w-8/12 items-center justify-items-center mx-auto mt-10 sm:grid-cols-2 md:grid-cols-3 ">
          <div>
             <img src={logowhite} alt="" />
             <p className="text-white mt-8 text-4xl font-bold">Ready To Get <br /> Started?</p>
             <button className="mt-6 bg-blue-500 text-white px-8 font-semibold cursor-pointer rounded-[8px] py-2">Get Start</button>
          </div>
          <div>
             <h1 className="text-white font-bold text-xl">Support</h1>
             <div className="mt-4">
                <h1 className="text-white text-lg font-semibold">Phone</h1>
                <p className="text-gray-500 text-xl font-bold hover:text-white cursor-pointer">+(690) 2560 0020</p>
             </div>
             <div className="mt-4">
                <h1 className="text-white text-lg font-semibold">Email</h1>
                <p className="text-gray-500 text-xl font-bold hover:text-white cursor-pointer">info@Venus.com</p>
             </div>
             <div>
                <img src="" alt="" />
                <img src="" alt="" />
                <img src="" alt="" />
             </div>
          </div>
          <div>
            <h1 className="text-white text-2xl font-bold">Subscribe newsletter</h1>
            <p className="text-gray-500 text-xl mt-3">To be updated with all the latest trends and product</p>
            <div className="mt-5">
                <input className="bg-white p-4 rounded-s-xl" type="text" placeholder="Email" /><span><button className="bg-blue-500 text-white font-semibold cursor-pointer p-4 rounded-r-xl">Subscribe</button></span>
            </div>
          </div>
      </div>
       <hr className="border-t-1 mt-2 border-blue-300" />
       <div className="text-center mx-auto mt-6 py-6 space-y-3">
          <div className="flex justify-center  items-center">
             <ul className="flex gap-6 text-base font-semibold text-gray-500 ">
                <li className="hover:text-blue-800 cursor-pointer">About</li>
                <li className="hover:text-blue-800 cursor-pointer">Services</li>
                <li className="hover:text-blue-800 cursor-pointer">Portfolio</li>
                <li className="hover:text-blue-800 cursor-pointer">Blog</li>
                <li className="hover:text-blue-800 cursor-pointer">Contact</li>
             </ul>
          </div>
          <div>
             <p className="text-[16px] font-semibold text-gray-500">© All rights reserved. Made by <span className="cursor-pointer hover:text-blue-800"> GetNextJs Templates</span> • Distributed by ThemeWagon</p>
          </div>
       </div>
    </div>
  );
};

export default Footer;
