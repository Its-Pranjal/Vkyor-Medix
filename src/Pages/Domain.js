import React from 'react';
import { NavLink } from 'react-router-dom';
import '../Styles/Domain.css'
import NephrologyImage from '../img/nephrology.jpg';
import GyenologyImage from '../img/gyenology.jpg';
import UrologyImage from '../img/urology.jpg';
import PhysianImage from '../img/physian.jpg';


const Domain = () => {

  // const scrollToTop = () => {
  //   window.scrollTo(0, 0);
  // };

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
  

  return (
    <div id="domain">
      <h1>Our Products</h1>
      <div className="row-domain">
        <div className="box">
          <img className="card-img-top" src={NephrologyImage} alt="nephrology" />
          <h3>NEPHROLOGY</h3>
          <NavLink to="/nephrology" className="btn" onClick={scrollToTop}>PRODUCTS</NavLink>
        </div>
        <div className="box">
          <img className="card-img-top" src={GyenologyImage} alt="GYNECOLOGY" />
          <h3>GYNECOLOGY</h3>
          <NavLink to="/gynecology" className="btn" onClick={scrollToTop}>PRODUCTS</NavLink>
        </div>
        <div className="box">
          <img className="card-img-top" src={UrologyImage} alt="UROLOGY" />
          <h3>UROLOGY</h3>
          <NavLink to="/urology" className="btn" onClick={scrollToTop}>PRODUCTS</NavLink>
        </div>
        <div className="box">
          <img className="card-img-top"  src={PhysianImage} alt="PHYSIAN" />
          <h3>Physician</h3>
          <NavLink to="/physician" className="btn" onClick={scrollToTop}>PRODUCTS</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Domain;
