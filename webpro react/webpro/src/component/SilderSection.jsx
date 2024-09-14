import React, { useCallback, useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion';
import maskgroup from  '../assets/images/Mask group.png'
import bottomimage from '../assets/images/image 10.png'
import CardSection from './CardSection';
import afterImg from '../assets/images/Group 650.png'


export default function SilderSection() {
//   const { scrollYProgress } = useScroll(
    
//   );
//  let section = useRef()


  return (
    <section className="silder_section" >
     <div className="container back-ground relative">
      <div className='absolute top-[-80px] right-[0px] h-[200px] w-[200px] '>
        <img src={afterImg} alt="" className='h-full w-full bg-cover '/>

      </div>
      <div className='absolute top-[-80px] right-[0px] h-[200px] w-[200px] '>
        <img src={maskgroup} alt="" className='h-full w-full bg-cover'/>

      </div>
      <div className='cards-container' >
        {/* Card 1 */}
        {/* <motion.div 
          
        > */}
        <CardSection open={true}/>
      {/* </motion.div> */}
        {/* <motion.div 
          
        > */}
        <CardSection/>
      {/* </motion.div> */}
      {/* card 2 */}
     
      {/* card 3 */}
      
        <CardSection/>
     
      <CardSection/>
    </div>
    </div>
   </section>
  )
}
