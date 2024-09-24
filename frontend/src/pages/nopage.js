import React from 'react';
import image_404 from '../Assets/404.png'
import Footer from '../components/footer';
import Navbar from '../components/Navbar';
function NoPage() {
  return (
      <>
    <Navbar />
    <div className="w-full flex flex-col items-center justify-center  text-center ">
      <img
        src={image_404}  // Placeholder link for 404 image
        alt="404 - Not Found"
        className="w-64 mb-8"
      />
      <h1 className="text-4xl font-bold text-gray-700 mb-4">404 - Page Not Found</h1>
      <p className="text-lg text-gray-500">
        Oops! The page you're looking for doesn't exist.
      </p>
    </div>
    <Footer />
    </>
  );
}

export default NoPage;
