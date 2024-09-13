import React, { useState, useEffect } from "react";
import CardBrandSection from "../CardBrandSection";
import './index.css'

export default function CardSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    <CardBrandSection key={1} />,
    <CardBrandSection key={2} />,
    <CardBrandSection key={3} />,
    <CardBrandSection key={3} />,
    <CardBrandSection key={3} />,
    <CardBrandSection key={3} />,
    <CardBrandSection key={3} />,
    // Add more CardBrandSection components as needed
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % (slides.length-2));
    }, 3000); // Change slide every 3 seconds (3000 milliseconds)

    return () => clearInterval(interval); // Clear interval on component unmount
  }, [slides.length]); // Restart interval if slides.length changes

  return (
    <div className="">
    <div className=" container float-right">
      <div
        className="card-slider card-container"
       
      >
        {slides.map((slide) => (
          <div className="brand_card" key={slide.key}
          style={{
            transform: `translateX(-${currentSlide * 100}%)`,
            transition: "transform 0.5s ease-in-out", // Add smooth transition
          }}
          >
            {slide}
          </div>
        ))}
      </div>
    </div>

    </div>
  );
}
