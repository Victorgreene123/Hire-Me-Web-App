import React from "react";
import { FaBookmark, FaCircle, FaEllipsisV, FaHandshake, FaHeart, FaStar, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const User = ({ isOpen, toggleOpen, userId , image , name , occupation , location ,rating, bio , whatsapp , clickUser , isUserclicked , active}) => {
  return (
    <>
      <div className={`w-full p-1 px-2 border mb-2 rounded-md hover:opacity-80  ${active === userId ? "border-[#340352]" : "border"}`} onClick={clickUser}>
        <div className="relative flex items-center justify-between">
          <div className="relative flex items-center gap-4">
            <img src={`images/${image}`} className="w-9 h-9 rounded-full object-cover" alt="Profile" />
            <div className="block text-[0.8rem] py-1 ">
              <h2 className="font-semibold">{name}</h2>
              <h3 className="text-gray-400 flex items-center gap-1">
                {occupation}
                <FaCircle className="text-[0.5rem] text-gray-500" />
               {location}
                <FaCircle className="text-[0.5rem] text-gray-500" />
                {rating}/5.0 <FaStar />
              </h3>
            </div>
          </div>
          {/* <button onClick={() => toggleOpen(userId)}>
           {isOpen ? <FaTimes className="text-gray-400"/> : <FaEllipsisV className="text-gray-400" /> }
          </button>
          <div
            className={`${
              isOpen ? "opacity-100 max-h-40" : "opacity-0 max-h-0"
            } transition-all duration-300 ease-in-out overflow-hidden bg-white absolute text-sm w-2/5 right-0 top-8 p-1 border `}>
            <ul className="w-full">
                <li className="w-full p-2 border-b">View Profile</li>
                <li className="w-full p-2">Report</li>
                
                
            </ul>
          </div> */}
        </div>

        <div className="p-1">
          <p className="text-sm">
           {bio}
          </p>
        </div>
        <div className="p-1 flex justify-between">
          <h3 className="text-sm flex items-center">
            <FaHandshake className="text-red-600" />50+{" "}Contracts
          </h3>
          
          {/* <a target="_blank" href={`https://wa.me/${whatsapp}?text=Hi%20I%20am%20from%20the%20HireME%20website,%20I%20would%20need%20you%20to%20do%20some%20work%20for%20me.%20I%20need%20a%20${occupation}`}
          ><button className="border text-sm flex items-center rounded-lg px-2 py-1">
            <FaBookmark /> Book
          </button></a> */}
        </div>
      </div>
    </>
  );
};

export default User;
