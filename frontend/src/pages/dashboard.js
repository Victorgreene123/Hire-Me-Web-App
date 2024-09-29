import React, { useEffect, useState } from "react";
import { FaBell, FaCalendarAlt, FaCalendarDay, FaClock, FaDollarSign, FaEnvelope, FaFileInvoiceDollar, FaHome, FaProjectDiagram, FaUser, FaUserCheck, FaUserPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from '../Assets/hiremelogo.png'

import '../customstyles.css'
import DashNav from "../components/dashnav";
import Stat from "../components/stats";
const Dashboard = () =>{
    const [isFixed, setIsFixed] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
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
          icon: <FaCalendarAlt  />,
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
  const toggleMenu = () => setIsOpen(!isOpen);
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
    

 <DashNav />

      {/* ============================================== */}

    <div className="w-full bg-[#EFF5FF] p-3">
       
  
   
      <div className="">
        
       
          <h1 className="text-gray-600 font-normal text-3xl text-center">Welcome , <span className="text-[#340352]">Victor</span> 👋</h1>
          <div className="flex w-full mt-3">
          <div className="lg:flex mx-auto  w-full lg:w-4/5 block space-y-2 items-center gap-3">
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