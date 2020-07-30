import React from 'react';
import images from '../../assets/imageUrls';

export default function PageNotFound() {
    return (
        <div style={{position: 'relative', height: "100vh", marginTop: '8vh', display: 'flex', justifyContent:'center', alignItems: 'center'}}>
            <img src={images.open_box} alt="openbox"  style={{position: 'absolute', top: 0, left: 0, width: '100%', zIndex: -1}}/>
            <div>
                <h1 style={{fontSize: '5rem'}}>PAGE NOT FOUND</h1>
            </div>
            <div  id="down" ></div>
            <div  id="reach-us"></div>
            <div  id="up"></div>
        </div>
    )
}
