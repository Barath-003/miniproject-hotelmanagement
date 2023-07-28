import React from 'react';
import './Review.css';

const Review = ({ name, rating, comment }) => {
  return (
    <div className="review">
      <div className="review-content">
        <h2>{name}</h2>
        <div className="rating">
          <span className="stars" style={{ width: `${(rating / 5) * 100}%` }}>
            ★★★★★
          </span>
          <span className="rating-value">{rating}</span>
        </div>
        <p>{comment}</p>
      </div>
    </div>
  );
};

export default Review;
