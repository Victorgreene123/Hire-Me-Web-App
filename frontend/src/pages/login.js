import React from "react";
import Navbar from "../components/Navbar";
const Login = () =>{
    return (
        <>
        
        <div className="  bg-[#EFF5FF] h-[100vh] pb-4">
            <div className="lg:flex lg:bg-white lg:p-2 relative mx-auto lg:w-3/5 w-full">
            <div className="hero h-64 lg:h-auto lg:w-[30%]  lg:rounded-md bg-white  w-full flex pt-5">
                <div className="lg:block lg:items-center lg:p-6 lg:w-full flex gap-3 w-5/6  justify-center mx-auto">
                <div className="lg:flex lg:items-center ">
                    
                <div className="lg:mb-4 h-8 w-8 lg:h-10 lg:w-10 rounded-full p-1 bg-[#EFF5FF] flex">
                   <h2 className="text-1xl lg:text-2xl justify-center font-bold  mx-auto">1</h2>
                </div>
                <div className="hidden lg:block leading-tight text-white">
                    <h2>STEP 1</h2>
                    <h2>YOUR INFO</h2>

                </div>
                </div>
                
               
                </div>
            </div>


            <div className="lg:static absolute top-20 mx-auto left-[5%] bg-white  w-[90%] lg:w-[60%] h-auto rounded-lg px-4 py-10">
                <h2 className="text-2xl font-bold lg:text-3xl">Personal Details</h2>
                <p className="text-sm">please provide your name, email address, and phone number.</p>
                <div className="mt-8">
                    <div className="w-full mb-4">
                        <label>Name</label>
                        <input placeholder="John Doe" className="border rounded-md p-3 w-full"></input>
                    </div>
                    <div className="w-full mb-4">
                    <label>Email</label>

                        <input placeholder="johndoe@gmail.com" className="border rounded-md p-3 w-full"></input>
                    </div>
                    <div className="w-full mb-4">
                    <label>Phone Number</label>

                        <input placeholder="081xxxxxxxx" className="border rounded-md p-3 w-full"></input>
                    </div>
                </div>
                <div className="lg:static lg:block  hidden mx-auto   w-full     p-2">
                            <div className="flex justify-between ">
                                    <button className="border px-14 py-4 rounded-md bg-white">Previous</button>
                                    <button className="border px-14 py-4 rounded-md text-white bg-[#340352]">Next</button>
                            </div>
            </div>
            </div>
            
            <div className="lg:hidden fixed bottom-0 mx-auto  bg-[#340352] w-full     p-4">
                            <div className="flex justify-between ">
                                    <button className="border px-14 py-4 rounded-md bg-white">Previous</button>
                                    <button className="border px-14 py-4 rounded-md bg-white">Next</button>
                            </div>
            </div>
            </div>
        </div>
        </>
    )
}
export default Login