import React from 'react';
import "../../Styles/Footer.css";
import { NavLink } from 'react-router-dom';

const Footer = () => {

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
  const disclaimerStyle = {
    fontSize: '12px',
  };

  return (
    <div className="footer-area-bottom  ">
      <div className="footer-container">
        <div className="footer-row">
          <div className="col-md-12">
            <div className="copyright text-center">
              <p className='span'>
                <span > Copyright &copy; 2016-2023 <strong>Vkyor Medix Private Limited</strong>. All Rights Reserved </span>
              </p>
            </div>
            <div className="credits">
              <NavLink onClick={scrollToTop}  to="/privacy"> Privacy Policy </NavLink>|
              <NavLink onClick={scrollToTop} to="/terms"> Terms of Use </NavLink>|
              <NavLink onClick={scrollToTop} to="/accessibility"> Accessibility</NavLink>
            </div>
            <p>
              <span style={disclaimerStyle}>
                <b>Disclaimer:</b> The information provided here is not medical advice and is not intended to replace medical advice offered by our health care provider. Please consult your health care provider for advice.
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
