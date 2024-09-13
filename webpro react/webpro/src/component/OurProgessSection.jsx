import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion';
export default function OurProgessSection() {
  const targetRef=useRef()
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start start', 'center start'], // Adjust offset as needed
  });
let opacity=useTransform(scrollYProgress, [0, 0.5], [1, 0]) // Opacity decreases as you
let scale= useTransform(scrollYProgress, [0, 1], [1, 0.5])
  return (
    <section className="Our__Process__section position-relative " ref={targetRef}>
    <div className="container">
      {/* header */}
      <motion.div className="our_process__title position-sticky our-progress-header" style={{opacity,scale}} >
        <h5>Our Process</h5>
        <h1>We develop website this <span>“process”</span></h1>
      </motion.div>
      {/* detailes */}
      <div className="process__Section our-progress-detailes ">
        <div className="row">
          <div className="col-lg-2 col-md-2 col-sm-12 col-12">
            <div className="number__Section">
              <span>.01</span>
            </div>
          </div>
          <div className="col-lg-10 col-md-10 col-sm-12 col-12">
            <div className="reserach__section">
              <h2>Research and Discovery</h2>
            </div>
            <div className="Research_details">
              <p>Identify who your target audience is, including their needs, pain points, and how your services can address these.</p>
            </div>
            <div className="mainn__reserach">
              <div className="research__sec">
                <ul>
                  <li>
                    <a>Research</a>
                  </li>
                  <li>
                    <a>Goals</a>
                  </li>
                  <li>
                    <a>Discovery</a>
                  </li>
                </ul>
            </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-2 col-md-2 col-sm-12 col-12">
            <div className="number__Section">
              <span>.02</span>
            </div>
          </div>
          <div className="col-lg-10 col-md-10 col-sm-12 col-12">
            <div className="reserach__section">
              <h2>Design and Prototyping</h2>
            </div>
            <div className="Research_details">
              <p>Determine what you want to achieve with your website content. Goals could include educating potential clients, showcasing expertise, and </p>
            </div>
            <div className="mainn__reserach">
              <div className="research__sec">
                <ul>
                  <li>
                    <a>Wire-frame</a>
                  </li>
                  <li>
                    <a>Design</a>
                  </li>
                  <li>
                    <a>Prototyping</a>
                  </li>
                </ul>
            </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-2 col-md-2 col-sm-12 col-12">
            <div className="number__Section">
              <span>.03</span>
            </div>
          </div>
          <div className="col-lg-10 col-md-10 col-sm-12 col-12">
            <div className="reserach__section">
              <h2>Development And Testing</h2>
            </div>
            <div className="Research_details">
              <p>Determine the main sections of your website (e.g., Home, About Us, Services, Blog, Contact).</p>
            </div>
            <div className="mainn__reserach">
              <div className="research__sec">
                <ul>
                  <li>
                    <a>Development</a>
                  </li>
                  <li>
                    <a>Testing</a>
                  </li>
                  <li>
                    <a>Publish</a>
                  </li>
                </ul>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
   </section>
  )
}
