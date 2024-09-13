
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import OurSection from '../../component/OurSection'
import HeroSection from '../../component/HeroSection'
import SilderSection from '../../component/SilderSection'
import OurServices from '../../component/OurServices'
import OurProgessSection from '../../component/OurProgessSection'
import OurWorkSection from '../../component/OurWorkSection'
import OurResultSection from '../../component/OurResultSection'
import CardSection from '../../component/CardSection'

import BlogSection from '../../component/BlogSection';
import Carousel from '../../component/Carousel';
import Form from '../../component/Form';
import AccordionWrapper from '../../component/Accordion/AccordionWrapper';
import AccordionItem from '../../component/Accordion/AccordionItem';
import CardSlider from '../../component/cardSlider/CardSlider';


import OurClients from '../../component/OurClients'
import ContactUs from '../../component/ContactUs';
import FaqSection from '../../component/FaqSection'
import FooterSection from '../../component/FooterSection'


export default function Home() {
  const ourSectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ourSectionRef,
    offset: ['start start', 'center end'], 
  });
  const data = [
    {
      "title": "Item 1",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a consequat nibh. Mauris suscipit arcu at fermentum convallis. Pellentesque consectetur mi in felis maximus posuere."
    },
    {
      "title": "Item 2",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In molestie tellus a maximus tempus. Duis vel leo iaculis, porttitor erat et, posuere erat. Ut blandit."
    },
    {
      "title": "Item 3",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lacinia, nibh imperdiet tempus pharetra, arcu risus aliquet arcu, a auctor ex lacus efficitur purus. Morbi."
    },
    {
      "title": "Item 4",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc feugiat lobortis nibh, eu molestie est placerat non. Donec ornare nisl erat, non imperdiet elit porta."
    }
  ];

  return (
    <div >
      <HeroSection />
      <div className='best_services_section' ref={ourSectionRef} >
        <motion.div  className=''
         
          style={{
            // position:  useTransform(scrollYProgress, (scroll)=>scroll=="1"? "relative":"sticky"),
            position: 'sticky',
            top: 0,
            zIndex: -1, // Ensure OurSection stays above SilderSection
            width: `${scrollYProgress * 100}px`,
            // Apply fade out and shrink effect
            opacity: useTransform(scrollYProgress, [0, 1], [1, 0.2]), // Opacity decreases as you scroll
            scale: useTransform(scrollYProgress, [0, 1], [1, 0.8]), // Shrinks as you scroll
          }}
        >
          <OurSection />
        </motion.div>

        <div 
          style={{
            position: 'relative', // Important for z-index to work
            zIndex: 1, // Ensure SilderSection stays above OurSection
          }}
        >
          <SilderSection />
        </div>
      </div>
       <OurServices/>
    <OurProgessSection/>

    <OurResultSection/>
    {/* <BlogSection/> */}
   
    {/* <Form/> */}

      {/* <CardSlider/> */}
    {/* accorodian */}
    <AccordionWrapper>
            {data.map((item, index) => (
              <AccordionItem key={index} index={index} title={item.title} description={item.description} />
            ))}
          </AccordionWrapper>

  <OurResultSection/> 
    {/* <CardSection/> */}
    <OurClients/>
    <OurWorkSection/>
    <contactus/>
    <ContactUs/>
    {/* <FaqSection/> */}
    <FooterSection/>

    </div>
  );
}
