import React from 'react'
import exclude from "../assets/images/Exclude.png"
import icon from "../assets/images/icon.png"
import Maskgroup from "../assets/images/Mask group (6).png"
import bottomRightImage from "../assets/images/Mask group (1).png" // Import the new image
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export default function OurServices() {
  return (
    <section className="about__section relative"> {/* Make this section relative for positioning */}
          
      <div className="container">
        <div className="row">
          <div className="lg:w-[50%] md:w-[50%] sm:w-full w-full">
            <div className="about__img">
              <img src={exclude} className="Exclude" alt="Exclude" />
              <div className="img_text">
                <h2>10</h2>
                <span>year of experience</span>
              </div>
            </div>
          </div>

          <div className="lg:w-[50%] md:w-[50%] sm:w-full w-full">
            <div className="main__about">
              <div className="title">
                <h1>our services</h1>
              </div>

              <div className="our_journey">
                <h2>Our Journey in IT <span>“Excellence”</span></h2>
              </div>

              <div className="our_journey_details">
                <p>A brief overview of your company, highlighting your mission and the key.</p>
              </div>

              {/* Service Details */}
              <div className="part__section">
                <img src={icon} className="icon_part" alt="Icon"/>
                <div className="right__part">
                  <p>Learn about the history, usage d </p>
                </div>
              </div>

              <div className="part__section">
                <img src={icon} className="icon_part" alt="Icon"/>
                <div className="right__part">
                  <p>Learn about the history, usage d </p>
                </div>
              </div>

              <div className="part__section">
                <img src={icon} className="icon_part" alt="Icon"/>
                <div className="right__part">
                  <p>Learn about the history, usage d </p>
                </div>
              </div>
            </div>

            {/* Button Section */}
<div className="about__button mt-6">
  <div className="button__text">
    <ul className=''>
      <li><a href="#">Learn more</a></li>
    </ul>
  </div>
  <div className="iconn__section">
                <div className="icon p-6 rounded-full flex items-center justify-center">
                  <FontAwesomeIcon icon={faArrowRight} size="2xl" className="text-white" />
                </div>
              </div>
</div>

          </div>
        </div>
      </div>

      {/* Bottom-right image */}
      <div className="absolute top-[-100px] right-[0px] h-[200px] w-[100px] animate-scaleUpDown">
        <img src={bottomRightImage} alt="Bottom Right" className="object-cover h-full w-full" />
      </div>
      
    </section>
  )
}
