import React from 'react'
import silderimg from '../assets/images/silder_img.png'
import SilderSection from './SilderSection'
import CardSlider from './cardSlider/CardSlider'

export default function OurWorkSection() {
  return (
    <section className="our_work_section">
        <div className="container right_side">
          <div className="row">
            <div className="title">
              <h1>our services</h1>
            </div>
            <div className="heading__title">
              <h1>Making<span>“brands” </span>
                a damn site better.</h1>
                <CardSlider/>
            </div>
          </div>
        </div>
      </section>
      
  )
}
