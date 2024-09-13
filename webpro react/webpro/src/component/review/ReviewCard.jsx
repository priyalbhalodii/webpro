import React from 'react'
import clientphoto from '../../assets/images/cilent_photo.png'
import starimage from '../../assets/images/star_image.png'

export default function ReviewCard() {
  return (
    <div className="our_cilents_section">
    <div className="container">
    <div className="row">
        <div className="col-lg-4 col-md-4 col-sm-12 col-12">
            <div className="cilent__photo">
                <img src={clientphoto} />
            </div>
        </div>
        <div className="col-lg-8 col-md-8 col-sm-12 col-12">
            <div className="Cilent__details">
                <div className="Cilent__img">
                    <img src={starimage}/>
                </div>
                
                <p>Working with [Your Company] has been a game-changer for our business. Their team not only resolved our immediate IT issues but also provided. </p>
                <div className="cilent__main">
                    <h3>Jane Doe, CEO of XYZ Corp.</h3>
                </div>
                <div className="email__details">
                    <h5>abc12345@gmail.com</h5>
                </div>
            </div>
        </div>
    </div>
    </div>
    
</div>
  )
}
