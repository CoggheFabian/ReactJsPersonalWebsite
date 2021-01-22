import './header.scss'


import React from 'react';
import logo from '../../images/FC.png';
import {Link} from "react-router-dom";
class Header extends React.Component {

    render() {
        return <>
            <nav>
                <img src={logo} alt=""/>
                <ul>
                    <Link to="/"><li>home</li></Link>
                    <Link to="/blog"><li>blog</li></Link>
                    <Link to="/projects"><li>projects</li></Link>
                    <Link to="/skills"><li>skills</li></Link>
                </ul>
            </nav>
        </>}
}

export default Header;