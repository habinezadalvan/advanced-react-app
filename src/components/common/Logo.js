import React from 'react';
import logo from '../../assets/images/digitologo.png'


const Logo = () => {
    return (
        <div className="logo-container">
            <img className="logo" src={logo} alt="logo"/>
            <p>Digito</p>
        </div>
    )
}

export default Logo;