import { useScroll, useTransform ,motion} from 'framer-motion';
import React, { useRef, useState } from 'react'
import afterImg from "../assets/images/Ellipse 57.png"

export default function OurSection () {
 
  
  return (
    
        

  <motion.section className="our_services "
  initial={{ opacity: 0, y: 0,scale:0.8 }} // Initial state
  whileInView={{ opacity: 1, y: 0,scale:1 }} // Animation when in view
  transition={{ duration: 1, ease: 'easeOut' }} // Transition options
  >
    

    
    <div className="services__before">

    <div className="container">
      <div className="title">
        <h1>our services</h1>
      </div>
      <div className="row ">
        <div className="lg:w-[50%] md:w-[50%] sm:w-full  w-full ourservice__relative">
          <div className="heading__title">
            <h1>We provide
              best <span>”Service”</span></h1>
          </div>
          <div className=' ourservice__border'></div>
          
        </div>

        <div className="lg:w-[50%] md:w-[50%] sm:w-full w-full">
        <div className="sub__heading__title">
          <span>Provide a summary of your services, focusing on how you solve common IT problems.</span>
        </div>
        </div>
      </div>
    </div>
    </div>
    {/* <div className="absolute top-0 right-[-300px] h-[100%] w-[80%] ">
      <img src={afterImg} alt="" className="h-full w-full object-cover" />
    </div> */}

    
  </motion.section>
 
  )
}