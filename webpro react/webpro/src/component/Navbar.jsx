import React, { useState } from 'react';
import logo from "../assets/images/logo.png";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <section className="navbar__section h-[80px]">
      <div className="container">
        <div className="row">
          <div className="main__section flex justify-between w-full">
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
                  {/* <h5 className="offcanvas-title" id="menuLabel">menu</h5> */}
                  <button type="button" className="btn-close" onClick={toggleMenu} aria-label="Close">

                  
                  </button>
                </div>
                <div 
  className={` fixed top-0 right-0 h-full bg-[#453b57]  w-[25vw] transform transition-transform duration-300 ease-in-out  mt-[80px]
             ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} w-full`} 
>
  <ul className="flex flex-col ml-[20px] mt-[20px] h-full space-y-10 text-white text-xl">
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
      </div>
    </section>
  );
}

export default Navbar;
