import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'; // Only import faChevronDown
import maskgroup from '../assets/images/Mask group (6).png';
import bottomimage from '../assets/images/card_img.png';

export default function CardSection({ open }) {

  const [showImage, setShowImage] = useState(open || false);
  const [isRotated, setIsRotated] = useState(false);

  const toggleImage = () => {
    setShowImage(!showImage);
    setIsRotated(!isRotated); // Toggle image visibility
  };

  return (
    <div className="silderr__title card ">
      <div className="w-100 ">
        <div className="sub__title ">
          <span>01.</span>
          <h3>Web development</h3>
          <div className="button__text">
            <ul>
              <li><a>Learn more</a></li>
            </ul>
          </div>
          <div className="iconn__section">
  <button 
    className={`icon animation ${isRotated ? 'rotate-icon' : ''}`} 
    onClick={toggleImage}
  >
    <FontAwesomeIcon icon={faChevronDown} /> 
  </button>
</div>
        </div>
        <h3 className="heading_section">
          Crafting digital experiences where beauty meets ROI, turning heads and unlocking revenue potential with every click.
        </h3>
        <div className="three__button__Section">
          <ul>
            <li>
              <a>Web development</a>
            </li>
            <li>
              <a>Web development</a>
            </li>
            <li>
              <a>Web development</a>
            </li>
          </ul>
        </div>
        {/* Conditionally render the image without any transition */}
         {/* Conditionally render the image with transition */}
         <div className={`bottom__img ${showImage ? 'show' : ''}`}>
          <img src={bottomimage} alt="Bottom Image" className="img-fluid" />
        </div>
      </div>
    </div>
  );
}
