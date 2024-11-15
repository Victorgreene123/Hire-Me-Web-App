import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Settings = () =>{
    const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1)
  };

    return(
        <>
        <div className="bg-[#EFF5FF] h-[85vh]">
      <div className="text-[#340352] flex items-center p-3 border">
        <FaArrowLeft className="mr-6" onClick={handleBackClick} />
        <h2 className="text-[1.1rem] font-semibold">Settings</h2>
      </div>


      </div>

        </>
    )
}

export default Settings