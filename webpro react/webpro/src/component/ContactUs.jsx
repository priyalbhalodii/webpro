import React from 'react'

export default function ContactUs() {
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
                            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                                <div className="form__details">
                                    <form>
                                        <input type="text" id="fname" name="fname" placeholder="Username" className="white-input" /><br />
                                        <input type="text" id="lname" name="lname" placeholder="Email" className="white-input" /><br />
                                        <input type="text" id="lname" name="lname" placeholder="Phone number" className="white-input" /><br />
                                        <input type="text" id="lname" name="lname" placeholder="How can we help you?" className="white-input bg_input" /><br />
                                        <button className="message__button">Send message</button>
                                    </form>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
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