// networkInterceptor.js

import axios from 'axios';
import { base } from '../variables';








  const axiosHandler = axios.create({
    baseURL: base,
    headers: {
      Accept: "application/json",
    },
  });


  axios.defaults.baseURL = base // Set your default endpoint



  // Add a request interceptor
  axiosHandler.interceptors.request.use(
    (config) => {
      // Modify request config here (e.g., add headers, handle authentication)
      // Example: add an authorization header with a token
      const token = localStorage.getItem('token');
      
      if (token) {
        config.headers.authorization = `${token}`;
           }
      return config;
    },
    (error) => {
      // Handle request errors
      return Promise.reject(error);
    }
  );

  // Add a response interceptor
  axiosHandler.interceptors.response.use(
    (response) => {
      // Handle successful responses
      return response;
    },
    (error) => {
      // Handle response errors
      // Example: handle unauthorized errors (e.g., redirect to login page)
      if (error.response && error.response.status === 401) {
        // Redirect to login page
        //window.location.href = '/login';
      }
      return Promise.reject(error);
    }
  );

export default axiosHandler;