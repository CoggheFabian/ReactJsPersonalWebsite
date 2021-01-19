import './HomePage.scss'
import facePicture from '../../images/foto_gezicht.jpg';
import facebookSvg from '../../images/facebook.svg';
import githubSvg from '../../images/github.svg';
import linkdInSvg from '../../images/linkedin.svg';

import React from 'react';

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
                        <a href=""><img src={facebookSvg} alt=""/></a>
                        <a href=""><img src={githubSvg} alt=""/></a>
                        <a href=""><img src={linkdInSvg} alt=""/></a>
                    </div>

                    <div id="navbar">
                        <a href="#" className="navigationButton">home</a>
                        <a href="#" className="navigationButton">blog</a>
                        <a href="#" className="navigationButton">projects</a>
                        <a href="#" className="navigationButton">skills</a>
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