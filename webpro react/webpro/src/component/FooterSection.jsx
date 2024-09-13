import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function FooterSection() {
  return (
    <div>
        <div className="footer__section">
            <div className="container">
                <div className="row">
                    <div className="footer__title">
                        <h3>Advanced <span>Web Pro</span></h3>
                    </div>
                    <div className="footer__webpro">
                        <div className="footer_heading">
                            <p>It should be designed to enhance usability and provide easy access to important details. Here’s how to structure the content for your IT website’s footer section:</p>
                        </div>
                        <div className="footer__link">
                            <ul>
                                <li>
                                    <a>Home</a>
                                </li>
                                <li>
                                    <a>About Us</a>
                                </li>
                                <li>
                                    <a>Services</a>
                                </li>
                                <li>
                                    <a>Contact Us</a>
                                </li>
                                <li>
                                    <a>Blogs</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div >
                    <FontAwesomeIcon icon="fa-brands fa-facebook-f" className="footer__icon" />
                    </div>
                </div>
            </div>
            <div className="footer__bottom">
                <p>© 2024 Adavnced web pro. All rights reserved.</p>
            </div>
        </div>
    </div>
  )
}