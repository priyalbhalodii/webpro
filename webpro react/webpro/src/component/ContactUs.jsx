import React, { useState } from 'react'

export default function ContactUs() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        phoneNumber: '',
        message: ''
    });

    const handleChange = (event) => {
        
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    };
  

    const handleSubmit = (event) => {
        event.preventDefault();
        // Here you would typically handle form submission
       
    };

    return (
        <div>
            <div className="contact_us_section">
                <div className="container">
                    <div className="row">
                        <div className="title">
                            <h1>Contact Us</h1>
                        </div>
                        <div className="heading__title">
                            <h1>Join us with
                                <span>“Advanced Web Pro”</span>
                            </h1>
                        </div>
                    </div>
                    <div className="form__section">
                        <div className="row">
                            <div className="lg:w-[50%] md:w-[50%] sm:w-full w-full">
                                <div className="form__details">
                                    <form onSubmit={handleSubmit}>
                                        <input type="text" onChange={handleChange} id="firstName" name="username" placeholder="username" className="white-input" /><br />
                                        <input  onChange={handleChange} type="text" id="lname" name="email" placeholder="Email" className="white-input" /><br />
                                        <input  onChange={handleChange} type="number" id="lname" name="phoneNumber" placeholder="Phone number" className="white-input" /><br />
                                        <textarea  onChange={handleChange} type="text" id="lname" name="message" placeholder="How can we help you?" className="white-input bg_input" /><br />
                                        <button className="message__button">Send message</button>
                                    </form>
                                </div>
                            </div>
                            <div className="lg:w-[50%] md:w-[50%] sm:w-full w-full">
                                <div className="reviews__section">
                                    <div className="sub__reviwes">
                                        <h3>Email</h3>
                                        <span>abc123@gmail.com</span>
                                    </div>
                                    <div className="sub__reviwes">
                                        <h3>Phone number</h3>
                                        <span>+91 00000 00000</span>
                                    </div>
                                    <div className="sub__reviwes">
                                        <h3>Address</h3>
                                        <span>Petlad, 2nd floor,Bank House,College Chokdi Road, Petlad 388450.</span>
                                    </div>
                                    <div className="sub__reviwes">
                                        <h3>Open Time</h3>
                                        <span>10:00am To 07:00pm</span>
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