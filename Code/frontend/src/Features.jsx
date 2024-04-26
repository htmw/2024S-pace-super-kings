import logo from './logo.svg';
import './App.css';
import Dashboard from './Tv/dashboard';
import Card from './Components/Card';
import certified from "./assets/cards/certified.svg";
import live from "./assets/cards/live.svg";
import finance from "./assets/cards/finance.svg";
import module from "./assets/cards/modules.svg";
import './feature.css';
import Navbar from './Components/Navbar';
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Features() {

  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  useEffect(() => {
    if (!token) {
      // Redirect to login page if token doesn't exist
      navigate("/login");
    }
  }, [token, navigate]);
  
  return (
    <div className='featurePage'>
      <Navbar />
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
            link="/learn"
          />
       
         

          <Card
            imageUrl={certified}
            heading="Stock Simulator"
            upperContainerColor="#b6adf4"
            link="/dashboard"
          />
          
          <Card
            imageUrl={finance}
            heading="Risk Calculator"
            upperContainerColor="#a5cc65"
            link="/live-details"
          />
        </div>
      </div>
    </div>
  );
}



export default Features;
