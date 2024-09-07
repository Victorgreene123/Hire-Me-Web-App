import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import { FaGripLinesVertical, FaMarker, FaSearch } from "react-icons/fa";
const Explore = () =>{
    return(
        <>
        <Navbar />
        <div className="bg-white w-full p-2">
            <div className="w-full py-6 border-b">
            <div className="relative rounded-md lg:w-3/5 mx-auto lg:flex block w-[90%] items-center  border border-grey-600">
            <div className="relative lg:w-1/2 w-full items-center flex lg:border-b-0 border-b">
               
               <i className="fa fa-search text-[1.3rem] text-gray-400 mr-1 absolute left-4 "></i>
                <input placeholder="Job title, keywords" className="w-full pl-14 py-4 pr-3 border-[#340352]  rounded-md focus:border-b-2 focus:border-b-[#340352]"></input>
              </div>
               <FaGripLinesVertical className="hidden lg:block"/>
                <div className="relative lg:w-1/2 w-full items-center flex">
                <svg xmlns='http://www.w3.org/2000/svg' fill='currentColor' viewBox='0 0 20 20' width={30} className="text-gray-400 absolute left-4"><path d='M10 2.002a5.683 5.683 0 00-5.687 5.687c0 3.603 4.06 8.656 5.32 10.137a.48.48 0 00.736 0c1.26-1.481 5.319-6.534 5.319-10.137A5.683 5.683 0 0010 2.002zm0 7.718a2.032 2.032 0 11.002-4.064A2.032 2.032 0 0110 9.72z'/></svg>
                <input placeholder="Location" className="w-full pl-14 py-4 pr-3 border-[#340352]  focus:border-b-2 focus:border-b-[#340352]"></input>
</div>
            </div>
            </div>
        </div>
        <Footer />
        </>
    )
}

export default Explore