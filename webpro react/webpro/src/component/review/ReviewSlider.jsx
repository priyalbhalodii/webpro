import React, { useState } from 'react';
import ReviewCard from './ReviewCard'; // Assuming this component displays a single review
import './index.css'
export default function ReviewSlider() {
    const reviews = [0,1,2]
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  };

  const handleNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="review-slider">
      <button className="prev-button" onClick={handlePrevSlide}>
        Previous
      </button>

      <div className="slide-container" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {reviews.map((review, index) => (
          <div key={index} className="slide">
            <ReviewCard review={review} />
          </div>
        ))}
      </div>

      <button className="next-button" onClick={handleNextSlide}>
        Next
      </button>
    </div>
  );
}
