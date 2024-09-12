import React from 'react'
import exclude from "../assets/images/Exclude.png"
import icon from "../assets/images/icon.png"
import Maskgroup from "../assets/images/Mask group (6).png"



export default function OurServices() {
  return (
    <section className="about__section">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
          <div className="about__img">
            <img src={exclude} className="Exclude"/>
            <div className="img_text">
              <h2>10</h2>
              <span>year of
                experience</span>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
          <div className="main__about">
            <div className="title">
              <h1>our services</h1>
            </div>
            <div className="our_journey">
              <h2>Our Journey in IT <span>“Excellence”</span></h2>
            </div>
            <div className="our_journey_details">
              <p>A brief overview of your company, highlighting your mission and the key.</p>
            </div>
            <div className="part__section">
              <img src={icon}className="icon_part"/>
              <div className="right__part">
                <p>Learn about the history, usage d </p>
              </div>
            </div>
            <div className="part__section">
              <img src={icon} className="icon_part"/>
              <div className="right__part">
                <p>Learn about the history, usage d </p>
              </div>
            </div>
            <div className="part__section">
              <img src={icon} className="icon_part"/>
              <div className="right__part">
                <p>Learn about the history, usage d </p>
              </div>
            </div>
          </div>
          <div className="about__button">
            <div className="button__text">
              <ul><li><a>Learn more</a></li></ul>
            </div>
            <div className="iconn__section">
              <div className="icon">
                <img src={Maskgroup}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}
