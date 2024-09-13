import React from 'react'
import silderimg from '../assets/images/silder_img.png'

export default function OurWorkSection() {
  return (
    <section className="our_work_section ">
        <div className="container right_side">
          <div className="row">
            <div className="title">
              <h1>our services</h1>
            </div>
            <div className="heading__title">
              <h1>Making<span>“brands” </span>
                a damn site better.</h1>
                <div className="mainn__silder">
                  <div className="silder">
                    <div className="img">
                      <img src={silderimg} className="img"/>
                    </div>
                    <div className="mock__up">
                      <div className="mock_title">
                        <ul>
                          <li>
                            <a>Website design</a>
                            <a>Ui/Ux</a>
                            <a>Mock up</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="silder">
                    <div className="img">
                      <img src={silderimg} className="img"/>
                    </div>
                    <div className="mock__up">
                      <div className="mock_title">
                        <ul>
                          <li>
                            <a>Website design</a>
                            <a>Ui/Ux</a>
                            <a>Mock up</a>
                          </li>
                        </ul>
                      </div>
                     
                    </div>
                  </div>
                  <div className="silder">
                    <div className="img">
                      <img src={silderimg} className="img"/>
                    </div>
                    <div className="mock__up">
                      <div className="mock_title">
                        <ul>
                          <li>
                            <a>Website design</a>
                            <a>Ui/Ux</a>
                            <a>Mock up</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
        <div className="ourservices__border">
          
        </div>
      </section>
      
  )
}
