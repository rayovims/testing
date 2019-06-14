import React from 'react';
import './header.css';
import Logo from '../../images/UPS_Logo.png';

const Header = () => {
    return (
        <div className="row" id="banner">
            <div className="col-1">
                <img src={Logo} alt="Logo" height="35vh" />
            </div>
            <span id="dash"></span>
            <div className="col-10 text">
                Systems Programming Windows Development Group
            </div>
        </div>
    )
}

export default Header;