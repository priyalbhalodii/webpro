import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import {motion} from 'framer-motion'
export default function FooterSection() {
  return (
    <div>
        <div className="footer__section">
            <div className="container">
                <motion.div className="row justify-center"
                initial={{ opacity: 0, y: 0,scale:0.8 }} // Initial state
                whileInView={{ opacity: 1, y: 0,scale:1 }} // Animation when in view
                transition={{ duration: 1, ease: 'easeOut' }} // Transition options
                >
                    <div className="footer__title text-center">
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
                        
                    <div className="flex space-x-10 mt-10"> {/* Added flex container for icons */}
                        <a href="#" className="text-[#fff] ">
                            <FontAwesomeIcon 
                                icon={faFacebookF} 
                                size="xl" // Increased size to "2xl"
                                className="p-3 h-6 w-6 rounded-full bg-[#453B57] "
                            />
                        </a>
                        <a href="#" className="text-[#fff] ">
                            <FontAwesomeIcon 
                                icon={faInstagram} 
                                size="xl" // Increased size to "2xl"
                                className="p-3 rounded-full bg-[#453B57] "  
                            />
                        </a>
                        <a href="#" className="text-[#fff] ">
                            <FontAwesomeIcon 
                                icon={faTwitter} 
                                size="xl" // Increased size to "2xl"
                                className="p-3 rounded-full bg-[#453B57] "
                            />
                        </a>
                    </div>
                    {/* <FontAwesomeIcon icon="fa-brands fa-facebook-f" className="footer__icon" /> */}
                    </div>
                </motion.div>
            </div>
            <div className="footer__bottom">
                <p>© 2024 Adavnced web pro. All rights reserved.</p>
            </div>
        </div>
    </div>
  )
}