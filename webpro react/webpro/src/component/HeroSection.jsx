import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import upstockImg from '../assets/images/image 5.png';
import fiverrImg from '../assets/images/image 4.png';
import cluthImg from '../assets/images/image 3.png';
import ellipse from "../assets/images/Ellipse 50.png";
import image4 from "../assets/images/image 4.png";
import header_bottom from "../assets/images/header_bottom.png";
import header_two from "../assets/images/header_two.png";
import header_img from "../assets/images/Group 762.png";

export default function HeroSection() {
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.1 });

  return (
    <section  ref={ref} className="mb-[100px] header__section bottom__bg__section relative header__bg__section">
      <div className='header_img_container'>
        <video 
          src="https://videos.pexels.com/video-files/5057522/5057522-uhd_2560_1440_25fps.mp4" 
          autoPlay 
          muted 
          loop 
          className='header_img w-full h-full object-cover' 
        /> 
        <img 
          src={header_img} 
          alt=""  
          className='mt-[90px] mb-[100px] header_img h-[100%] object-cover' 
        />
      </div> 

      <div
      
        className="container herosection__container"
       
      >
        <div className="row">
          <div className="left__section">
            <motion.div className="heading__part w-[45%]"
             initial={{ opacity: 0, x: -50,scale:1 }} // Initial state
             whileInView={{ opacity: 1, x: 0,scale:1 }} // Animation when in view
             transition={{ duration: 1, ease: 'easeOut' }} // Transition options
            >
              <h1>Webpro</h1>
              <p>
                We are a creative web design & branding agency based in London that crafts beautiful work for brands who <span>refuse to blend in.</span>
              </p>
            </motion.div>
            <motion.div className="main__title w-[45%]"
            initial={{ opacity: 0, x: 50,scale:1 }} // Initial state
            whileInView={{ opacity: 1, x: 0,scale:1 }} // Animation when in view
            transition={{ duration: 1, ease: 'easeOut' }} // Transition options
            >
              <h2>
                Advanced web pro
              </h2>
            </motion.div>
          </div>
          <motion.img src={header_bottom} className="mt-0" alt="header_bottom"
            initial={{ opacity: 0, x: 0,scale:1 }} // Initial state
            whileInView={{ opacity: 1, x: 0,scale:1 }} // Animation when in view
            transition={{ duration: 1, ease: 'easeOut' }} // Transition options
          />
          
          <motion.div className="hero-section-bottom__img"
          initial={{ opacity: 0, x: 0,scale:0.8 }} // Initial state
          whileInView={{ opacity: 1, x: 0,scale:1 }} // Animation when in view
          transition={{ duration: 1, ease: 'easeOut' }} // Transition options
          >
            <img src={upstockImg} className="first__img" alt="Upstock" />
            <img src={ellipse} className="second__img" alt="Ellipse" />
            <img src={fiverrImg} className="first__img" alt="Fiverr" />
            <img src={ellipse} className="second__img" alt="Ellipse" />
            <img src={cluthImg} className="first__img" alt="Cluth" />
            <img src={ellipse} className="second__img" alt="Ellipse" />
            <img src={image4} className="first__img" alt="Image 4" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
