import React from 'react'
import welcomeVkyorMedix from '../video/welcomeVkyorMedix.mp4'

import '../Styles/Welcome.css';
const Welcome = () => {
    return (
        <>
            <div className="welcome">
				<video autoPlay muted id="myVideo">
					<source src={welcomeVkyorMedix} type="video/mp4" />
					Your browser does not support the video tag.
				</video>
			</div>

        </>
    )
}

export default Welcome