import React from 'react'
import '../Styles/Team.css';
import SHARADSRIVASTAVA from '../img/Sharad Srivastava.jfif'
import MadhuSRIVASTAVA from '../img/sharla.jfif'
const Team = () => {
    
  return (
    <>
        <div className="wrapper-team">
                <h2 >OUR TEAM</h2>
                <hr />
                <div className="members">
                    <div className="team-mem">
                        <img src={SHARADSRIVASTAVA} alt='SHARAD SRIVASTAVA' />
                        <h4>SHARAD SRIVASTAVA </h4>
                        <p>Head Sales & Marketing</p>
                    </div>
                    <div className="team-mem">
                        <img src={MadhuSRIVASTAVA} alt='MADHU SRIVASTAVA' />
                        <h4>MADHU SRIVASTAVA </h4>
                        <p>Founder & Director</p>
                    </div>
                </div>
            </div>
    </>
  )
}

export default Team