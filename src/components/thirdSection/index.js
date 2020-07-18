import React from 'react';
import MainCard from '../common/MainCard';
import automate from '../../assets/images/automation.png';


const ThirdSection = () => {
    return (
        <div className="third-section">
            <div className="third-section--left">
                <div className="third-section__left-container">
                    <MainCard imageSrc={automate} text="meet client" classname="small-main-card"/>
                </div>
            </div>
            <div className="third-section--right">THIRD SECTION RIGHT</div>
        </div>
    )
}

export default ThirdSection;