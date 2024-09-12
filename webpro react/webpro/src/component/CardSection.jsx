import React from 'react'
import maskgroup from '../assets/images/Mask group (6).png'
import bottomimage from '../assets/images/card_img.png'
export default function CardSection() {
  return (
    
      <div className="silderr__title">
        <div className="sub__title">
          <span>01.</span>
          <h3>Web development</h3>
          <div className="button__text">
            <ul><li><a>Learn more</a></li></ul>
          </div>
          <div className="iconn__section">
            <div className="icon">
              <img src={maskgroup} />
            </div>
          </div>
        </div>
        <h3 className="heading_section">Crafting digital experiences where beauty meets ROI, turning heads and unlocking revenue potential with every click.</h3>
        <div className="three__button__Section">
          <ul>
            <li>
              <a>Web development</a>
            </li>
            <li>
              <a>Web development</a>
            </li>
            <li>
              <a>Web development</a>
            </li>
          </ul>
        </div>
        <div className="bottom__img">
          <img src={bottomimage} className="bottom__image"/>
        </div>
      </div>
  )
}
