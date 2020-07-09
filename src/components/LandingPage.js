import React from 'react';
import HomeBackground from './HomeBackground';
import HomeContent from './HomeContent';
import AngleIcon from './AngleIcon';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import GetStarted from './GetStarted';


const LandingPage = (props) => {
    return (
        <div className="home" >
            <HomeBackground />
            <div className="home__model"></div>
           {props.children}
           <HomeContent />
           <div className="directing-btn" id="down">
                <AngleIcon iconName={faAngleDown} />
           </div>
           <div className="directing-btn invisible" id="up">
                <AngleIcon iconName={faAngleUp} />
           </div>
           <div className="fixed-get-started invisible" id="getstarted">
                <GetStarted message="Get started"/>
           </div>
        </div>
    )
}

export default LandingPage;