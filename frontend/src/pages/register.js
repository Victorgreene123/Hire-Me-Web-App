// import React, { useState } from "react";
// import Navbar from "../components/Navbar";
// import { FaArrowLeft, FaSpinner } from "react-icons/fa";
// import { Link } from "react-router-dom";
// import logo2 from '../Assets/hireme 1_010317.png'
// import logo from '../Assets/hiremelogo.png'
// const Signup = () => {
//     // Form data
//     const [formData, setFormData] = useState({
//         name: "",
//         email: "",
//         phoneNumber: "",
//         streetAddress:"",
//         city: "",
//         postalCode:"",
//         accountnumber:"",
//         bank:""
//     });

//     // Form step state
//     const [currentStep, setCurrentStep] = useState(1);
//     const [loading, setLoading] = useState(false);
//     // Handle input change
//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({ ...formData, [name]: value });
//     };

//     const [agreed, setAgreed] = useState(false);
//    // Initially subscribing to promotions
  
//     const handleAgreeChange = (e) => {
//       setAgreed(e.target.checked);
//     };

//     const handleSubmit = () =>{
//         setLoading(true)
//         setTimeout(() => {
//             setLoading(false); // Stop loading after 3 seconds
//           }, 3000);
         
        
//     }

//     // Handle next button
//     const nextStep = () => {
//         if (currentStep < 4) {
//             setCurrentStep(currentStep + 1);
//         }
//     };

//     // Handle previous button
//     const prevStep = () => {
//         if (currentStep > 1) {
//             setCurrentStep(currentStep - 1);
//         }
//     };

//     // Render form based on current step
//     const renderFormStep = () => {
//         switch (currentStep) {
//             case 1:
//                 return (
//                     <div>
//                         <h2 className="text-2xl font-bold lg:text-3xl">Personal Details</h2>
//                         <p className="text-sm">Please provide your name, email address, and phone number.</p>
//                         <div className="mt-8">
//                             <div className="w-full mb-4">
//                                 <label>Name</label>
//                                 <input
//                                     name="name"
//                                     placeholder="John Doe"
//                                     className="border rounded-md p-3 w-full"
//                                     value={formData.name}
//                                     onChange={handleChange}
//                                 />
//                             </div>
//                             <div className="w-full mb-4">
//                                 <label>Email</label>
//                                 <input
//                                     name="email"
//                                     placeholder="johndoe@gmail.com"
//                                     className="border rounded-md p-3 w-full"
//                                     value={formData.email}
//                                     onChange={handleChange}
//                                 />
//                             </div>
                            
//                         </div>
//                     </div>
//                 );
//             case 2:
//                 return (
//                     <div>
//                         <h2 className="text-2xl font-bold lg:text-3xl">Address Information</h2>
//                         <p className="text-sm">Please provide your residential address details.</p>
//                         <div className="mt-8">
//                         <div className="w-full mb-4">
//                                 <label>WhatsApp Number</label>
//                                 <input
//                                     name="phoneNumber"
//                                     placeholder="081xxxxxxxx"
//                                     className="border rounded-md p-3 w-full"
//                                     value={formData.phoneNumber}
//                                     onChange={handleChange}
//                                 />
//                             </div>
//                             <div className="w-full mb-4">
//                                 <label>Street Address</label>
//                                 <input
//                                     name="streetAddress"
//                                     placeholder="123 Main St"
//                                     className="border rounded-md p-3 w-full"
//                                     value={formData.streetAddress}
//                                     onChange={handleChange}
//                                 />
//                             </div>
//                             <div className="w-full mb-4">
//                                 <label>City</label>
//                                 <input
//                                     name="city"
//                                     placeholder="New York"
//                                     className="border rounded-md p-3 w-full"
//                                     value={formData.city}
//                                     onChange={handleChange}
//                                 />
//                             </div>
                            
//                         </div>
//                     </div>
//                 );
//             case 3:
//                 return (
//                     <div>
//                         <h2 className="text-2xl font-bold lg:text-3xl">Payment Details</h2>
//                         <p className="text-sm">Please provide your payment information.</p>
//                         <div className="mt-8">
//                             <div className="w-full mb-4">
//                                 <label>Account Number</label>
//                                 <input
//                                     name="accountnumber"
//                                     placeholder="1234 5678 9012 3456"
//                                     className="border rounded-md p-3 w-full"
//                                     value={formData.accountnumber}
//                                     onChange={handleChange}
//                                 />
//                             </div>
//                             <div className="w-full mb-4">
//                                 <label>Bank</label>
//                                 <input
//                                     name="bank"
//                                     placeholder="GTBANk"
//                                     className="border rounded-md p-3 w-full"
//                                     value={formData.bank}
//                                     onChange={handleChange}
//                                 />
//                             </div>
                            
//                         </div>
//                     </div>
//                 );
//             case 4:
//                 return (
//                     <div className="mt-24 mb-12">
//                         <input type="checkbox"  checked={agreed} 
//               onChange={handleAgreeChange} ></input>
//                         <label>By continuing, you agree to Hireme Company’s Terms of Use and Privacy Policy.</label>   
                        
//                     </div>
//                 );
//             default:
//                 return null;
//         }
//     };
    

//     return (
//         <>
// <Link to='/' className="hidden lg:block"> <div className="flex items-center p-3 border">
//         <FaArrowLeft className="mr-6" />
//         <h2 className="text-[1.1rem]">Go home</h2>
//       </div></Link>
//             <div className="relative bg-[#EFF5FF] h-[100vh] pb-4 lg:pt-10" >
                
//                 <div className="lg:relative lg:rounded-md lg:flex lg:bg-white  relative mx-auto lg:w-[65%] w-full lg:h-[85vh] ">
//                     {/* Step indicator */}
//                     <div className="hero h-64 lg:h-auto lg:w-[30%] lg:rounded-md bg-white w-full  pt-5">
//                    <Link to='/'> <div className="lg:hidden flex  gap-2 items-center text-white mb-2 p-2">
//                     <FaArrowLeft />
//                     <h2>Back to home</h2>
//                 </div></Link>
//                 <img
//             src={logo2}
//             alt="Logo"
//             className="hidden lg:flex bg-[#EFF5FF] border-[#EFF5FF] w-24 h-auto mx-auto rounded-full object-cover border"
//           />
//           <img
//             src={logo}
//             alt="Logo"
//             className="flex lg:hidden  w-32 h-auto mx-auto  "
//           />


//                         <div className="lg:block lg:items-center lg:p-6 lg:w-full flex gap-3 w-5/6 justify-center mx-auto ">
//                             {/* Step progress UI */}
//                             <div className="lg:flex gap-2 mb-4 ">
//                                 <div className={`lg:mb-4 h-8 w-8 lg:h-10 lg:w-10 rounded-full p-1 bg-${currentStep == 1 ? '[#EFF5FF]' : 'transparent border text-white'} flex`}>
//                                     <h2 className="text-1xl lg:text-2xl justify-center font-bold mx-auto">1</h2>
//                                 </div>
//                                 <div className="hidden text-sm mt-1 lg:block leading-tight text-white">
//                                     <h2>STEP 1</h2>
//                                     <h2>YOUR INFO</h2>
//                                 </div>
//                             </div>

//                             <div className="lg:flex gap-2 mb-4">
//                                 <div className={`lg:mb-4 h-8 w-8 lg:h-10 lg:w-10 rounded-full p-1 bg-${currentStep == 2 ? '[#EFF5FF]' : 'transparent border text-white'} flex`}>
//                                     <h2 className="text-1xl lg:text-2xl justify-center font-bold mx-auto">2</h2>
//                                 </div>
//                                 <div className="hidden text-sm mt-1 lg:block leading-tight text-white">
//                                     <h2>STEP 2</h2>
//                                     <h2>Billing details</h2>
//                                 </div>
//                             </div>

//                             <div className="lg:flex gap-2 mb-4">
//                                 <div className={`lg:mb-4 h-8 w-8 lg:h-10 lg:w-10 rounded-full p-1 bg-${currentStep == 3 ? '[#EFF5FF]' : 'transparent border text-white'} flex`}>
//                                     <h2 className="text-1xl lg:text-2xl justify-center font-bold mx-auto">3</h2>
//                                 </div>
//                                 <div className="hidden text-sm mt-1 lg:block leading-tight text-white">
//                                     <h2>STEP 3</h2>
//                                     <h2>Payment information</h2>
//                                 </div>
//                             </div>

//                             <div className="lg:flex gap-2 mb-4">
//                                 <div className={`lg:mb-4 h-8 w-8 lg:h-10 lg:w-10 rounded-full p-1 bg-${currentStep == 4 ? '[#EFF5FF]' : 'transparent border text-white'} flex`}>
//                                     <h2 className="text-1xl lg:text-2xl justify-center font-bold mx-auto">4</h2>
//                                 </div>
//                                 <div className="hidden text-sm mt-1 lg:block leading-tight text-white">
//                                     <h2>STEP 4</h2>
//                                     <h2>Finish</h2>
//                                 </div>
//                             </div>

                           
//                             {/* Add more steps */}
//                         </div>
//                     </div>

//                     {/* Form content */}
//                     <div className="lg:overflow-y-auto lg:static absolute top-40 mx-auto left-[5%] bg-white w-[90%] lg:w-[60%] lg:h-full rounded-lg px-4 py-7">
                        
//                         {renderFormStep()}

//                         {/* Navigation Buttons */}
//                         <div className="lg:static bottom-0 lg:block hidden mx-auto w-full p-2">
//                             <div className="flex justify-between">
//                               {currentStep > 1 &&  <button onClick={prevStep} className="border px-14 py-4 rounded-md bg-white">Previous</button>}
//                                 <button onClick={currentStep == 4 ? handleSubmit : nextStep} className="border px-14 py-4 rounded-md text-white bg-[#340352]">{currentStep == 4 ? loading ? <FaSpinner className="spinner-icon" /> :"Submit" : "Next"}</button>
//                             </div>
//                         </div>
//                     </div>

//                     {/* Mobile Nav Buttons */}
//                     <div className="lg:hidden fixed bottom-0 mx-auto bg-[#340352] w-full p-4">
//                     <div className="flex justify-between">
//                               {currentStep > 1 &&  <button onClick={prevStep} className="border px-14 py-4 rounded-md bg-white">Previous</button>}
//                                 <button onClick={currentStep == 4 ? handleSubmit : nextStep} className="border px-14 py-4 rounded-md text-white bg-[#340352]">{currentStep == 4 ? loading ? <FaSpinner className="spinner-icon" /> : "Submit" : "Next"}</button>
//                             </div>
//                     </div>
//                 </div>
//                 <p className="text-center">Already have an account ?<Link className="text-[#340352]" to="/login">Login</Link>  </p>

//             </div>
//         </>
//     );
// };

// export default Signup;


import React, { useState } from "react";
import { FaArrowLeft, FaSpinner, FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import logo2 from '../Assets/hireme 1_010317.png';
import logo from '../Assets/hiremelogo.png';

const Signup = () => {
    const navigate = useNavigate();
    // Form data
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    // State for password validation, loading, and visibility toggling
    const [agreed, setAgreed] = useState(false);
    const [passwordError, setPasswordError] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const [message , setMessage] = useState('')
    const [success , setSuccess] = useState(null)

    // Handle input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Handle agree checkbox
    const handleAgreeChange = (e) => {
        setAgreed(e.target.checked);
    };

    // Toggle password visibility
    const toggleShowPassword = () => setShowPassword((prev) => !prev);
    const toggleShowConfirmPassword = () => setShowConfirmPassword((prev) => !prev);

    // Validate password requirements
    const validatePassword = () => {
        const { password, confirmPassword } = formData;
        const passwordRegex = /^(?=.*[!@#$%^&*])(?=.*\d).{8,}$/;

        if (!passwordRegex.test(password)) {
            setPasswordError("Password must be at least 8 characters, include a symbol and a number.");
            return false;
        } else {
            setPasswordError("");
        }

        if (password !== confirmPassword) {
            setConfirmPasswordError("Passwords do not match.");
            return false;
        } else {
            setConfirmPasswordError("");
        }

        return true;
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        // if (validatePassword() && agreed) {
        //     setLoading(true);
        //     setTimeout(() => {
        //         setLoading(false); // Stop loading after 3 seconds
        //         // Handle successful signup logic here
        //     }, 3000);
        // }

        if (validatePassword() && agreed) {
            setLoading(true);
    
            try {
                const response = await fetch("http://192.168.43.223:8000/api/users/", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(formData)
                });
    
                const data = await response.json();
    
                if (response.ok ) {
                    // Handle success (e.g., navigate to a success page or show a success message)
                    setSuccess(true)
                    setMessage(data.message)
                    setTimeout(() => {
                                navigate('/login') // Stop loading after 3 seconds
                                // Handle successful signup logic here
                            }, 1500);

                } else {
                    // Handle error response
                    setSuccess(false)
                    setMessage(data.message)
                    
                     // Optional: show an alert with the error message
                }
            } catch (error) {
                setSuccess(false)
                setMessage("An error occurred. Please try again.")
                   
                
                alert("An error occurred. Please try again."); // Optional: show an alert on network error
            } finally {
                
                setLoading(false); // Stop loading regardless of success or failure
            }
        }


    };

    return (
        <>
            <Link to='/' className="hidden lg:block">
                <div className="flex items-center p-3 border">
                    <FaArrowLeft className="mr-6" />
                    <h2 className="text-[1.1rem]">Go home</h2>
                </div>
            </Link>
            <div className="relative bg-[#EFF5FF] h-[100vh] pb-4 lg:pt-10">
                <div className="lg:relative lg:rounded-md lg:flex lg:bg-white relative mx-auto lg:w-[65%] w-full lg:h-[85vh] ">
                    <div className="hero h-64 lg:h-auto lg:w-[30%] lg:rounded-md bg-white w-full pt-5">
                        <img src={logo2} alt="Logo" className="hidden lg:flex bg-[#EFF5FF] border-[#EFF5FF] w-24 h-auto mx-auto rounded-full object-cover border" />
                        <img src={logo} alt="Logo" className="flex lg:hidden w-32 h-auto mx-auto" />
                    </div>
                    <div className="lg:overflow-y-auto lg:static absolute top-40 mx-auto left-[5%] bg-white w-[90%] lg:w-[60%] lg:h-full rounded-lg px-4 py-7">
                        <h2 className="text-2xl font-bold lg:text-3xl">Create Account</h2>
                        {
                        message &&
                        <p className={`text-1xl ${success ? "text-green-400" : "text-red-500"}`}>{message} {success ? "You will be redirected soon" : ""}</p>
                        }
                        <form onSubmit={handleSubmit} className="mt-8">
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
                            <div className="w-full mb-4 relative">
                                <label>Password</label>
                                <input
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    placeholder="********"
                                    className="border rounded-md p-3 w-full"
                                    value={formData.password}
                                    onChange={handleChange}
                                />
                                <span onClick={toggleShowPassword} className="absolute top-10 right-4 cursor-pointer">
                                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                                </span>
                                {passwordError && <p className="text-red-500 text-sm">{passwordError}</p>}
                            </div>
                            <div className="w-full mb-4 relative">
                                <label>Confirm Password</label>
                                <input
                                    type={showConfirmPassword ? "text" : "password"}
                                    name="confirmPassword"
                                    placeholder="********"
                                    className="border rounded-md p-3 w-full"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                />
                                <span onClick={toggleShowConfirmPassword} className="absolute top-10 right-4 cursor-pointer">
                                    {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                                </span>
                                {confirmPasswordError && <p className="text-red-500 text-sm">{confirmPasswordError}</p>}
                            </div>
                            <div className="w-full mb-4">
                                <input type="checkbox" checked={agreed} onChange={handleAgreeChange} />
                                <label className="ml-2">I agree to the Terms of Use and Privacy Policy.</label>
                            </div>
                            <button
                                type="submit"
                                className="w-full flex justify-center py-3 rounded-md text-white bg-[#340352]"
                                disabled={!agreed || loading}
                            >
                                {loading ? <FaSpinner className="spinner-icon" /> : "Sign Up"}
                            </button>
                        </form>
                        <p className="text-center mt-4">Already have an account? <Link className="text-[#340352]" to="/login">Login</Link></p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Signup;

