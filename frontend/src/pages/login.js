import React, { useEffect, useState } from "react";
import { FaArrowLeft, FaEye, FaEyeSlash, FaSpinner } from "react-icons/fa";
import logo from '../Assets/hireme 1_010317.png';
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/Authcontext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { login, error, loading, isAuthenticated, user } = useAuth();
  const navigate = useNavigate();
  useEffect(() =>{
    if (isAuthenticated){
      console.log(isAuthenticated)
      navigate('/dashboard')
      
    }
  })
 
  

  // Function to toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = () =>{
    const payload = {
        email: email,
        password : password
    }
    login(payload);
    
}
  return (
    <>
      {/* Back to Home Button */}
     <Link to='/'> <div className="flex items-center p-3 border">
        <FaArrowLeft className="mr-6" />
        <h2 className="text-[1.1rem]">Go home</h2>
      </div></Link>

      {/* Login Form */}
      <div className="p-2">
        <div className="w-full p-2 lg:w-2/5 mx-auto bg-[]">
          {/* Logo */}
          <img
            src={logo}
            alt="Logo"
            className="bg-[#EFF5FF] border-[#EFF5FF] w-24 h-auto mx-auto rounded-full object-cover border"
          />
          <div className="text-center">
            <h1 className="text-[1.4rem] font-semibold mb-1">Welcome Back!</h1>
            <p>Enter your email and password to login to your account</p>

            {/* Input Fields */}
            <div className="mt-12">
              {/* Email Input */}
        
              <input
                placeholder="Email"
                type="email"
                className="p-3 w-full rounded-sm border mb-10"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              {/* Password Input with Show/Hide Feature */}
              <div className="relative mb-10">
                <input
                  placeholder="Password"
                  type={showPassword ? "text" : "password"}
                  className="p-3 w-full rounded-sm border "
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {/* Toggle Button for Show/Hide Password */}
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute right-3 top-3 text-gray-500 focus:outline-none"
                >
                  {showPassword ? <FaEyeSlash className="w-12"/> : <FaEye className="w-12"/>}
                </button>
              </div>
            </div>

            <Link className="text-[#340352] text-right">Forgot Password</Link>
            <button className="w-full border rounded-md py-4 bg-[#340352] text-white text-[1.2rem]" onClick={handleSubmit}>{loading ? <FaSpinner className="spinner-icon  mx-auto" /> : "Login"}</button>

          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
