// src/components/Navbar.js
import React, { useState } from 'react';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <section className="navbar__section">
      <div className="container">
        <div className="row">
          <div className="main__section">
            <div className="left__sectionn">
              <img src="images/logo.png" className="logo__section" alt="Logo" /> 
            </div>
            <div className="right__section">
              <button className="toggle__menu-btn" onClick={toggleMenu}>
                <span className="open-icon">☰</span>
                <span className="close-icon">✖</span>
              </button>
              <div className={`menu ${isMenuOpen ? 'show' : ''}`} id="menu"> 
                <ul>
                  <li><a href="#">Home</a></li>
                  <li><a href="#">About</a></li>
                  <li><a href="#">Services</a></li>
                  <li><a href="#">Contact</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Navbar;
