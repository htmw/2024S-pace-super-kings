import React from 'react';
import './card.css'; 
import { Link } from 'react-router-dom';

// Card component
const Card = ({ imageUrl, heading,imageSize,upperContainerColor,link }) => {
  return (
    <div className="card">
    <Link to ={link}>
      
 
      <div className="upper-container" style={{backgroundColor: upperContainerColor}}>
        <img src={imageUrl} alt="Image" className={`image ${imageSize}`} />
      </div>
      <div className="lower-container">
        <h3 className='links'>{heading}</h3>
      </div>
      
    </Link>
    </div>
  );
};

export default Card;
