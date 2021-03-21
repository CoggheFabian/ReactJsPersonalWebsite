import './HomePage.scss'
import facePicture from '../../images/foto_gezicht.jpg';
import facebookSvg from '../../images/facebook.svg';
import githubSvg from '../../images/github.svg';
import linkdInSvg from '../../images/linkedin.svg';

import React from 'react';
import {Link} from "react-router-dom";

class HomePage extends React.Component {
    render() {
        return <>
            <div id="homepageContainer">
                <div id="page">
                    <img src={facePicture} alt="" id="faceImg"/>

                    <div id="personalInfo">
                        <h1>Fabian Cogghe</h1>
                        <p>Software engineer</p>
                    </div>

                    <div id="socialMedia">

                        <a href="https://www.facebook.com/fabian.cogghe.33/"><img src={facebookSvg} alt=""/></a>
                        <a href="https://github.com/CoggheFabian"><img src={githubSvg} alt=""/></a>
                        <a href="https://www.linkedin.com/in/fabian-cogghe-13777a178/"><img src={linkdInSvg} alt=""/></a>
                    </div>

                    <div id="navbar">
                        <a href="#" className="navigationButton">home</a>
                        <Link  class="navigationButton" to="/blog">blog</Link>
                        <Link  class="navigationButton" to="/projects">projects</Link>
                        <Link  class="navigationButton" to="/skills">skills</Link>
                    </div>

                </div>
                <div id="computerImg" style={{
                    backgroundImage: `url(${process.env.PUBLIC_URL + '/mac_photo.png'})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: '100% 100%',
                }}>
            </div>
       </div>
    </>}
}

export default HomePage;