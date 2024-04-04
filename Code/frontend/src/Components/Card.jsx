import React from 'react';
import './card.css'; 

// Card component
const Card = ({ imageUrl, heading,imageSize,upperContainerColor,link }) => {
  return (
    <div className="card">
      <div className="upper-container" style={{backgroundColor: upperContainerColor}}>
        <img src={imageUrl} alt="Image" className={`image ${imageSize}`} />
      </div>
      <div className="lower-container">
        <h3 className='links'><a href={link}>{heading}</a></h3>
      </div>
    </div>
  );
};

export default Card;
