import React, { useCallback, useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion';
import maskgroup from  '../assets/images/Mask group (6).png'
import bottomimage from '../assets/images/image 10.png'

export default function SilderSection() {
  const { scrollYProgress } = useScroll(
    
  );
 let section = useRef()


  return (
    <section className="silder_section" ref={section} style={{opacity:scrollYProgress}}>
     <div className="container back-ground">
      <div className='cards-container' >
        {/* Card 1 */}
        <motion.div 
          className="silderr__title silder_section_card"
          style={{
           
          }}
        >
        <div className="sub__title">
          <span>01.</span>
          <h3>Web development</h3>
          <div className="button__text">
            <ul><li><a>Learn more</a></li></ul>
          </div>
          <div className="iconn__section">
            <div className="icon">
              <img src={maskgroup}/>
            </div>
          </div>
        </div>
        <h3 className="heading_section">Crafting digital experiences where beauty meets ROI, turning heads and unlocking revenue potential with every click.</h3>
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
        <div className="bottom__img">
          <img src={bottomimage} className="bottom__image"/>
        </div>
      </motion.div>
      {/* card 2 */}
      <motion.div
     className="silderr__title silder_section_card"
     style={{
     
    }}
       >
        <div className="sub__title">
          <span>01.</span>
          <h3>Web development</h3>
          <div className="button__text">
            <ul><li><a>Learn more</a></li></ul>
          </div>
          <div className="iconn__section">
            <div className="icon">
              <img src={maskgroup} />
            </div>
          </div>
        </div>
        <h3 className="heading_section">Crafting digital experiences where beauty meets ROI, turning heads and unlocking revenue potential with every click.</h3>
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
        <div className="bottom__img">
          <img src={bottomimage} className="bottom__image"/>
        </div>
      </motion.div>
      
    </div>
    </div>
   </section>
  )
}
