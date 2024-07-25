import React, { useEffect, useState } from "react";
import logo from '../Assets/hiremelogo.png'
import { Link } from "react-router-dom";
import '../customstyles.css'
import '../App.css'
const Navbar = (props) => {
    const [isFixed, setIsFixed] = useState(false);
  
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
        className={`flex w-full h-[65px] lg:px-5 p-3 ${props.isHomePage ? isFixed ? 'bg-[#340352]' : 'bg-transparent' : 'bg-white'} text-[18px] items-center ${
          isFixed ? 'fixed top-0 left-0 z-50 shadow-lg bg-[#340352]' : ''
        }`}
      >
        <i className={`fas fa-bars ${ isFixed ? 'text-white' : 'text-white'} lg:hidden`}></i>
        <img src={logo} alt="Logo" className="w-24 h-auto" />
        <div className="absolute flex items-center lg:hidden right-4">
          <Link to="/find-professionals" className="mr-3 text-[1rem]">
            <span className="text-white open-sans-normal">Log in</span>
          </Link>
          <i className={`fas fa-search ${ isFixed ? 'text-white' : 'text-white'}`}></i>
        </div>
        <div className="hidden lg:flex items-center flex-grow">
          <Link to="/find-professionals" className="ml-10 text-[1rem]">
            <span className="text-white open-sans-normal">Find Professionals</span>
          </Link>
          <div className="gradient-border relative w-50 max-w-md mx-auto">
            <input
              type="text"
              placeholder="Search"
              className="input-field w-full pl-4 p-1 pr-12 border border-gray-300 rounded-full text-white text-sm"
            />
            <span className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <i className="fas fa-search text-white"></i> {/* Font Awesome icon */}
            </span>
          </div>
          <Link to="/find-professionals" className="mr-8 text-[1rem]">
            <span className="text-white open-sans-normal">Log in</span>
          </Link>
          <button className="background-gradient p-2 px-4 rounded-full  text-white text-[1rem]">
            Sign up
          </button>
        </div>
      </nav>
    );
  };
export default Navbar