import React, { useCallback, useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion';
import maskgroup from  '../assets/images/Mask group (6).png'
import bottomimage from '../assets/images/image 10.png'
import CardSection from './CardSection';

export default function SilderSection() {
//   const { scrollYProgress } = useScroll(
    
//   );
//  let section = useRef()


  return (
    <section className="silder_section" >
     <div className="container back-ground">
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
