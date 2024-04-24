import "./nav.css";
import React, { useState, useEffect } from "react";
import { Link, useLocation , useNavigate} from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import profileimg from "../Tv/assets/images/1.png";
import axios from "../network/networkInterceptor";

const Navbar = () => {
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate()
  const handleLogout = () => {
    // Remove token from localStorage or perform any other necessary cleanup
    localStorage.removeItem("token");
    // Redirect or perform other actions after logout if needed
   navigate('/')
  };
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get("/profile"); // Use the custom Axios instance
        setUserData(response.data); // Store user data
        console.log(response);
    
        
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData(); // Fetch user data on component mount
  },[] ); // Run once when component mounts

const location = useLocation();
const { hash, pathname, search } = location;

  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  const token = localStorage.getItem("token");
  console.log("Token:", token); 

  return (
    <div className="navbar-2">
      <a className="LogoTitle" href="/">
        <div className="logo">
          <div className="img"></div>
          <div className="name">
            <span
              style={{
                fontWeight: "700",
                fontSize: "1.5rem",
                color: "#ff8773",
              }}
            >
              InvestMate
            </span>
          </div>
        </div>
      </a>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
      <li>
          {" "}
          <Link to="/dashboard">Trading</Link>{" "}
        </li>
        <li>
          {" "}
          <Link to="/learn">Learning Modules</Link>{" "}
        </li>
        <li>
          {" "}
          <Link to="/">Risk Calculator</Link>{" "}
        </li>
        <li>
          <Link to="/myprofile">My Profile</Link>
        </li>
        <li>
          <Link to="/">Settings</Link>
        </li>
       
        <li>
        {token ? (
          <span onClick={handleLogout}>Signout</span>
        ) : (
          <Link className="signupLogin" to="/signup">
            Signup / Login
          </Link>
        )}
        </li>

        <li class="prfileImage">
          <div class="dropdown header-profile2">
            <a
              class="nav-link"
              href="javascript:void(0);"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <div
                class="header-info2 d-flex align-items-center justify-content-center"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column-reverse",
                }}
              >
                <div class="d-flex align-items-center sidebar-info">
                  <div>
                    {userData != null ? (
                      <h6
                        class=""
                        style={{ color: "#28292b", paddingTop: "0.5rem" }}
                      >
                        {"Hi" + " " + userData.firstName}
                      </h6>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
                <img
                  src={profileimg}
                  alt=""
                  style={{ width: "50px", height: "50px" }}
                />
              </div>
            </a>
            <div class="dropdown-menu dropdown-menu-end">
              <a href="/myprofile" class="dropdown-item ai-icon ">
                <span class="ms-2">Profile </span>
              </a>

              <a href="javascript:void(0);" class="dropdown-item ai-icon ">
                <span class="ms-2">Settings </span>
              </a>
              <a href="/dashboard" class="dropdown-item ai-icon">
                <svg
                  class="logout"
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#fd5353"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                  <polyline points="16 17 21 12 16 7"></polyline>
                  <line x1="21" y1="12" x2="9" y2="12"></line>
                </svg>
                <span class="ms-2 text-danger">Logout </span>
              </a>
            </div>
          </div>
        </li>
      </ul>

      <div className="hamburger" onClick={handleClick}>
        {click ? (
          <FaTimes size={30} style={{ color: "#000" }} />
        ) : (
          <FaBars size={30} style={{ color: "#000" }} />
        )}
      </div>
    </div>
  );
};


export default Navbar;
