// // Login.js

// import React, { useEffect, useState } from 'react';
// import './login.css'; // Import CSS file for styles
// import axios from 'axios';
// import { loginEndpoint } from '../../variables';
// import{useNavigate} from 'react-router-dom'

// function checkForToken() {
//     const token = localStorage.getItem('token');
//     if (token) {
//       // Redirect to dashboard if token is present
//       window.location.href = '/dashboard';
//     }
//   }

// const Login = () => {

// const navigate =  useNavigate();
// useEffect(()=>{
//     checkForToken()
// },[])




//   const [email, setEmail] = useState('ankitmhatre@hotmail.com');
//   const [password, setPassword] = useState('test123');
//   const [error, setError] = useState('');


  
//   const handleUsernameChange = (event) => {
//     setEmail(event.target.value);
//   };

//   const handlePasswordChange = (event) => {
//     setPassword(event.target.value);
//   };

//   const handleSubmit =async (event) => {
//     event.preventDefault();



//     try {
//         // Make a POST request to your login endpoint
//         const response = await axios.post('/auth/login', {
//           email,
//           password
//         });
        
  
//         // Extract token from response data
//         const token = response.data.token;
  
//         // Save token to localStorage
//         localStorage.setItem('token', token);
//         localStorage.setItem('email',email );
//         navigate('/dashboard/simulator')
  
//         // Redirect or perform other actions after successful login
//       } catch (error) {
//         console.log(error)
//         if(error){

//         // Handle login errors
//         setError(error.response.data.message);
//         } // Assuming error message is provided in the response
//       }
//   };

//   return (
//     <div className="login-container">
//       <h2>Login</h2>
//       <form onSubmit={handleSubmit} className="login-form">
//         <div className="form-group">
//           <label>Username:</label>
//           <input type="text" value={email} onChange={handleUsernameChange} />
//         </div>
//         <div className="form-group">
//           <label>Password:</label>
//           <input type="password" value={password} onChange={handlePasswordChange} />
//         </div>
//         <button type="submit" className="login-btn">Login</button>
//         {error && <div className="error">{error}</div>}
//       </form>
//     </div>
//   );
// };

// export default Login;




// Login.js

import React, { useEffect, useState } from "react";
import "./login.css"; // Import CSS file for styles
import axios from "../../network/networkInterceptor";
import { loginEndpoint } from "../../variables";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaUser, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

function checkForToken() {
  const token = localStorage.getItem("token");
  if (token) {
    // Redirect to dashboard if token is present
    window.location.href = "/dashboard";
  }
}

const Login = () => {
  const navigate = useNavigate();
  useEffect(() => {
    checkForToken();
  }, []);
  
  const [email, setEmail] = useState("ankitmhatre@hotmail.com");
  // const [email, setEmail] = useState("");
  const [password, setPassword] = useState("test123");
  // const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {

        // Make a POST request to your login endpoint
        const response = await axios.post('/auth/login', {
          email,
          password
        });
        if(!response.data){
          setError(error.response.data.message);
        }else{


  
        // Extract token from response data
        const {token, data} = response.data;
  
        // Save token to localStorage
        localStorage.setItem('token', token);
        localStorage.setItem('email',data.email );
        localStorage.setItem('firstName', data.firstName);
        navigate('/features');

        console.log(token);
  
        // Redirect or perform other actions after successful login}}
        }
      } catch (error) {
        console.log(error)
        if(error){
        // Handle login errors
        setError(error.response.data.message);
      } // Assuming error message is provided in the response
    }
  };

  return (
    <>
      <div className="loginMain-Container">
        <div className="animatedGraph">
        
        <h2>
          Welcome Back to <span className="brand">InvestMate</span>
        </h2>
          
          
          <h5>Your gateway to financial empowerment</h5>
          <p>
          Sign in to your InvestMate account and continue your journey towards
          financial empowerment. With InvestMate, you can explore learning
          modules, analyze stocks, utilize risk management tools, and interact
          with our AI-powered chatbot to enhance your investment strategies.
          Join our community of learners and investors today.
          </p>
        </div>

        <div className="login-container">
         
          <form onSubmit={handleSubmit} className="login-form">
          <h2>Welcome Back!</h2>
          <p>Sign into your accout</p>
            <div className="form-group">
              <label htmlFor="username">Email</label>
              <div className="input-with-icon">
                <IoMdMail className="icon" />
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={handleEmailChange}
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
            <button type="submit" className="login-btn">
              Login
            </button>
            {error && <div className="error">{error}</div>}
          </form>

          <div className="forgetPass"><Link> <span>Forget Password ?</span></Link> </div>
          <div className="signupLink">
            <span>
              Don't have an account? <Link to="/signup">Sign Up</Link>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
