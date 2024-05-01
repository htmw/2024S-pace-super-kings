import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import "./landing.css";
import varsityImg from "../assets/zerodhaimg.png";
import Card from "./Card";

import video from "../assets/cards/videos.svg";

import { Link } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";
import setupInterceptors from "../network/networkInterceptor";
import VideoBearBull from "./VideoBearBull";
import { motion } from "framer-motion";
import logo from "../assets/images/logo.png";
import heroimg from "../assets/images/hero.gif"

const Landing = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500); // Adjust the delay as needed
    return () => clearTimeout(timer);
  }, []);

  const token = localStorage.getItem("token");
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


      <div style={{ display: "none" }} className="brand-container">
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

      <header
        style={{ "position": "fixed", "width": "100%", "background-color": "white", "z-index": "1000" }}
        id="desktop-header"
        class="header-container false false"
      >
        <a class="logo-text-a  header-logo" href="">
          <img
            class=" undefined"
            src={logo}
            alt="INVESTMATE"
            width="50"
            height="50"
          />
          <p class="logo-text-p  header-logo-title">INVESTMATE</p>
        </a>
        <div class="container_div"></div>
        <div class="container_div  undefined">
          <div class=""></div>
        </div>
        <div class="container_div ">
          <div class="">
            <a class="logo-text-a  header-authbutton" href="/login">
              Sign In / Sing Up
            </a>
          </div>
        </div>
      </header>

      {/* ////////////////////////////////////////////////////////////////////////////// */}






      <div class="container_div  Main-content-wraper">

          <br/>
  
        <div class="container_div  Landing-First-Section-Container">
          <div class="container_div  Landing-First-Section-Content">
            <h2 style={{fontSize:"65px"}} class="text_h2__9Rct5  Landing-First-Section-Heading">AI-powered stock simulator</h2>
            <p class="logo-text-p  Landing-First-Section-Paragraph">Welcome to our trading simulator platform! Practice trading risk-free with our chatbot and chart data analysis. Be constantly aware about your risk index in equity markets with our risk assessment tool and other learning resources.</p><a class="logo-text-a  cta-button" href="/dashboard">Get
              started</a>
          </div>
          <div
            class="container_div  Landing-First-Section-Images-Container">
            <span style={{boxSizing:"border-box", display:"inline-block",overflow:"hidden", width:"initial", height:"initial", background:"none",opacity:"1",border:"0",margin:"0",padding:"0",position:"relative",maxwidth:"100%"}}>
              
              <span
              style={{boxSizing:"border-box;", display:"block", width:"initial",height:"initial",background:"none",opacity:"1",border:"0",margin:"0",padding:"0",maxwidth:"100%"}}>
                
                <img
                style={{display:"block",maxwidth:"100%",width:"initial",height:"initial", background:"none", opacity:"1",border:"0",margin:"0",padding:"0"}}
                alt="" aria-hidden="true"
                src="" /></span>



              <img style={{width: "100%",marginTop: "-2%"}} src={heroimg} />


            </span>
          </div>
        </div>






      </div>



















      <div
        className="mainContainer"
        style={{ visibility: isVisible ? "visible" : "hidden", display:"none"}}
      >
        <div className="text">
          <h1>Free and Open</h1>
          <h4>stock market and financial education</h4>
          <p>
          Welcome to our platform for trading simulators! With the help of our cutting-edge chatbot learning tool and thorough chart data analysis, take your first steps into the trading industry. Gain experience with trading in a risk-free setting and learn from current market data. Become a member of our learning community and set yourself up for success in trading. Now is the time to explore!
          </p>
          <div
            className="getStarted"
            style={{ visibility: isVisible ? "visible" : "hidden" }}
          >
            {token ? (
              <Link to="/features">
                {" "}
                <span> Get started </span>
                <FaLongArrowAltRight className="arrowRight" size={"30px"} />
              </Link>
            ) : (
              <Link to="/login">
                {" "}
                <span>Get started </span>
                <FaLongArrowAltRight className="arrowRight" size={"30px"} />
              </Link>
            )}
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
