import React from 'react';
import logo from '../../assets/images/digito white logo.png'


const Logo = () => {
    return (
        <div className="logo-container">
            <img className="logo" src={logo} alt="logo"/>
            <p>Digitol</p>
        </div>
    )
}

export default Logo;