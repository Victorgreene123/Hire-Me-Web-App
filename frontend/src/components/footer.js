import React from 'react';
import logo from '../Assets/hiremelogo.png'; // Adjust the path if necessary

const Footer = () => {
  return (
    <footer className="bg-[#340352] text-white py-8 mt-10">
      <div className="container lg:mx-auto flex flex-col md:flex-row lg:justify-between items-center">
        {/* Logo Section */}
        <div className="mb-4 md:mb-0">
          <img src={logo} alt="HireMe Logo" className="h-12" />
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
          <a href="#" className="hover:text-gray-300">Find Professionals</a>
          <a href="#" className="hover:text-gray-300">Search</a>
          <a href="#" className="hover:text-gray-300">Log in</a>
          <a href="#" className="hover:text-gray-300">Sign up</a>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="mt-8 text-center text-sm">
        &copy; {new Date().getFullYear()} HireMe. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
