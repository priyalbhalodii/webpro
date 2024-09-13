import React from 'react'
import subtractimg from '../assets/images/Subtract.png'
import image12 from '../assets/images/silder_img.png'
import arrowimg from '../assets/images/arrow_img.png'
import CardBrandSection from './CardBrandSection'

export default function OurResultSection() {
  return (
    <div>
       <section className="our_work_section">
        <div className="container right_side">
          <div className="row">
            <div className="title">
              <h1>our services</h1>
            </div>
            <div className="heading__title">
              <h1>Making<span>“brands” </span>
                a damn site better.</h1>
            <div className="d-flex gap-3">
              {/* <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                <div className="main__details">
                <div className="img_section">
                  <img src={image12} className="img__left"/>
                </div>
                <div className="all__section">
                  <div className="main__part">
                    <div className="desinger__name">
                      <span>Website design</span>
                    </div>
                    <div className="desinger__name">
                      <span>Website design</span>
                    </div>
                    <div className="desinger__name">
                      <span>Website design</span>
                    </div>
                  </div>
                </div>
                <div className="text__details">
                  <p>Learn about the history, usage and variations of Lorem Ipsum, the industry's standard dummy </p>
                  <div className="text__img">
                    <img src={arrowimg} className="arrow_img"/>
                  </div>
                </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12 col-12">
              <div className="main__details">
                <div className="img_section">
                  <img src={image12} className="img__left"/>
                </div>
                <div className="all__section">
                  <div className="main__part">
                    <div className="desinger__name">
                      <span>Website design</span>
                    </div>
                    <div className="desinger__name">
                      <span>Website design</span>
                    </div>
                    <div className="desinger__name">
                      <span>Website design</span>
                    </div>
                  </div>
                </div>
                <div className="text__details">
                  <p>Learn about the history, usage and variations of Lorem Ipsum, the industry's standard dummy </p>
                  <div className="text__img">
                    <img src={arrowimg} className="arrow_img"/>
                  </div>
                </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12 col-12">
              <div className="main__details">
                <div className="img_section">
                  <img src={image12} className="img__left"/>
                </div>
                <div className="all__section">
                  <div className="main__part">
                    <div className="desinger__name">
                      <span>Website design</span>
                    </div>
                    <div className="desinger__name">
                      <span>Website design</span>
                    </div>
                    <div className="desinger__name">
                      <span>Website design</span>
                    </div>
                  </div>
                </div>
                <div className="text__details">
                  <p>Learn about the history, usage and variations of Lorem Ipsum, the industry's standard dummy </p>
                  <div className="text__img">
                    <img src={arrowimg} className="arrow_img"/>
                  </div>
                </div>
                </div>
              </div> */}
              {/* <div className='col-lg-4 col-md-4 col-sm-12 col-12'> */}

              <CardBrandSection/>
             
              {/* </div> */}
              {/* <div className='col-lg-4 col-md-4 col-sm-12 col-12'> */}

              <CardBrandSection/>
              {/* </div> */}
              {/* <div className='col-lg-4 col-md-4 col-sm-12 col-12'> */}

              <CardBrandSection/>
              {/* </div> */}
              
              

            </div>
          </div>
          </div>
        </div>
      </section>
    <div className="our__result__section">
    <div className="container">
      <div className="row">
        <div className="our_process__title">
          <h5>Our Process</h5>
          <h1>We develop website this <span>“process”</span></h1>
        </div>
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 col-12">
            <div className="mainn__result__section">
              <div className="mock_title">
                 <div className="row">
                  <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                    <div className="web_developemnt">
                      <ul>
                        <li>
                        <a>web developemnt</a>
                      </li>
                      <li><a>Graphic design</a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-7 col-md-7 col-sm-12 col-12">
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
          <div className="col-lg-6 col-md-6 col-sm-12 col-12">
            <div className="right__result__section">
              <p>Provide a summary of your services, focusing on how you solve common IT problems.</p>
            </div>
          </div>
      </div>
    </div>
    <div className="mainn__star">
      <div className="row">
        <div className="col-lg-9 col-md-9 col-sm-12 col-12">
          <div className="star__img">
            <img src={subtractimg}/>
          </div>
          <div className="star__details">
            <h2>405</h2>
            <span><p>star</p>
            Reviews</span>
          </div>
        </div>
        <div className="col-lg-3 col-md-3 col-sm-12 col-12">
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
