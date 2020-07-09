import React from 'react';
import '../styles/homeContent.css';
import GetStarted from './GetStarted';



const HomeContent = () => {
    return(
        <div className="home__content">
                <div className="home__content--left">
                    <GetStarted message="Get started"/>
                </div>
                <div className="home__content--right" >
                    <h1>Have adventure and <span className="header--big-letters">search</span> for any kind of picture you want!</h1>
                </div>
           </div>
    );
}

export default HomeContent;