import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { FaUser, FaLock, FaEye, FaEyeSlash, FaMail } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { MdDateRange } from "react-icons/md";
import axios from "../../network/networkInterceptor";
// import "../Login/login.css";
import "./signup.css";

// function checkForToken() {
//   const token = localStorage.getItem("token");
//   console.log(token);
//   if (token) {
//     // Redirect to dashboard if token is present
//     window.location.href = "/dashboard";
//   }
// }
// ankitmhatre@hotmail.com   test123
const SignUp = () => {
  const navigate = useNavigate();
  useEffect(() => {
    // checkForToken();
  }, []);

  const [email, setEmail] = useState("");
  const [birthDate, setbirthDate] = useState(null);
  const [firstName, setFirstname] = useState("");
  const [lastName, setLastname] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleFirstnameChange = (event) => {
    setFirstname(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastname(event.target.value);
  }

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  }

  const handleBirthdateChange = (event) => {
  setbirthDate(event.target.value);
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Make a POST request to your signup endpoint
      const response = await axios.post("/auth/signup", {
        email,
        password,
        birthDate,
        firstName,
        lastName,
      });

      if (!response) {
        setError("Sign up failed. Please try again")
        //todo: handle error
      } else {
        
        // Extract token from response data
        const token = response.data.token;
        // Save token to localStorage
        console.log(token);
        console.log(response.token);
        // localStorage.setItem("token", token);
        localStorage.setItem("email", email);
        localStorage.setItem("firstName", response.data.firstName);

        navigate("/login");
        // navigate("/dashboard");
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
          <h2>
            Unlock Your Investment Potential with{" "}
            <span className="brand">InvestMate</span>
          </h2>
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
            <h2>Sign up your accout</h2>

            <div className="firstLastnameCon">
              <div className="form-group">
                <label htmlFor="username">First Name</label>
                <div className="input-with-icon">
                  <FaUser className="icon" />
                  <input
                    type="text"
                    id="firstName"
                    value={firstName}
                    onChange={handleFirstnameChange}
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="username">Last Name</label>
                <div className="input-with-icon">
                  {/* <FaUser className="icon" /> */}
                  <input
                    type="text"
                    id="lastName"
                    value={lastName}
                    onChange={handleLastNameChange}
                  />
                </div>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="username">Email</label>
              <div className="input-with-icon">
                <IoMdMail className="icon" />
                <input
                  type="text"
                  id="emailId"
                  value={email}
                  onChange={handleEmailChange}
                />
              </div>
            </div>

            <div className="passDate">
              <div className="form-group">
                <label htmlFor="username">Birth Date</label>
                <div className="input-with-icon">
                  {/* <MdDateRange className="icon" /> */}
                  <input
                    type="date"
                    id="birthDate"
                    value={birthDate}
                    onChange={handleBirthdateChange}
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
              Already have an account? <Link to="/login">Sign In</Link>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
