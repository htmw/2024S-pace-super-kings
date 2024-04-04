
import PropTypes from "prop-types";
// import Hamburger from "../data/images/hamburger.svg";
import "./nav.css";
import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {

    const [click, setClick] = useState(false);
    const handleClick = () => {
      setClick(!click);
    }
  
    const token = localStorage.getItem('token');

    
    return (
      <div className="navbar">
        <div className="logo">
            <div className="img"></div>
            <div className="name"><span style={{fontWeight:'700',fontSize:'1.5rem',color:"#ff8773"}}>InvestMate</span></div>
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          {/* <li>
            <Link to="/dashboard"></Link>
          </li> */}
          {/* <li>
            {" "}
            <Link to="/learningModules">Modules</Link>{" "}

          </li>
          */}
          {token ? (
            <span onClick={handleLogout}>Signout</span>
             
            ) : (
              <Link to="/login">Signup / Login</Link>
            )}

          {/* <li>
            <Link to="/contact">Contact</Link>
          </li> */}
        </ul>
        <div className="hamburger" onClick={handleClick}>
          {click ? (
            <FaTimes size={30} style={{ color: "#000" }} />
          ) : (
            <FaBars size={30} style={{ color: "#000" }} />
          )}
        </div>
      </div>
  )
}
const handleLogout = () => {
  // Remove token from localStorage or perform any other necessary cleanup
  localStorage.removeItem('token');
  // Redirect or perform other actions after logout if needed
  window.location.href = '/';
};


export default Navbar