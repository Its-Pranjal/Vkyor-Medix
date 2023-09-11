import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../Styles/Header.css";

function Header() {


    const scrollToTop = () => {
        const scrollDuration = 300; // Duration of scrolling animation in milliseconds
        const start = window.scrollY || window.pageYOffset;
        const end = 0;
        const startTime = performance.now();
      
        const animateScroll = (timestamp) => {
          const elapsed = timestamp - startTime;
          const progress = Math.min(elapsed / scrollDuration, 1);
          const easeInOutCubic = t => t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
          const newY = start - (start - end) * easeInOutCubic(progress);
      
          window.scrollTo(0, newY);
      
          if (progress < 1) {
            window.requestAnimationFrame(animateScroll);
          }
        };
      
        window.requestAnimationFrame(animateScroll);
      };

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    const handleBothClicks = () => {
        handleClick(); // Call the first function
        scrollToTop(); // Call the second function
      };
    
    return (
        <>
            <nav className="navbar sticky-top">
                <div className="nav-container">
                    <NavLink  to="/" className="nav-logo" onClick={scrollToTop}>
                        VKYOR MEDIX
                        
                    </NavLink>

                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className="nav-item">
                            <NavLink
                                
                                to="/"
                                className="active nav-links"
                                
                                onClick={handleBothClicks}
                                
                            >
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                
                                to="/about"
                                className="active nav-links"
                                
                                onClick={handleBothClicks}
                            >
                                About
                            </NavLink>
                        </li>
                        <li className="nav-item dropdown  ">
                            <NavLink className="nav-link dropdown-toggle " to="#" data-bs-toggle="dropdown" aria-expanded="false">PRODUCTS</NavLink>
                            <ul className="dropdown-menu " aria-labelledby="navbarScrollingDropdown">
                                <li><NavLink className="dropdown-item drop-color1" onClick={handleBothClicks} to="/gynecology">Gynecology</NavLink></li>
                                <li><NavLink className="dropdown-item drop-color1" onClick={handleBothClicks} to="/nephrology">Nephrology</NavLink></li>
                                <li><NavLink className="dropdown-item drop-color1" onClick={handleBothClicks} to="/Physician">Physician</NavLink></li>
                                <li><NavLink className="dropdown-item drop-color1" onClick={handleBothClicks} to="/urology">Urology</NavLink></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                
                                to="/contact"
                                className="active nav-links"
                                
                                onClick={handleBothClicks}
                            >
                                Contact Us
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                
                                to="/carrier"
                                className="active nav-links"
                                
                                onClick={handleBothClicks}
                            >
                                career
                            </NavLink>
                        </li>
                    </ul>
                    <div className="nav-icon" onClick={handleClick}>
                        <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Header;
