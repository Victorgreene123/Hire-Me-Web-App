import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { MdChat, MdNotificationsActive } from "react-icons/md";
import { FaChartBar } from "react-icons/fa";

const DashFooter = () => {
  const location = useLocation();
  
  return (
    <div className="lg:hidden flex items-center fixed bottom-0 p-2 bg-[#340352] w-full justify-between px-4">
      
      {/* Dashboard Icon */}
      <div className="relative flex flex-col items-center w-auto ">
        <Link to="/dashboard">
          <FaChartBar
            className={`${
              location.pathname === "/dashboard" ? "text-purple-400" : "text-white"
            } text-2xl`}
          />
        </Link>
        <h5 className="text-[0.7rem] text-white mt-1">Dashboard</h5>
      </div>
      
      {/* Notifications Icon */}
      <div className="relative flex flex-col items-center">
        <Link to="inbox">
          <MdNotificationsActive
            className={`${
              location.pathname === "/dashboard/inbox" ? "text-purple-400" : "text-white"
            } text-2xl`}
          />
          <span className="absolute top-0 right-0 h-2 w-2 bg-red-600 rounded-full"></span>
        </Link>
        <h5 className="text-[0.7rem] text-white mt-1">Inbox</h5>
      </div>
      
      {/* Message Icon */}
      <div className="relative flex flex-col items-center">
        <Link to="chats">
          <MdChat
            className={`${
              location.pathname === "/dashboard/chats" ? "text-purple-400" : "text-white"
            } text-2xl`}
          />
          <span className="absolute top-0 right-0 h-2 w-2 bg-red-600 rounded-full"></span>
        </Link>
        <h5 className="text-[0.7rem] text-white mt-1">Chats</h5>
      </div>

      {/* Profile Icon */}
      <Link to="profile/JohnDoe">
        <div className="flex flex-col items-center">
          <img
            src="/images/profile1.jpg"
            className="border-2 border-white w-12 h-12 rounded-full object-cover"
            alt="Profile"
          />
        </div>
      </Link>
    </div>
  );
};

export default DashFooter;
