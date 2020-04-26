import React from 'react';
import './HeroImage.css';

const HeroImage = ({ image, title, text }) => {
  return (
    <div
      className="flix-heroimage"
      style={{
        background: `linear-gradient(to bottom, rgba(0,0,0,0) 
          39%, rgba(0,0,0,0) 
          41%, rgba(0,0,0,0.65) 
          100%), 
          url('${image}'), #1c1c1c`,
      }}
    >
      <div className="flix-heroimage-content">
        <div className="flix-heroimage-text">
          <h1>{title}</h1>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
};

export default HeroImage;
