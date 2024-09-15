import React from 'react'
import upstockImg from '../assets/images/image 5.png'
import fiverrImg from '../assets/images/image 4.png'
import cluthImg from '../assets/images/image 3.png'
import ellipse from "../assets/images/Ellipse 50.png"
import image4  from "../assets/images/image 4.png"
import header_bottom from "../assets/images/header_bottom.png"
import header_two from "../assets/images/header_two.png"

import header_img from "../assets/images/Group 762.png"

export default function HeroSection() {
    
  return (
    <section className=" header__section bottom__bg__section relative header__bg__section  ">
        <div className='header_img_container '>
  <video 
    src="https://res.cloudinary.com/drvcqytfb/video/upload/v1726315593/qvd8cp83uh08sqxhzkbz.mp4" 
    autoPlay 
    muted 
    loop 
    className='header_img w-full h-full object-cover' 
  /> 
  <img 
    src={header_img} 
    alt=""  
    className='mt-[90px] mb-[100px] header_img  h-[100%]  object-cover' 
  />
</div> 


  <div className="container herosection__container">
    <div className="row">
        
      <div className="left__section">
        <div className="heading__part w-[45%]">
          <h1>Webpro</h1>
          <p>We are creative web design &
            branding agency based in London that craft beautiful
            work for brand who <span>refuse to blend in.</span></p>
        </div>
        {/* <div className="w-[60px]">
          <img  className="header_two"/>
        </div> */}
        <div className="main__title w-[45%]">
          <h2>
            Advanced
            web pro
          </h2>
        </div>
      </div>
      <img src={header_bottom} className="mt-0" alt="header_bottom"/>
      
      <div className="hero-section-bottom__img ">
        <img src={upstockImg} className="first__img"/>
        <img src={ellipse} className="second__img"/>
        <img src={fiverrImg} className="first__img"/>
        <img src={ellipse} className="second__img"/>
        <img src={cluthImg} className="first__img"/>
        <img src={ellipse} className="second__img"/>
        <img src={image4} className="first__img"/>
      </div>
    </div>
  </div>
  
 </section>
  )
}
