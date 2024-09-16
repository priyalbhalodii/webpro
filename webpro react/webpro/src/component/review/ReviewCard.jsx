import React from 'react'
import clientphoto from '../../assets/images/cilent_photo.png'
import starimage from '../../assets/images/star_image.png'
import afterImg from '../../assets/images/Group 650.png'


export default function ReviewCard() {
  return (
    <div className="our_cilents_section ">
        
    <div className="container relative">
    <div className="absolute  top-[-50px] z-[-1] right-[-10px] h-[130px] w-[130px] animate-scaleUpDown">
      <img src={afterImg} alt="" className="h-full w-full object-cover" />
    </div>
    <div className="row justify-between">
        <div className="lg:w-[25%] md:w-[25%] sm:w-full w-full">
            <div className="cilent__photo">
                <img src={clientphoto} />
            </div>
        </div>
        <div className="lg:w-[66%] md:w-[66%] sm:w-full w-full">
            <div className="Cilent__details">
                <div className="Cilent__img">
                    <img src={starimage}/>
                </div>
                
                <p className='mb-5'>Working with [Your Company] has been a game-changer for our business. Their team not only resolved our immediate IT issues but also provided. </p>
                <div className="cilent__main">
                    <h3 className='text-[30px] mb-2'>Jane Doe, CEO of XYZ Corp.</h3>
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
