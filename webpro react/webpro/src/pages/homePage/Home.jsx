import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion';
import OurSection from '../../component/OurSection'
import HeroSection from '../../component/HeroSection'
import SilderSection from '../../component/SilderSection'
import OurServices from '../../component/OurServices'


export default function Home() {
  // const { scrollYProgress } = useScroll();
  // const y = useTransform(scrollYProgress, [0, 0.2], [0, -200]);
  return (
    <div>
      <HeroSection/>
<div className='best_services_section'>

      {/* <motion.div style={{ position: 'sticky', top: '500px', zIndex: -1, y }}>  */}
        <OurSection />
      {/* </motion.div> */}
   
    <SilderSection/>
</div>
    <OurServices/>
    </div>
  )
}
