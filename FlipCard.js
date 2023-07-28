import React, { useState } from 'react';
import './FlipCard.css';

const FlipCard = ({ frontImage, backImage }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={`flip-card ${isFlipped ? 'flipped' : ''}`} onClick={handleCardClick}>
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src={frontImage} alt="Front" />
        </div>
        <div className="flip-card-back">
          <img src={backImage} alt="Back" />
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
