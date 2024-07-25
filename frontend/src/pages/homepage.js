import React from "react";
import Navbar from "../components/Navbar";
import '../customstyles.css'
import heroimage1 from '../Assets/heroimage_1.jpg'
import heroimage2 from '../Assets/heroimage_2.jpg'
import heroimage3 from '../Assets/heroimage_3.jpg'
import heroimage4 from '../Assets/heroimage_4.jpg'
import heroimage5 from '../Assets/heroimage_5.jpg'

const Home =() =>{
    return(
        <>
        <div className="relative hero lg:h-[90vh] h-[62vh] w-full ">
        <Navbar isHomePage={true}/>
       
        <div className="   w-[100%] mx-auto lg:flex block gap-10 pl-8 pr-8 lg:pl-5 lg:pr-0 lg:mt-12 mt-20">
            <div className="lg:w-1/2 lg:px-2  mx-auto lg:mx-0 w-full">
                <h1 className="text-white lg:text-6xl font-semibold text-3xl text-left lg:text-left "> Your Trusted Source for <span className="text-outline-lg text-outline text-stroke-purple text-transparent"> Professional Services</span></h1>
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
      

        </>
    )
}
export default Home;