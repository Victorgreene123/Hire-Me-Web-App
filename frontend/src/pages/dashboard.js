import React, { useEffect, useState } from "react";
import { FaBell, FaEnvelope, FaHome, FaProjectDiagram, FaUser, FaUserCheck, FaUserPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from '../Assets/hiremelogo.png'

import '../customstyles.css'
const Dashboard = () =>{
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
    return(
    <>
     <nav
      className={`flex w-full h-[65px] lg:px-5 p-3 bg-[#340352] text-[18px] items-center ${
        isFixed ? 'fixed top-0 left-0 z-50 shadow-lg bg-[#340352]' : ''
      }`}
    >
      {/* Logo */}
      <img src={logo} alt="Logo" className="w-24 h-auto" />
      
      {/* Mobile Menu Button */}
      <div className="absolute flex items-center lg:hidden right-4">
        <button onClick={toggleMenu}>
          <i className={`fas ${isOpen ? "fa-times" : "fa-bars"} text-white lg:hidden`}></i>
        </button>
      </div>
      
      {/* Desktop Menu */}
      <div className="hidden lg:flex items-center flex-grow justify-between">
        <div className="flex items-center">
          <img src={`/images/profile1.jpg`} className="w-10 h-10 rounded-full object-cover mr-3" alt="Profile" />
          <FaBell className="text-white" />
        </div>
      </div>

      {/* Mobile Slide-out Menu */}
      <div className={`fixed z-50 top-16 left-0 w-full bg-[#340352] text-white transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <ul className="space-y-4 p-4">
          <li>
            <Link to="/" className="flex items-center text-lg p-4 hover:bg-gray-700 rounded-lg" onClick={() => setIsOpen(false)}>
              <FaHome className="mr-3" size={24} />
              Home
            </Link>
          </li>
          <li>
            <Link to="/find-professionals" className="flex items-center text-lg p-4 hover:bg-gray-700 rounded-lg" onClick={() => setIsOpen(false)}>
              <FaUser className="mr-3" size={24} />
              Find Professionals
            </Link>
          </li>
          <li>
            <Link to="/signup" className="flex items-center text-lg p-4 hover:bg-gray-700 rounded-lg" onClick={() => setIsOpen(false)}>
              <FaUserPlus className="mr-3" size={24} />
              Register
            </Link>
          </li>
          <li>
            <Link to="/contact" className="flex items-center text-lg p-4 hover:bg-gray-700 rounded-lg" onClick={() => setIsOpen(false)}>
              <FaEnvelope className="mr-3" size={24} />
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>



      {/* ============================================== */}

    <div className="w-full bg-[#EFF5FF] p-3">

  
   
      <div className="grid lg:grid-cols-4 gap-6">
        {/* Profile Card */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold mb-4">Profile</h3>
          <p className="text-gray-600">Name: Jane Doe</p>
          <p className="text-gray-600">Profession: Web Developer</p>
          <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">Edit Profile</button>
        </div>

        {/* Earnings Card */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold mb-4">Earnings</h3>
          <p className="text-gray-600">Total Earnings: $5000</p>
          <p className="text-gray-600">Pending: $500</p>
          <button className="mt-4 px-4 py-2 bg-green-500 text-white rounded">View Details</button>
        </div>

        {/* Active Gigs Card */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold mb-4">Active Gigs</h3>
          <p className="text-gray-600">Current Projects: 3</p>
          <button className="mt-4 px-4 py-2 bg-purple-500 text-white rounded">Manage Gigs</button>
        </div>

        {/* Message Center Card */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold mb-4">Messages</h3>
          <p className="text-gray-600">Unread Messages: 5</p>
          <button className="mt-4 px-4 py-2 bg-red-500 text-white rounded">View Messages</button>
        </div>
      </div>
    </div>
 

   
    </>
    )
}

export default Dashboard