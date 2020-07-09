import React from 'react';
import HomeBackground from './HomeBackground';
import HomeContent from './HomeContent';
import AngleIcon from './AngleIcon';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import GetStarted from './GetStarted';


const scrollToTop = () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
}

const LandingPage = (props) => {
    return (
        <div className="home" >
            <HomeBackground />
            <div className="home__model"></div>
           {props.children}
           <HomeContent />
           <div className="directing-btn" id="down">
                <AngleIcon iconName={faAngleDown} hreference="#next-view"/>
           </div>
           <div className="directing-btn invisible" id="up">
                <AngleIcon iconName={faAngleUp} direction={scrollToTop}/>
           </div>
           <div className="fixed-get-started invisible" id="getstarted">
                <GetStarted message="Get started"/>
           </div>
        </div>
    )
}

export default LandingPage;