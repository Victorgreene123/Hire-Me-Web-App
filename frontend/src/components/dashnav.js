import React, { useEffect, useState } from "react";
import { FaBell, FaComment, FaEnvelope, FaHome, FaRegCommentDots, FaSignOutAlt, FaUser, FaUserPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from '../Assets/hiremelogo.png'
import { MdChat, MdLogout, MdMessage, MdNotifications } from 'react-icons/md';
const DashNav = () =>{
    const [isFixed, setIsFixed] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

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
    return (
        <nav
        className={` border-[#340352] flex w-full h-[65px] lg:px-5 p-3 bg-[#340352] text-[18px] justify-between items-center ${
          isFixed ? 'fixed top-0 left-0 z-50 shadow-lg bg-[#340352]' : ''
        }`}
      >
        {/* Logo */}
        <div className="relative flex items-center w-full ">
  {/* Logo Section */}
  <img src={logo} alt="Logo" className="w-24 h-auto" />

  {/* Mobile Menu Button */}
  {/* Add your mobile menu button here if needed */}

  {/* Desktop Menu */}
  <div className="absolute right-0 flex items-center flex-grow justify-between">
    
    <div className="flex items-center gap-4">
      {/* Profile Image */}
     <div className="hidden lg:flex items-center gap-4"> 
      <img
        src="/images/profile1.jpg"
        className="border-2 border-white w-10 h-10 rounded-full object-cover "
        alt="Profile"
      />
    <div className="relative">
    <Link to='notifications'><MdNotifications className="text-white text-1xl" />
    {/* Notification Dot */}
    <span className="absolute top-0 right-0 block h-2 w-2 bg-red-600 rounded-full"></span></Link>
  </div>

  {/* Message Icon */}
  <div className="relative">
    <MdChat className="text-white text-1xl" />
    {/* Notification Dot */}
    <span className="absolute top-0 right-0 block h-2 w-2 bg-red-600 rounded-full"></span></div>
  </div>

  

  {/* Logout Icon (No Notification Dot) */}
  <MdLogout className="text-white text-1xl" />

    </div>
  </div>
</div>

  
        
        
      </nav>
    )
}

export default DashNav