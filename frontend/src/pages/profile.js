import React from "react";
import { FaArrowLeft, FaBookmark, FaCircle, FaEllipsisV, FaFacebook, FaGripLinesVertical, FaHandshake, FaHeart, FaInstagram, FaSpinner, FaStar, FaWhatsapp } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import picture1 from '../Assets/hero-background.jpg'

const ProfilePage = () =>{
    const { name } = useParams()
    return (
        <>
        {/* <div className=" h-[100vh]  w-full lg:w-1/3 mx-auto bg-[#EFF5FF] ">
        <Link to='/'><span  className="p-2 cursor:pointer text-[1.4rem] flex items-center mb-10">
                    <FaArrowLeft />
                    
            </span></Link>
            
            <img src={`/images/profile1.jpg`} className="w-40 mx-auto h-40 rounded-full object-cover" alt="Profile" />
            <h2 className="font-semibold text-2xl text-center">{name}</h2>
            <h3 className="text-center w-full text-1xl justify-center text-gray-400 flex items-center gap-1">
            Plumber
                <FaCircle className="text-[0.5rem] text-gray-500" />
                Ikeja
                <FaCircle className="text-[0.5rem] text-gray-500" />
                4.6/5.0 <FaStar />
              </h3>
            <div className="mt-4 flex gap-3 mx-auto justify-center w-1/2">
                <FaFacebook className="w-8 h-8 border p-1 rounded-md text-2xl"/>
                <FaInstagram className="w-8 h-8 border p-1 rounded-md text-2xl"/>
                <FaWhatsapp className="w-8 h-8 border p-1 rounded-md text-2xl"/>
            </div>
            <div className="flex gap-3 w-full justify-center mt-6">
                <h3 className="block w-1/5 ">
                    <span className="text-[1.2rem]  flex font-semibold  justify-center">80</span>
                    <span className="flex  justify-center">Contracts</span>
                </h3>
                <h3 className="block w-1/5 ">
                    <span className="text-[1.2rem]  flex font-semibold justify-center">7</span>
                    <span className="flex  justify-center">Likes</span>
                </h3>
                <h3 className="block w-1/5 ">
                    <span className="text-[1.2rem]  font-semibold flex  justify-center">22</span>
                    <span className="flex  justify-center">Reviews</span>
                </h3>
            </div>
            <a 
            target="_blank" 
            href={`https://wa.me/?text=Hi%20I%20am%20from%20the%20HireME%20website,%20I%20would%20need%20you%20to%20do%20some%20work%20for%20me.%20I%20need%20a%20`}
            ><button className="mt-6 bg-[#340352] items-center text-white rounded-md py-3 px-5 border  mx-auto flex"><FaWhatsapp className="text-2xl mr-2"/> Send a Booking</button></a>


                            </div> */}
<div>
            <div className="flex  ">
                <div className="lg:w-4/5 w-full  mx-auto    ">
                    <div className="relative ">
                    <div className="w-full border rounded-md ">
                        <img src={picture1} className="w-full lg:h-64 h-44 border rounded-md"></img>
                    </div>
                    <div className="lg:flex block justify-between">
                        <div className="lg:flex gap-3">
                            <img className="lg:w-32 lg:h-32 w-40 h-40 rounded-full object-cover z-10 absolute top-[34%] lg:top-[72%] left-[30%] lg:left-4 border-4 border-white" src="/images/profile1.jpg" ></img>
                            <div className="lg:ml-40 text-center block lg:mt-4 mt-2 mt-32">
                                <h2 className=" lg:text-3xl text-2xl font-bold">Victor Okereafor</h2>
                                <h3 className="justify-center  w-full text-1xl  text-gray-400 flex items-center gap-1">
            Plumber
                <FaCircle className="text-[0.5rem] text-gray-500" />
                Ikeja
                <FaCircle className="text-[0.5rem] text-gray-500" />
                4.6/5.0 <FaStar />
              </h3>
              
                            </div>
                        </div>

                        <div>
                        <a 
            target="_blank" 
            href={`https://wa.me/?text=Hi%20I%20am%20from%20the%20HireME%20website,%20I%20would%20need%20you%20to%20do%20some%20work%20for%20me.%20I%20need%20a%20`}
            ><button className="text-1xl mt-3 bg-[#340352] items-center text-white rounded-md py-2 px-3 border  mx-auto flex"><FaBookmark className="text-2xl mr-1"/>  Book</button></a>
                        </div>
                    
                    </div>
                    

                    </div>
                    


                </div>
            </div>
            <div className="bg-[#EFF5FF] w-full h-64 mt-3 ">

            </div>
</div>
        </>
    )
}

export default ProfilePage
