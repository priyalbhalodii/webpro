import { useScroll, useTransform ,motion} from 'framer-motion';
import React, { useRef, useState } from 'react'

export default function OurSection () {
  // const ref=useRef();
  // const { scrollYProgress}=useScroll({
  //   target:ref,
  //   offset:["start end","end start"],
    
  // });
  // const opacity=useTransform(scrollYProgress,[0.5,1],[1,0]);
  // const scale=useTransform(scrollYProgress,[0,0.1],[1,0.8]);
  // const position=useTransform(scrollYProgress,(pos)=> {return pos===1? "relative":"sticky"})
  // const y = useTransform(scrollYProgress, [0, 0.2], [0, -200]);



  // console.log( "y",y);

  //   console.log( "scrollYProgress",scrollYProgress);

  
  return (
    
        

  <section className="our_services">
    {/* <div className='our_services_img'> */}

    
    <div className="services__before">

    <div className="container">
      <div className="title">
        <h1>our services</h1>
      </div>
      <div className="row ">
        <div className="col-lg-6 col-md-6 col-sm-12 col-12 ourservice__relative">
          <div className="heading__title">
            <h1>We provide
              best <span>”Service”</span></h1>
          </div>
          <div className=' ourservice__border'></div>
          
        </div>

        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
        <div className="sub__heading__title">
          <span>Provide a summary of your services, focusing on how you solve common IT problems.</span>
        </div>
        </div>
      </div>
    </div>
    </div>
    {/* </div> */}
  </section>
 
  )
}