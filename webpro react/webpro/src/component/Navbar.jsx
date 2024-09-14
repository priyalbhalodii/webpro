import React, { useState } from "react";
import logo from "../assets/images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"; // Import the arrow right
function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="section-header bg-white ">
      <div className="container flex align-items-center">
        <div className="header-logo ">
          <a href="index.html " className=" ">
            <img src={logo} alt="Whitelabel" className="h-[50px]" />
          </a>
        </div>
        <div className={`header-nav  ${isMenuOpen ? "open" : " none"}`}>
          <div className="nav-main">
            <ul className="navbar-nav">
              <li className="nav-item dropdown-item menu-children">
                <a className="drop-nav-item" href="products.html">
                  More Products
                </a>
                <div className="toggal-nav">
                  <h3>More Products</h3>
                  <ul className="dropdown-menu-item ">
                    <li className="item-menu ">
                      <a
                        href="hospital_management_app.html"
                        className="nav-font "
                      >
                        Home
                      </a>
                    </li>
                    <li className="item-menu">
                      <a href="grocery_delivery_app.html" className="nav-font">
                        Our Service
                      </a>
                    </li>
                    <li className="item-menu">
                      <a href="food_delivery_app.html" className="nav-font">
                        About Us
                      </a>
                    </li>
                    <li className="item-menu">
                      <a href="school_management_app.html" className="nav-font">
                        Enquery
                      </a>
                    </li>
                    <li className="item-menu">
                      <a href="school_management_app.html" className="nav-font">
                        Contact Us
                      </a>
                    </li>
                  </ul>
                  <button className=" border-black px-6 py-3 rounded-[50px] border-[2px] flex ">
                    <a href="school_management_app.html" className="nav-font">
                      Start Your Project
                    </a>
                    <span className=" p-3 h-6 w-6 bg-green-500">
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className="h-6 w-6"
                      />
                    </span>
                  </button>
                </div>
                <span className="menuTriggle">
                  <i className="fas fa-chevron-down"></i>
                </span>
              </li>
              <li className="nav-item">
                <a href="contact_us.html">Contact Us</a>
              </li>
            </ul>
          </div>

          <button onClick={toggleMenu} className="toggle-menu">
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </button>
          <div className={`bodyoverlay ${isMenuOpen ? " open" : ""}`}></div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
