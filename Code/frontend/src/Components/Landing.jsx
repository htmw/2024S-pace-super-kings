
import React, { useEffect } from "react";
import Navbar from "./Navbar";
import "./landing.css";
import varsityImg from "../assets/zerodhaimg.png";
import Card from "./Card";
import module from "../assets/cards/modules.svg";
import video from "../assets/cards/videos.svg";
import certified from "../assets/cards/certified.svg";
import live from "../assets/cards/live.svg";
import finance from "../assets/cards/finance.svg";
import { Link } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";
import setupInterceptors from "../network/networkInterceptor";


const Landing = () => {


    
  return (
    <>
      <Navbar />
      <div className="mainContainer">
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
        </div>
        <div className="picture">
          <img src={varsityImg} alt="" />
        </div>
      </div>
      <div className="getStarted">
       <Link to='/dashboard'> <span>Get started  </span><FaLongArrowAltRight className="arrowRight" size={'30px'} /></Link>
      </div>
      <div className="explore-section">
        <div className="exploreSecHead">
          <span>Explore InvestMate</span>
        </div>
        <div className="cards">
          <Card
            imageUrl={module}
            heading="Learn"
            imageSize="2rem"
            upperContainerColor="#77b4f2"
            link="/module-page"
          />
       
         

          <Card
            imageUrl={certified}
            heading="Stock Simulator"
            upperContainerColor="#b6adf4"
            link="/trading"
          />
          
          <Card
            imageUrl={finance}
            heading="Risk Calculator"
            upperContainerColor="#a5cc65"
            link="/live-details"
          />
        </div>
      </div>
    </>
  );
};

export default Landing;
