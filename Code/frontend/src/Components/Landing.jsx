
import React, { useEffect,useState } from "react";
import Navbar from "./Navbar";
import "./landing.css";
import varsityImg from "../assets/zerodhaimg.png";
import Card from "./Card";

import video from "../assets/cards/videos.svg";

import { Link } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";
import setupInterceptors from "../network/networkInterceptor";
import VideoBearBull from "./VideoBearBull";
import {motion} from 'framer-motion'


const Landing = () => {

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500); // Adjust the delay as needed
    return () => clearTimeout(timer);
  }, []);
    

  const token = localStorage.getItem('token');
  console.log(token);


  return (
    <>
    {/* <div>
    <motion.h1 
     initial={{ opacity: 0, x: -50 }}
     animate={{ opacity: 1, x: 0 }}
     transition={{ duration: 1.5 }}
     whileHover={{ scale: 1.1, color: '#0077b6' }}
     whileTap={{ scale: 0.9 }}
    className="BrandName">
      INVESTMATE
      </motion.h1>
      </div> */}
     {/* //////////////////////////////////////////////////////////////////////////////// */}
     <div className="brand-container">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5 }}
          className="BrandName"
        >
          {isVisible && (
            <motion.span
              initial={{ x: -100 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              I
            </motion.span>
          )}
          {isVisible && (
            <motion.span
              initial={{ x: -100 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              N
            </motion.span>
          )}
          {isVisible && (
            <motion.span
              initial={{ x: -100 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              V
            </motion.span>
          )}
          {isVisible && (
            <motion.span
              initial={{ x: -100 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              E
            </motion.span>
          )}
          {isVisible && (
            <motion.span
              initial={{ x: -100 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              S
            </motion.span>
          )}
          {isVisible && (
            <motion.span
              initial={{ x: -100 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              T
            </motion.span>
          )}
          {isVisible && (
            <motion.span
              initial={{ x: -100 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              M
            </motion.span>
          )}
          {isVisible && (
            <motion.span
              initial={{ x: -100 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              A
            </motion.span>
          )}
          {isVisible && (
            <motion.span
              initial={{ x: -100 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              T
            </motion.span>
          )}
          {isVisible && (
            <motion.span
              initial={{ x: -100 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              E
            </motion.span>
          )}
        </motion.div>
      </div>












     {/* ////////////////////////////////////////////////////////////////////////////// */}
      <div className="mainContainer" style={{ visibility: isVisible ? 'visible' : 'hidden' }}>
        <div className="text">
          <h1>Free and Open</h1>
          <h4>stock market and financial education</h4>
          <p>
            Welcome to InvestMate – your ultimate stock market companion! Dive
            into a world of learning and simulation tailored for young minds
            aged 18 to 25. Explore real-time market data, practice trading
            strategies, and master pattern recognition with ease. Join our
            vibrant community and empower yourself with the knowledge and skills
            to navigate the financial world confidently. Start your journey with
            InvestMate today!
          </p>
          <div className="getStarted" style={{ visibility: isVisible ? 'visible' : 'hidden' }}>
       { token ? <Link to='/features'> <span>Get started  </span><FaLongArrowAltRight className="arrowRight" size={'30px'} /></Link> : <Link to='/login'> <span>Get started  </span><FaLongArrowAltRight className="arrowRight" size={'30px'} /></Link> }
      </div>
        </div>
        <div className="videoBearBull">
      <VideoBearBull />
      </div>
        {/* <div className="picture">
          <img src={varsityImg} alt="" />
        </div> */}
      </div>
      
      
    </>
  );
};

export default Landing;




