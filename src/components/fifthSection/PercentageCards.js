import React from 'react';
import PercentageCard from './PercentageCard';


const PercentageCards = () => {
    return(
        <div className="percentage-card-container">
           <PercentageCard value="Trust" classname="top-left"/>
           <PercentageCard value="Respect" classname="top-right"/>
           <PercentageCard value="Unity" classname="bottom-left"/>
           <PercentageCard value="Excellence" classname="bottom-right"/>
        </div>
    )
}

export default PercentageCards;