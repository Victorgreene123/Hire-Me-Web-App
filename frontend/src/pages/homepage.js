import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import '../customstyles.css'
import heroimage1 from '../Assets/heroimage_1.jpg'
import heroimage2 from '../Assets/heroimage_2.jpg'
import heroimage3 from '../Assets/heroimage_3.jpg'
import heroimage4 from '../Assets/heroimage_4.jpg'
import heroimage5 from '../Assets/heroimage_5.jpg'
import pageui from '../Assets/pageui.png'
import flyer from '../Assets/hireme original 1_010357.jpg'
import { FaEdit, FaHandshake, FaHandshakeAltSlash, FaLocationArrow, FaMapMarked, FaMapMarkedAlt, FaMapMarker, FaMapMarkerAlt, FaMapPin, FaMedal, FaSearchLocation } from 'react-icons/fa'; // Font Awesome Medal icon
import { MdStar } from 'react-icons/md';
const Home =() =>{
    const [isFixed, setIsFixed] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 50) {
          setIsFixed(true);
        } else {
          setIsFixed(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
    return(
        <>
        <div className={`relative hero ${ isFixed ?  'lg:h-[80vh] h-[42vh]' : 'lg:h-[90vh] h-[62vh]'}  w-full `}>
        <Navbar isHomePage={true}/>
       
        <div className="   w-[100%] mx-auto lg:flex block gap-10 pl-5 pr-2 lg:pl-5 lg:pr-0 lg:mt-12 mt-20">
            <div className="lg:w-1/2 lg:px-2  mx-auto lg:mx-0 w-full">
                <h1 className="text-white lg:text-6xl font-semibold text-4xl text-left lg:text-left "> Your Trusted Source for <span className="text-outline-lg text-outline text-stroke-purple "> Professional Services</span></h1>
                <p className="text-[#B9A3A3] lg:w-1/2 lg:text-2xl mt-3">Find and Hire Reliable Professionals</p>
                <button className="background-gradient py-5 px-12  rounded-full  text-white text-1xl lg:text-2xl lg:mt-5 mt-12 ">
            Get Started
          </button>
            </div>
            <div className="grid w-2/5 mx-auto px-10 grid-cols-2 gap-5 justify-center  scrolling hidden lg:grid">
            <img className="" src={heroimage1} alt="" />
            <img className=""src={heroimage4} alt="" />
            <img className="" src={heroimage3} alt="" />
            <img className="" src={heroimage4} alt="" />
            </div>
        </div>
        {/* <div className=" h-full bg-[#340352] opacity-20 absolute top-0 left-0 w-full"></div> */}
       </div>
      
       <div className="lg:flex block w-full p-3 lg:px-5 h-auto  lg:h-[60vh] gap-5 lg:mt-0  ">
        <div className="border-[#505168] rounded-md  h-full lg:w-2/5 mb-5 p-2 items-center">
        <img className="w-full" src={pageui}></img>
        </div>
       
        <div className=" h-full lg:w-3/4 lg:pt-5 mx-auto w-full px-2">
        <h1 className="tracking-tighter  lg:text-5xl font-semibold text-[2.5rem] text-left lg:text-left leading-tight">Up your work game, <span className="text-outline-big text-outline text-stroke-purple ">it’s easy</span></h1>
        <h3 className="flex items-start mt-2 p-2 gap-4" >
         
            <FaEdit  className="text-2xl font-thin"/>
            <span className="block">
                <h4 className="text-2xl font-semibold">No cost to join</h4>
                <h4>Register and view various talent</h4>
            </span>

        </h3>

        <h3 className="flex items-start mt-2 p-2 gap-4" >
        <FaHandshake className="text-2xl font-thin" />

            <span className="block">
                <h4 className="text-2xl font-semibold">Work with the best</h4>
                <h4>Explore our list of professionals</h4>
            </span>

        </h3>

        <h3 className="flex items-start mt-2 p-2 gap-4" >
            {/* <i className=" text-2xl "></i> */}
          
          <FaMapMarkerAlt className="text-2xl font-thin" />

            
            
            <span className="block">
                <h4 className="text-2xl font-semibold">Closest to you</h4>
                <h4>Register and view various talent</h4>
            </span>

        </h3>
</div>

        
       </div>


     
        </>
    )
}
export default Home;