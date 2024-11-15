import React, { useEffect, useState } from "react";
import logo from '../Assets/hiremelogo.png'
import { Link } from "react-router-dom";
import '../customstyles.css'
import '../App.css'
import { FaEnvelope, FaHome, FaProjectDiagram, FaUser, FaUserCheck, FaUserPlus } from "react-icons/fa";
const Navbar = (props) => {
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
        className={`flex w-full h-[65px] lg:px-5 p-3 ${props.isHomePage ? isFixed ? 'bg-[#340352]' : 'bg-transparent' : 'bg-[#340352]'} text-[18px] items-center ${
          isFixed ? 'fixed top-0 left-0 z-50 shadow-lg bg-[#340352]' : ''
        }`}
      >
        <Link to='/'><img src={logo} alt="Logo" className="w-24 h-auto" /></Link>
        <div className="absolute flex items-center lg:hidden right-4">
          <Link to="/login" className="mr-3 text-[1rem]">
            <span className=" open-sans-normal p-3 border border-white rounded-md text-white">Sign in</span>
          </Link>
          
        <button onClick={toggleMenu}><i className={`fas ${isOpen ? "fa-times" : "fa-bars" } text-1xl ${ isFixed ? 'text-white' : 'text-white'} lg:hidden`} ></i></button>

        </div>
        <div className="hidden lg:flex items-center flex-grow justify-between">
          <Link to="/find-professionals" className="ml-10 text-[1rem]">
            <span className="text-white open-sans-normal">Find Professionals</span>
          </Link>
         <div className="flex items-center">
          <Link to="/login" className="mr-8 text-[1rem]">
            <span className="text-white open-sans-normal">Log in</span>
          </Link>
          <Link to="/signup"> <button className="background-gradient p-2 px-4 rounded-full  text-white text-[1rem]">
            Sign up
          </button></Link></div>
        </div>

        <div className={`z-[9999] fixed top-16 left-0 w-full bg-[#340352] text-white transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <ul className="space-y-4 p-4">
          <li>
            <Link
              to="/"
              className="flex items-center text-lg p-4 hover:bg-gray-700 rounded-lg"
              onClick={() => setIsOpen(false)}
            >
              <FaHome className="mr-3" size={24} />
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/find-professionals"
              className="flex items-center text-lg p-4 hover:bg-gray-700 rounded-lg"
              onClick={() => setIsOpen(false)}
            >
              <FaUser className="mr-3" size={24} />
              Find Professionals
            </Link>
          </li>
          <li>
            <Link
              to="/signup"
              className="flex items-center text-lg p-4 hover:bg-gray-700 rounded-lg"
              onClick={() => setIsOpen(false)}
            >
              <FaUserPlus className="mr-3" size={24} />
              Register
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="flex items-center text-lg p-4 hover:bg-gray-700 rounded-lg"
              onClick={() => setIsOpen(false)}
            >
              <FaEnvelope className="mr-3" size={24} />
              Contact
            </Link>
          </li>
        </ul>
      </div>
      </nav>
    );
  };
export default Navbar