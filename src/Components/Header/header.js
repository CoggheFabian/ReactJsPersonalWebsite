import './header.scss'


import React from 'react';
import logo from '../../images/FC.png';
class Header extends React.Component {

    render() {
        return <>
            <nav>
                <img src={logo} alt=""/>
                <ul>
                    <a href=""><li>home</li></a>
                    <a href=""><li>blog</li></a>
                    <a href=""><li>projects</li></a>
                    <a href=""><li>skills</li></a>
                </ul>
            </nav>
        </>}
}

export default Header;