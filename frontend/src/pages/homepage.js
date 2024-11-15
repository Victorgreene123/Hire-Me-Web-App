import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import '../customstyles.css'
import logo from '../Assets/hiremelogo.png'
import image from '../Assets/hireme original 2_010322.jpg'
import heroimage1 from '../Assets/heroimage_1.jpg'
import heroimage2 from '../Assets/heroimage_2.jpg'
import heroimage3 from '../Assets/heroimage_3.jpg'
import heroimage4 from '../Assets/heroimage_4.jpg'
import heroimage5 from '../Assets/heroimage_5.jpg'
import picture1 from '../Assets/agreement-concept-illustration.png'
import picture2 from '../Assets/searchpeople.png'
import pageui from '../Assets/pageui.png'
import flyer from '../Assets/HIREME FLYER_010334.jpg'
import { FaBolt, FaCheck, FaClock, FaDollarSign, FaEdit, FaHandshake, FaHandshakeAltSlash, FaLocationArrow, FaMapMarked, FaMapMarkedAlt, FaMapMarker, FaMapMarkerAlt, FaMapPin, FaMedal, FaMoneyBill, FaMoneyBillWave, FaPeopleCarry, FaSearchLocation, FaUserFriends, FaUserPlus, FaUsers } from 'react-icons/fa'; // Font Awesome Medal icon
import { MdStar } from 'react-icons/md';
import Footer from "../components/footer";
import { Link } from "react-router-dom";
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
        <div className={`relative bg-[#340352] ${ isFixed ?  'lg:h-[80vh] h-auto' : 'lg:h-[90vh] h-auto'}  w-full `}>

        <Navbar isHomePage={true}/>
       
        <div className="   w-[100%] mx-auto lg:flex block gap-10 pl-5 lg:py-0 py-20 pr-2 lg:pl-5 lg:pr-0 lg:mt-12 ">
            
            <div className="relative lg:w-1/2 lg:px-12  mx-auto lg:mx-0 w-full lg:pb-0 pb-5">
            {/* <img className="w-[68%]  mx-auto h-full lg:hidden rounded-full" src={picture1} alt="" /> */}
     

                <h1 className="text-white  lg:text-6xl font-semibold text-4xl text-left lg:text-left z-10 lg:mt-0"> Your Trusted Source for  Professional Services</h1>
                <p className="text-white lg:w-1/2 lg:text-1xl mt-3">Find and Hire Reliable Professionals</p>
                <Link to='/signup' ><button className="background-gradient py-5 px-20  rounded-full  text-white text-1xl lg:text-1xl lg:mt-10 mt-12 ">
            Get Started
          </button></Link>
            </div>
            <div className=" lg:w-2/5 w-full mx-auto px-10  gap-5 justify-center  ">
            <img className="w-full lg:block hidden" src={picture1} alt="" />
            
            </div>
        </div>
        {/* <div className=" h-full bg-[#340352] opacity-20 absolute top-0 left-0 w-full"></div> */}
       </div>
      <div className="px-5">
       <div className="lg:flex  block w-full p-3 lg:px-10  h-auto  lg:h-[70vh] gap-5 lg:mt-10  ">
        <div className="border-[#505168] bg-[#f5f8f5] rounded-md flex  justify-center h-full lg:w-1/2 mb-5 lg:p-2 items-center">
        <img className="w-full  " src={picture2}></img>
        </div>
       
        <div className=" h-full lg:w-3/4 lg:pt-5 mx-auto w-full px-2">
        <h1 className="tracking-tighter  lg:text-5xl font-semibold text-[1.8rem] text-left lg:text-left leading-tight text-[#340352] ">Hire the best pros </h1>
        <h3 className="flex items-center mt-2 p-2 gap-4" >
         
            <FaEdit  className="text-2xl font-thin"/>
            <span className="block">
                <h4 className="lg:text-2xl  text-1xl font-semibold  ">No cost to join</h4>
                <h4 className="text-sm">Register and browse through a variety of talented professionals at no cost.</h4>
            </span>

        </h3>

        <h3 className="flex items-center mt-2 p-2 gap-4" >
        <FaHandshake className="text-2xl font-thin" />

            <span className="block">
                <h4 className="lg:text-2xl  text-1xl font-semibold ">Work with the best</h4>
                <h4 className="text-sm">Explore our curated list of top professionals in your area.</h4>
            </span>

        </h3>

        <h3 className="flex items-center mt-2 p-2 gap-4" >
            {/* <i className=" text-2xl "></i> */}
          
          <FaUserPlus className="text-2xl font-thin" />

            
            
            <span className="block ">
                <h4 className="lg:text-2xl  text-1xl font-semibold ">Sign Up Now</h4>
                <h4 className="text-sm">Start connecting with experts who can help you achieve your goals.</h4>
            </span>

        </h3>
       <Link to='/signup'><button className="background-gradient py-5 px-10  lg:w-1/3 w-full rounded-full  text-white text-1xl lg:text-1xl lg:mt-5 mt-12 ">Sign up </button></Link> 
</div>

        
       </div>
       {/* NEXT SECTION */}


       <div className=" bg-[#FDF7FD] mx-auto block w-full  rounded-lg lg:flex  lg:pl-12   h-auto   gap-5 mt-5  ">
        <div className="border-[#505168]  lg:py-5 rounded-md  h-full lg:w-4/5 mb-5 p-2 items-center">
        <div className="px-3">
        <h1 className="tracking-tighter lg:text-5xl font-semibold text-[2.2rem] text-left lg:text-left leading-tighter text-[#340352]">Why you should use hireme</h1>
        <h3 className="flex items-center mt-2 p-2 gap-4" >
         
         <FaDollarSign className="text-2xl font-thin"/>
         <span className="block">
             <h4 className="lg:text-2xl  text-1xl font-normal ">Increase your Earning</h4>
             <h4 className="text-sm">Find opportunities that allow you to earn more by working with the best clients.</h4>
         </span>

     </h3>

     <h3 className="flex items-center mt-2 p-2 gap-4" >
         
         <FaClock className="text-2xl font-thin"/>
         <span className="block">
             <h4 className="lg:text-2xl  text-1xl font-normal ">Work at your own time</h4>
             <h4 className="text-sm">Enjoy the flexibility of working on your schedule, making it easier to balance work and life.</h4>
         </span>

     </h3>

     <h3 className="flex items-center mt-2 p-2 gap-4" >
         
         <FaUsers className="text-2xl font-thin"/>
         <span className="block">
             <h4 className="lg:text-2xl  text-1xl font-normal ">Expand Your Reach</h4>
             <h4 className="text-sm"> Get connected with clients seeking exactly what you offer.</h4>
         </span>

     </h3>
</div>
        </div>
       
        <div className="hero h-full lg:w-2/5   mx-auto w-full">
        <img src={flyer} className="w-full "></img>
        </div>
        
        </div>

       <div className=" bg-[#F3E5F2] mx-auto block w-full  rounded-lg lg:flex  lg:pl-12   h-auto   gap-5 mt-5  ">

<div className="border-[#505168]  lg:py-5 rounded-md  h-full lg:w-4/5 mx-auto mb-5 p-2 items-center">
        <div className="px-3">
        <h1 className="tracking-tighter lg:text-5xl font-semibold text-[1.7rem] text-center lg:text-left leading-tighter text-[#340352]">Sign up now!</h1>
        <h3 className="flex items-center mt-2 p-2 gap-4" >
         
         <FaCheck className="text-3xl font-thin text-[#340352]"/>
         <span className="block">
             <h4 className="lg:text-3xl  text-1xl font-normal ">It's Quick and Simple</h4>
             <h4 className="text-sm" > Register in minutes and start browsing available professionals.</h4>
 
         </span>

     </h3>

     <h3 className="flex items-center mt-2 p-2 gap-4" >
         
     <FaCheck className="text-3xl font-thin text-[#340352]"/>

         <span className="block">
             <h4 className="lg:text-3xl  text-1xl font-normal ">Immediate Access</h4>
             <h4 className="text-sm" > No delays – find talent or gigs right away, without any hidden costs.</h4>
 
         </span>

     </h3>
     <Link to='/signup'><button className="background-gradient py-5 px-10  lg:w-1/3 w-full rounded-full  text-white text-1xl lg:text-1xl lg:mt-5 mt-12 ">Sign up now</button></Link>

     
</div>
</div>

</div> 
        </div>

        <Footer />
     
        </>
    )
}
export default Home;