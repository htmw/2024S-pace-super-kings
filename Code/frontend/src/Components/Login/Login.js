// Login.js

import React, { useEffect, useState } from 'react';
import './login.css'; // Import CSS file for styles
import axios from 'axios';
import { loginEndpoint } from '../../variables';
import{useNavigate} from 'react-router-dom'

function checkForToken() {
    const token = localStorage.getItem('token');
    if (token) {
      // Redirect to dashboard if token is present
      window.location.href = '/dashboard';
    }
  }

const Login = () => {

const navigate =  useNavigate();
useEffect(()=>{
    checkForToken()
},[])




  const [email, setEmail] = useState('ankitmhatre@hotmail.com');
  const [password, setPassword] = useState('test123');
  const [error, setError] = useState('');


  
  const handleUsernameChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit =async (event) => {
    event.preventDefault();



    try {
        // Make a POST request to your login endpoint
        const response = await axios.post('/auth/login', {
          email,
          password
        });
        
  
        // Extract token from response data
        const token = response.data.token;
  
        // Save token to localStorage
        localStorage.setItem('token', token);
        localStorage.setItem('email',email );
        navigate('/trading')
  
        // Redirect or perform other actions after successful login
      } catch (error) {
        console.log(error)
        if(error){

        // Handle login errors
        setError(error.response.data.message);
        } // Assuming error message is provided in the response
      }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <div className="form-group">
          <label>Username:</label>
          <input type="text" value={email} onChange={handleUsernameChange} />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input type="password" value={password} onChange={handlePasswordChange} />
        </div>
        <button type="submit" className="login-btn">Login</button>
        {error && <div className="error">{error}</div>}
      </form>
    </div>
  );
};

export default Login;
