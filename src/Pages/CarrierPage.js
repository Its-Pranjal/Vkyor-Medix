import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/CarrierPage.css'; // Import the custom CSS file

const CarrierPage = () => {
 
  return (
    <div className="container-fluid ">
      <div className="welcome-message">
        <h1>Welcome to Vkyor Medix's Career Page!</h1>
        <i><p>𝖤𝗑𝗉𝗅𝗈𝗋𝖾 𝖾𝗑𝖼𝗂𝗍𝗂𝗇𝗀 𝗈𝗉𝗉𝗈𝗋𝗍𝗎𝗇𝗂𝗍𝗂𝖾𝗌 𝗍𝗁𝖺𝗍 𝖺𝗐𝖺𝗂𝗍 𝗒𝗈𝗎. <br/>𝖩𝗈𝗂𝗇 𝗎𝗌 𝗈𝗇 𝖺 𝗃𝗈𝗎𝗋𝗇𝖾𝗒 𝗈𝖿 𝗂𝗇𝗇𝗈𝗏𝖺𝗍𝗂𝗈𝗇 𝖺𝗇𝖽 𝗀𝗋𝗈𝗐𝗍𝗁.</p></i>
        <p>Your potential is our priority. Let's shape the future together!</p>
        <h1>Send your CV on below Email address</h1>
        <h1><Link to=''>marketing@vkyor.in</Link>  </h1>
      </div>
      
    </div>
  );
}

export default CarrierPage;


