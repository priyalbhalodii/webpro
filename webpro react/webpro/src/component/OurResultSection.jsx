import React from 'react'
import subtractimg from '../assets/images/Subtract.png'
import image12 from '../assets/images/silder_img.png'
import arrowimg from '../assets/images/arrow_img.png'
import CardBrandSection from './CardBrandSection'
import SilderSection from './SilderSection'
import CardSlider from './cardSlider/CardSlider'
import centerImg from "../assets/images/Mask group (3).png"
import centerImg2 from "../assets/images/Ellipse 60.png"


export default function OurResultSection() {
  return (
    <div className='relative'>
     <section className="our_work_section relative">
      <div className="container right_side">
        <div className="row">
          <div className="title">
            <h1>Our Services</h1>
          </div>
          <div className="heading__title">
            <h1>
              Making <span>“brands”</span> a damn site better.
            </h1>
            <div className='slider_section '>
              <CardSlider />
            </div>
          </div>
        </div>
      </div>

      {/* Gradient Background */}
      <div 
        className="absolute inset-x-0 bottom-0 h-[6px] w-[70%] mx-auto"
        style={{
          background: 'linear-gradient(90deg, #453B57, #ED5959 47.16%, #453B57',
        }}
      ></div>
      {/* center background img */}
      <div className="absolute top-[30%]  left-0 h-[170px] animate-scaleUpDown  ">
      <img src={centerImg} alt="" className="h-full w-full object-cover" />
    </div>
    </section>
    <div className="absolute top-[35%] z-[2] left-0 h-[600px]  ">
      <img src={centerImg2} alt="" className="h-full w-full object-cover" />
    </div>
   
          
          
    <div className="our__result__section ">
    
    <div className="container">
      <div className="">
        <div className="our_process__title">
          <h5>Our Process</h5>
          <h1>We develop website this <span>“process”</span></h1>
        </div>
        <div className="row relative">
          <div className="lg:w-[50%] md:w-[50%] sm:w-full w-full">
            <div className="mainn__result__section">
              <div className="mock_title">
                 <div className="row">
                  <div className="lg:w-[30%] md:w-[50%] sm:w-full w-full">
                    <div className="web_developemnt">
                      <ul>
                        <li>
                        <a>web developemnt</a>
                      </li>
                      <li><a>Graphic design</a></li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="lg:w-[50%] md:w-[50%] sm:w-full w-full">
                  <div className="web_developemnt">
                      <ul>
                        <li>
                        <a>Web design</a>
                      </li>
                      <li><a>Digital marketing</a></li>
                      </ul>
                    </div>
                  </div>
                 </div>
            </div>
          </div>
          </div>
          
          <div className="lg:w-[50%] md:w-[50%] sm:w-full w-full relative">
          <div 
        className="absolute inset-x-0 top-[30px] left-[-100px]  h-[100px] w-[6px] "
        style={{
          background: 'linear-gradient(0deg, #453B57, #ED5959 47.16%, #453B57',
        }}
      ></div>
            <div className="right__result__section">
              <p>Provide a summary of your services, focusing on how you solve common IT problems.</p>
            </div>
          </div>
      </div>
    </div>
    <div className="mainn__star">
      <div className="flex gap-[25px]">
        <div className="lg:w-[65%] md:w-[74.7%] sm:w-full w-full">
          <div className="star__img">
            <img src={subtractimg}/>
          </div>
          <div className="star__details">
            <h2>405</h2>
            <span><p>star</p>
            Reviews</span>
          </div>
        </div>
        <div className="lg:w-[28%] md:w-[24.9%] sm:w-full w-full">
          <div className="reviews__section">
            <div className="sub__reviwes">
              <h3>10+</h3>
              <span>experience</span>
            </div>
            <div className="sub__reviwes">
              <h3>10+</h3>
              <span>experience</span>
            </div>
            <div className="sub__reviwes">
              <h3>10+</h3>
              <span>experience</span>
            </div>
          </div>
        </div>
      </div>
    </div>
   </div>
   </div>
    </div>
   
  )
}
