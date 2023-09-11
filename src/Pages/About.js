import React from 'react'
import aboutImage from  '../img/about.jpg'
import '../Styles/About.css';
const About = () => {
    return (
        <>
            <div className="heading">
                <h1>𝓐𝓫𝓸𝓾𝓽 𝓥𝓴𝔂𝓸𝓻 𝓜𝓮𝓭𝓲𝔁 </h1>
                <div className="about-container">
                    <section className="about">
                        <div className="about-image">
                            <img src={aboutImage} alt="About Vkyor" />
                        </div>
                        <div className="about-content">
                            <p>
                                We are VKYOR<br />
                                VKYOR was launched on 15<sup>th</sup> March 2017.<br />
                                Vkyor medix is
                                an India based, global innovation led pharmaceutical company
                                working in development, manufacturing, and distribution of  wide 
                                range of pharmaceutical products. <br />
                                Our research is inclined towards innovative solutions for modern healthcare challenges and is
                                committed to improve the health and well being of the society.<br />
                                our goal is to help people around the world have better lives.
                                With our humble beginnings in 2016, Vkyor medix has grown to
                                become one of the trusted names among pharmaceutical companies in
                                India.<br /> We develop our products with utmost care & responsibility
                                since at Vkyor medix, we are motivated by below values to provide
                                you with wholistic healthcare.
                                <ul className="highlight-part">
                                    <li>✔<span className="highlight">Quality</span></li>
                                    <li>✔<span className="highlight">Reliability</span></li>
                                    <li>✔<span className="highlight">Consistency</span></li>
                                    <li>✔<span className="highlight">Trust</span></li>
                                    <li>✔<span className="highlight">Innovation</span></li>
                                </ul>
                            </p>
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}

export default About













