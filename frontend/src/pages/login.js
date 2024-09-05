import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
    // Form data
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phoneNumber: "",
        streetAddress:"",
        city: "",
        postalCode:"",
        accountnumber:"",
        bank:""
    });

    // Form step state
    const [currentStep, setCurrentStep] = useState(1);

    // Handle input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    const handleSubmit = () =>{
        alert("form submitted")
    }

    // Handle next button
    const nextStep = () => {
        if (currentStep < 4) {
            setCurrentStep(currentStep + 1);
        }
    };

    // Handle previous button
    const prevStep = () => {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1);
        }
    };

    // Render form based on current step
    const renderFormStep = () => {
        switch (currentStep) {
            case 1:
                return (
                    <div>
                        <h2 className="text-2xl font-bold lg:text-3xl">Personal Details</h2>
                        <p className="text-sm">Please provide your name, email address, and phone number.</p>
                        <div className="mt-8">
                            <div className="w-full mb-4">
                                <label>Name</label>
                                <input
                                    name="name"
                                    placeholder="John Doe"
                                    className="border rounded-md p-3 w-full"
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="w-full mb-4">
                                <label>Email</label>
                                <input
                                    name="email"
                                    placeholder="johndoe@gmail.com"
                                    className="border rounded-md p-3 w-full"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="w-full mb-4">
                                <label>Phone Number</label>
                                <input
                                    name="phoneNumber"
                                    placeholder="081xxxxxxxx"
                                    className="border rounded-md p-3 w-full"
                                    value={formData.phoneNumber}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                    </div>
                );
            case 2:
                return (
                    <div>
                        <h2 className="text-2xl font-bold lg:text-3xl">Address Information</h2>
                        <p className="text-sm">Please provide your residential address details.</p>
                        <div className="mt-8">
                            <div className="w-full mb-4">
                                <label>Street Address</label>
                                <input
                                    name="streetAddress"
                                    placeholder="123 Main St"
                                    className="border rounded-md p-3 w-full"
                                    value={formData.streetAddress}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="w-full mb-4">
                                <label>City</label>
                                <input
                                    name="city"
                                    placeholder="New York"
                                    className="border rounded-md p-3 w-full"
                                    value={formData.city}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="w-full mb-4">
                                <label>Postal Code</label>
                                <input
                                    name="postalCode"
                                    placeholder="10001"
                                    className="border rounded-md p-3 w-full"
                                    value={formData.postalCode}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                    </div>
                );
            case 3:
                return (
                    <div>
                        <h2 className="text-2xl font-bold lg:text-3xl">Payment Details</h2>
                        <p className="text-sm">Please provide your payment information.</p>
                        <div className="mt-8">
                            <div className="w-full mb-4">
                                <label>Account Number</label>
                                <input
                                    name="accountnumber"
                                    placeholder="1234 5678 9012 3456"
                                    className="border rounded-md p-3 w-full"
                                    value={formData.accountnumber}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="w-full mb-4">
                                <label>Bank</label>
                                <input
                                    name="bank"
                                    placeholder="GTBANk"
                                    className="border rounded-md p-3 w-full"
                                    value={formData.bank}
                                    onChange={handleChange}
                                />
                            </div>
                            
                        </div>
                    </div>
                );
            case 4:
                return (
                    <div>
                        <h2 className="text-2xl font-bold lg:text-3xl">Review and Submit</h2>
                        <p className="text-sm">Please review the information below before submitting.</p>
                        <div className="mt-8">
                            <h3 className="text-lg font-semibold">Personal Details:</h3>
                            <p>Name: {formData.name}</p>
                            <p>Email: {formData.email}</p>
                            <p>Phone Number: {formData.phoneNumber}</p>
    
                            <h3 className="text-lg font-semibold mt-4">Address Information:</h3>
                            <p>Street Address: {formData.streetAddress}</p>
                            <p>City: {formData.city}</p>
                            <p>Postal Code: {formData.postalCode}</p>
    
                            <h3 className="text-lg font-semibold mt-4">Payment information:</h3>
                            <p>Account Number:{formData.accountnumber}</p>
                            <p>Bank: {formData.bank}</p>
    
                           
                        </div>
                    </div>
                );
            default:
                return null;
        }
    };
    

    return (
        <>
            <div className="relative bg-[#EFF5FF] h-[100vh] pb-4">
                
                <div className="lg:relative lg:flex lg:bg-white lg:p-2 relative mx-auto lg:w-[65%] w-full lg:h-[85vh] ">
                    {/* Step indicator */}
                    <div className="hero h-64 lg:h-auto lg:w-[30%] lg:rounded-md bg-white w-full  pt-5">
                   <Link to='/'> <div className="flex  gap-2 items-center text-white mb-2 p-2">
                    <FaArrowLeft />
                    <h2>Back to home</h2>
                </div></Link>
                        <div className="lg:block lg:items-center lg:p-6 lg:w-full flex gap-3 w-5/6 justify-center mx-auto ">
                            {/* Step progress UI */}
                            <div className="lg:flex gap-2 mb-4 ">
                                <div className={`lg:mb-4 h-8 w-8 lg:h-10 lg:w-10 rounded-full p-1 bg-${currentStep == 1 ? '[#EFF5FF]' : 'transparent border text-white'} flex`}>
                                    <h2 className="text-1xl lg:text-2xl justify-center font-bold mx-auto">1</h2>
                                </div>
                                <div className="hidden text-sm mt-1 lg:block leading-tight text-white">
                                    <h2>STEP 1</h2>
                                    <h2>YOUR INFO</h2>
                                </div>
                            </div>

                            <div className="lg:flex gap-2 mb-4">
                                <div className={`lg:mb-4 h-8 w-8 lg:h-10 lg:w-10 rounded-full p-1 bg-${currentStep == 2 ? '[#EFF5FF]' : 'transparent border text-white'} flex`}>
                                    <h2 className="text-1xl lg:text-2xl justify-center font-bold mx-auto">2</h2>
                                </div>
                                <div className="hidden text-sm mt-1 lg:block leading-tight text-white">
                                    <h2>STEP 2</h2>
                                    <h2>YOUR INFO</h2>
                                </div>
                            </div>

                            <div className="lg:flex gap-2 mb-4">
                                <div className={`lg:mb-4 h-8 w-8 lg:h-10 lg:w-10 rounded-full p-1 bg-${currentStep == 3 ? '[#EFF5FF]' : 'transparent border text-white'} flex`}>
                                    <h2 className="text-1xl lg:text-2xl justify-center font-bold mx-auto">3</h2>
                                </div>
                                <div className="hidden text-sm mt-1 lg:block leading-tight text-white">
                                    <h2>STEP 3</h2>
                                    <h2>YOUR INFO</h2>
                                </div>
                            </div>

                            <div className="lg:flex gap-2 mb-4">
                                <div className={`lg:mb-4 h-8 w-8 lg:h-10 lg:w-10 rounded-full p-1 bg-${currentStep == 4 ? '[#EFF5FF]' : 'transparent border text-white'} flex`}>
                                    <h2 className="text-1xl lg:text-2xl justify-center font-bold mx-auto">4</h2>
                                </div>
                                <div className="hidden text-sm mt-1 lg:block leading-tight text-white">
                                    <h2>STEP 4</h2>
                                    <h2>YOUR INFO</h2>
                                </div>
                            </div>

                           
                            {/* Add more steps */}
                        </div>
                    </div>

                    {/* Form content */}
                    <div className="lg:overflow-y-auto lg:static absolute top-32 mx-auto left-[5%] bg-white w-[90%] lg:w-[60%] lg:h-full rounded-lg px-4 py-7">
                        {renderFormStep()}

                        {/* Navigation Buttons */}
                        <div className="lg:static bottom-0 lg:block hidden mx-auto w-full p-2">
                            <div className="flex justify-between">
                              {currentStep > 1 &&  <button onClick={prevStep} className="border px-14 py-4 rounded-md bg-white">Previous</button>}
                                <button onClick={currentStep == 4 ? handleSubmit : nextStep} className="border px-14 py-4 rounded-md text-white bg-[#340352]">{currentStep == 4 ? "Submit" : "Next"}</button>
                            </div>
                        </div>
                    </div>

                    {/* Mobile Nav Buttons */}
                    <div className="lg:hidden fixed bottom-0 mx-auto bg-[#340352] w-full p-4">
                    <div className="flex justify-between">
                              {currentStep > 1 &&  <button onClick={prevStep} className="border px-14 py-4 rounded-md bg-white">Previous</button>}
                                <button onClick={currentStep == 4 ? handleSubmit : nextStep} className="border px-14 py-4 rounded-md text-white bg-[#340352]">{currentStep == 4 ? "Submit" : "Next"}</button>
                            </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;