// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomeScreenPage from './Pages/HomeScreenPage.js';
import Footer from './Components/Footer/Footer.js';
import Accessibility from './Components/Footer/accessibility.js';
import Privacy from './Components/Footer/privacy_policy.js';
import Terms from './Components/Footer/terms_of_use.js';
import Contact from './Pages/ContactPage.js';
import Carrier from './Pages/CarrierPage.js';
import GYNECOLOGY from './Domain/GYNECOLOGY.js'
import NEPHROLOGY from './Domain/NEPHROLOGY.js'
import UROLOGY from './Domain/UROLOGY.js';
import PHYSICIAN from './Domain/PHYSICIAN.js'
import About from './Pages/About.js';
import Domain from './Pages/Domain.js';
import Header from './Pages/Header.js';

const App = () => {
  return (
    <>
      
      <Router>
        <Header/>
        <Routes>
          <Route exact path="/" element={<HomeScreenPage />} />
          <Route path="/carrier" element={<Carrier />} />
          <Route path="/about" element={<About />} />
          <Route path="/our-products" element={<Domain />} />
          <Route path="/gynecology" element={<GYNECOLOGY />} />
          <Route path="/nephrology" element={<NEPHROLOGY />} />
          <Route path="/physician" element={<PHYSICIAN />} />
          <Route path="/urology" element={<UROLOGY />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/accessibility" element={<Accessibility />} />
        </Routes>
        <Footer/>
        </Router> 

    </>
  );
};

export default App;
