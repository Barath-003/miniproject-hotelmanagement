import React, { useState } from 'react';
import Review from './Review';
import './ReviewPage.css';
import ReviewForm from './ReviewForm'; 
const ReviewPage = () => {
  const [reviews, setReviews] = useState([]);

  // Function to handle adding a new review
  const handleAddReview = (newReview) => {
    setReviews([...reviews, newReview]);
  };

  return (
    <div className="review-page">
      <h1 className="review-title">Customer Reviews</h1>
      <div className="review-container">
        {reviews.map((review, index) => (
          <Review key={index} name={review.name} rating={review.rating} comment={review.comment} />
        ))}
      </div>
      <ReviewForm onAddReview={handleAddReview} />
    </div>
  );
};

export default ReviewPage;
