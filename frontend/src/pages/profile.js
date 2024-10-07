import React from "react";
import { FaArrowLeft, FaBookmark, FaCircle, FaEllipsisV, FaFacebook, FaGraduationCap, FaGripLinesVertical, FaHandshake, FaHeart, FaInstagram, FaPlus, FaSpinner, FaStar, FaWhatsapp } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import picture1 from '../Assets/hero-background.jpg'
import { MdOutlineReviews, MdPerson } from "react-icons/md";

const ProfilePage = () =>{
    const { name } = useParams()
    return (
        <>
        
<div className="pb-16">

            <div className="flex  ">
               
                <div className="  text-white lg:w-full w-full  mx-auto  ">
                    <div className=" ">
                    
                    <div className="py-6 bg-[#340352] block justify-between ">
                        <div className=" gap-3 items-center justify-between">
                            <img className=" mx-auto lg:w-36 lg:h-36 w-32 h-32 rounded-full object-cover   lg:border-4 border-2 border-white" src="/images/profile1.jpg" ></img>
                            <div className="mx-auto text-center block ">
                                <h2 className=" lg:text-3xl text-[1.1rem] font-semibold">Victor Okereafor</h2>
                                <h3 className="justify-center  w-full text-[1rem]   flex items-center gap-1">
            Plumber
                
                <FaCircle className="text-[0.5rem] " />
                4.6 <FaStar />
                <a 
            target="_blank" 
            href={`https://wa.me/?text=Hi%20I%20am%20from%20the%20HireME%20website,%20I%20would%20need%20you%20to%20do%20some%20work%20for%20me.%20I%20need%20a%20`}
            ><button className="text-[0.8rem]  bg-[#340352] items-center text-white rounded-md py-1 px-2 border  mx-auto flex"><FaBookmark className="text-1xl mr-1"/>  Book</button></a>

              </h3>
              
              
                            </div>
                          
                                             

                        <div className="flex w-full justify-center gap-2 mt-2">
                <h3 className="  ">
                    80 Contracts
                </h3>
                <h3 className="">
                    7 Likes
                </h3>
                <h3 className=" ">
                    22 Reviews
                </h3>
            </div>
                        </div>

                  
                    
                    </div>

                    {/* END OF PROFILE HEADER */}
                  
                       <div className="bg-[#EFF5FF] block  flex-1 gap-2 lg:flex  lg:space-y-0 space-y-3 py-2 lg:py-6 px-2">
                                            
                            
                            <div className="shadow-md border-2 bg-white border-white w-full border rounded-md p-3 h-60 mt-0">
                            <h3 className=" text-black flex items-center"><MdPerson /> Bio</h3>
                               <div className="w-full items-center justify-center flex h-full">
                                 <div className=" ">
                                 <h3 className="text-black opacity-60 ">Write something about yourself</h3>
                                 {/* <h3 className="text-black opacity-60 text-center  ">I am a really ttalwented worker wo is ready to work and serve any of my clients</h3> */}
                                 
                                <Link to='bio'> <button className="mt-1 mx-auto items-center gap-1 text-sm flex px-2 py-1 border rounded-md text-[#340352] border-[#340352]">
                                    <FaPlus />
                                    Add
                                 </button></Link>
                                </div>
                                 </div>
                            </div>

                            <div className="shadow-md border-2 bg-white border-white w-full border rounded-md p-3 h-60 mt-0">
                            <h3 className=" text-black flex items-center"><MdOutlineReviews />Reviews</h3>
                            <div className="w-full items-center justify-center flex h-full">
                            <div className=" ">
                                 <h3 className="text-black opacity-60 ">Add some of your best reviews</h3>
                                 <button className="mt-1 mx-auto items-center gap-1 text-sm flex px-2 py-1 border rounded-md text-[#340352] border-[#340352]">
                                    <FaPlus />
                                    Add
                                 </button>
                                </div>
                                 </div>
                            </div>

                            <div className="shadow-md border-2 bg-white border-white w-full border rounded-md p-3 h-60 mt-0">
                            <h3 className=" text-black flex items-center"><FaGraduationCap />Education</h3>
                            <div className="w-full items-center justify-center flex h-full">
                            <div className=" ">
                                 <h3 className="text-black opacity-60 ">Add your educational background </h3>
                                 <button className="mt-1 mx-auto items-center gap-1 text-sm flex px-2 py-1 border rounded-md text-[#340352] border-[#340352]">
                                    <FaPlus />
                                    Add
                                 </button>
                                </div>
                                 </div>
                            </div>

                            
                    </div>

                    </div>
                    
                 


                </div>
                
            </div>
            
</div>
        </>
    )
}

export default ProfilePage
