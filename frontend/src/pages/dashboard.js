import React, { useEffect, useState } from "react";
import { FaArrowRight, FaBell, FaCalendarAlt, FaCalendarDay, FaClock, FaDollarSign, FaEnvelope, FaFileInvoiceDollar, FaHome, FaProjectDiagram, FaUser, FaUserCheck, FaUserPlus } from "react-icons/fa";
import { json, Link } from "react-router-dom";
import logo from '../Assets/hiremelogo.png'

import '../customstyles.css'
import DashNav from "../components/dashnav";
import Stat from "../components/stats";
import { MdDashboard, MdHome } from "react-icons/md";
const Dashboard = () =>{

 
    const stats = [
      {
        icon: <FaDollarSign  />,
        title: "Today Earnings",
        number: "120$",
        color: "bg-green-600",
        textColor : "text-green-400",
        category:"earnings",
        range:"today"

        
      },
      {
          icon: <FaEnvelope  />,
          title: "Monthly Clients",
          number: 450,
          color: "bg-orange-300",
          textColor : "text-orange-300",
          category:"clients",
        range:"this month"
          
        },
        {
          icon: <FaFileInvoiceDollar  />,
          title: "Monthly Earnings",
          number: "1200$",
          color: "bg-green-400",
          textColor : "text-green-400",
          category:"earnings",
        range:"this month"
          
        },
      
    ];
  
    return(
    <>
    

 {/* <DashNav /> */}

      {/* ============================================== */}

    <div className="w-full bg-[#EFF5FF] p-3 min-h-[100vh] ">
       
    <div className="items-center text-[#340352] w-full p-2 flex justify-between">
      <h2 className="text-2xl font-bold">Dashboard</h2>
      <div>
        <h2 className="flex items-center "><MdHome />Home  </h2>
      </div>
    </div>
   
      <div className="pb-12 mt-3">
        
       
          <h1 className="text-gray-600 font-normal lg:text-3xl text-2xl text-center">Welcome , <span className="text-[#340352]">Victor</span> 👋</h1>
          <div className="flex w-full mt-3">
          <div className="lg:flex mx-auto  w-full lg:w-4/5 block lg:space-y-0 space-y-2 items-center gap-3">
            {stats.map((item, index) =>{
                return(
                   <div className="lg:w-1/3 w-full">
                    
                   <Stat 
                    title={item.title} 
                    number={item.number} 
                    icon={item.icon} 
                    color={item.color} 
                    textColor={item.textColor}
                    category={item.category}
                    range={item.range}
                    />
                   
                    </div>
                    )
            } )}
            </div>
       </div>
        


      </div>
    </div>
 

   
    </>
    )
}

export default Dashboard