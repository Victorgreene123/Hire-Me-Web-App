import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Bio = () => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleBackClick = () => {
    setShowModal(true);
  };

  const handleYes = () => {
    navigate(-1);
  };

  const handleNo = () => {
    setShowModal(false);
  };
  
  const [newbio , setnewbio] = useState('')
  const handleChange = (e) =>{
    setnewbio(e.target.value)
  }
  const getBioCount = () =>{
        return (newbio.length)
  }

  return (
    <>
    <div className="bg-[#EFF5FF] h-[85vh]">
      <div className="text-[#340352] flex items-center p-3 border">
        <FaArrowLeft className="mr-6" onClick={handleBackClick} />
        <h2 className="text-[1.1rem]">Edit Bio</h2>
      </div>
      <div className="w-full p-2 ">
      <div className="bg-white  rounded-md  shadow-md h-64  w-full  relative mt-14">
        <h2 className="absolute right-2 top-0 text-gray-400"> {getBioCount()}/150</h2>
        <textarea className="w-full py-10  px-4  h-full  text-center " value={newbio} onChange={handleChange} maxLength={150}/>
        <button className="absolute right-2 bottom-2  px-4 py-2 bg-[#340352] text-white rounded" >
                Save
              </button>
      </div>
      </div>

</div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white px-5  py-3 rounded-lg shadow-lg">
            <h3 className=" mb-4">Discard All Changes?</h3>
            <div className="flex justify-end">
              <button className="mr-4 px-4 py-1 bg-[#340352] text-white rounded" onClick={handleYes}>
                Yes
              </button>
              <button className="px-4 py-1 bg-gray-300 rounded" onClick={handleNo}>
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Bio;
