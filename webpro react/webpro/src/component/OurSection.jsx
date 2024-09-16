import { useScroll, useTransform ,motion} from 'framer-motion';
import React, { useRef, useState } from 'react'
import afterImg from "../assets/images/Ellipse 57.png"

export default function OurSection () {
 
  return (
    
        

  <section className="our_services ">
    

    
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

    
  </section>
 
  )
}