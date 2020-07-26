import React from 'react';
import images from '../../assets/imageUrls';


const Logo = () => {
    return (
        <div className="logo-container">
            <img className="logo" src={images.digitol_white_logo} alt="logo"/>
            <p>Digitol</p>
        </div>
    )
}

export default Logo;