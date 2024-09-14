import React, { useState } from 'react';
import logo from "../assets/images/logo.png";

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
              <img src={logo} className="logo__section" alt="Logo" /> 
            </div>
            <div className="right__section">
              <button className="toggle__menu-btn" onClick={toggleMenu}>
               {isMenuOpen ? <span className="open-icon animate">✖</span> :
                <span className="open-icon">☰</span>}
              </button>

              {/* Use Bootstrap classes for offcanvas navbar */}
              <div className={`offcanvas offcanvas-end ${isMenuOpen ? 'show' : ''}`} tabIndex="-1" id="menu" aria-labelledby="menuLabel">
                <div className="offcanvas-header">
                  <h5 className="offcanvas-title" id="menuLabel">menu</h5>
                  <button type="button" className="btn-close" onClick={toggleMenu} aria-label="Close">

                  
                  </button>
                </div>
                <div className="offcanvas-body">
                  <ul>
                    <li className=''><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Contact</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Navbar;
