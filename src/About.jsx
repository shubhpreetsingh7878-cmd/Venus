import Sectiontwo from "./Sectiontwo"
import Section from "./Section"

const About = () => {
  return (
    <>
      <div className="mt-20">
         <h1 className="text-4xl text-[#081738] text-center font-bold">About Us</h1>
         <p className="text-center text-xl mt-10 text-gray-500">Discover a wealth of insightful materials meticulously crafted to provide you <br /> with a comprehensive understanding of the latest trends.</p>
      </div>
      <Section/>
      <Sectiontwo/> 
    </>
  )
}

export default About
