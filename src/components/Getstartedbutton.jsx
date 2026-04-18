import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Getstartedbutton = () => {
  return (
    <>
      <div className="flex gap-2 items-center mt-8 justify-center">
        <button className=" text-lg text-blue-400 font-semibold hover:text-blue-800 cursor-pointer">Get Started</button><span><MdOutlineKeyboardArrowRight className="text-xl text-blue-400 font-semibold hover:text-blue-800 cursor-pointer"/></span>
      </div>
    </>
  )
}

export default Getstartedbutton
