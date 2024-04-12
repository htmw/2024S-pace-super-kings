import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { FaUser, FaLock, FaEye, FaEyeSlash, FaMail } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { MdDateRange } from "react-icons/md";
import axios from "axios";
// import "../Login/login.css";
import './signup.css';


function checkForToken() {
    const token = localStorage.getItem("token");
    if (token) {
      // Redirect to dashboard if token is present
      window.location.href = "/dashboard";
    }
  }

const SignUp = () => {


    const navigate = useNavigate();
    useEffect(() => {
      checkForToken();
    }, []);
  
    const [email, setEmail] = useState("maniChandanaKillaru@gmail.com");
    const [birthDate, setbirthDate] = useState(null);
    const [firstName, setFirstname] = useState("");
    const [lastName, setLastname] = useState("");




    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
  
    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };
  
    const handleUsernameChange = (event) => {
      setEmail(event.target.value);
    };
  
    const handlePasswordChange = (event) => {
      setPassword(event.target.value);
    };
  
    const handleSubmit = async (event) => {
      event.preventDefault();
  
      try {
        // Make a POST request to your login endpoint
        const response = await axios.post("/auth/signup", {
           email,
           password,
          birthDate,
          firstName,
          lastName
        });
  
        if(!response){
          return null;
          //todo: handle error
        }else{
        // Extract token from response data
        const token = response.data.token;
  
        // Save token to localStorage
        localStorage.setItem("token", token);
        localStorage.setItem("email", email);
        navigate("/trading");
        }
        // Redirect or perform other actions after successful login
      } catch (error) {
        console.log(error);
        if (error) {
          // Handle login errors
          setError(error.response.data.message);
        } // Assuming error message is provided in the response
      }
    };


  return (
    <>
    <div className="loginMain-Container">
      <div className="animatedGraph">
       
        <h2>Unlock Your Investment Potential with <span className="brand">InvestMate</span></h2>
        <h5>Start Your Journey to stock market Mastery</h5>
        <p>
            Discover the world of stock market investing with InvestMate. Gain
            access to comprehensive learning modules, advanced trading
            strategies, risk management tools, and an AI-powered chatbot
            designed to enhance your knowledge and guide your investment
            decisions. Sign up now to unlock a wealth of resources and embark on
            your path to financial success.
        </p>
      </div>
      <div className="login-container">
         
         <form onSubmit={handleSubmit} className="login-form">
         {/* <h2>Welcome Back!</h2> */}
         <h2>Sign into your accout</h2>
         
         <div className="firstLastnameCon">
         <div className="form-group">
             <label htmlFor="username">First Name</label>
             <div className="input-with-icon">
               <FaUser className="icon" />
               <input
                 type="text"
                 id="username"
                 value={firstName}
                 onChange={handleUsernameChange}
               />
             </div>
           </div>
           <div className="form-group">
             <label htmlFor="username">Last Name</label>
             <div className="input-with-icon">
               {/* <FaUser className="icon" /> */}
               <input
                 type="text"
                 id="username"
                 value={lastName}
                 onChange={handleUsernameChange}
               />
             </div>
           </div>
         </div>
          
          
           <div className="form-group">
             <label htmlFor="username">Email</label>
             <div className="input-with-icon">
               <IoMdMail  className="icon" />
               <input
                 type="text"
                 id="username"
                 value={email}
                 onChange={handleUsernameChange}
               />
             </div>
           </div>

           <div className="passDate">
           <div className="form-group">
             <label htmlFor="username">Birth Date</label>
             <div className="input-with-icon">
               <MdDateRange className="icon" />
               <input
                 type="text"
                 id="username"
                 value={email}
                 onChange={handleUsernameChange}
               />
             </div>
           </div>

           <div className="form-group">
             <label htmlFor="password">Password</label>
             <div className="input-with-icon">
               <FaLock className="icon" />
               <input
                 type={showPassword ? "text" : "password"}
                 id="password"
                 value={password}
                 onChange={handlePasswordChange}
               />
               <div className="password-toggle">
                 {!showPassword ? (
                   <FaEyeSlash
                     className="eye-icon"
                     onClick={togglePasswordVisibility}
                   />
                 ) : (
                   <FaEye
                     className="eye-icon"
                     onClick={togglePasswordVisibility}
                   />
                 )}
               </div>
             </div>
           </div>
           </div>
           

           <button type="submit" className="login-btn">
             Sign Up
           </button>
           {error && <div className="error">{error}</div>}
         </form>

         {/* <div className="forgetPass"><Link> <span>Forget Password ?</span></Link> </div> */}
         <div className="signupLink">
           <span>
             Already have an account? <Link to="/signup">Sign In</Link>
           </span>
         </div>
       </div>
       </div>
    </>
  );
};

export default SignUp;
