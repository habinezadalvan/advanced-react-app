import React from 'react';
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import AngleIcon from '../common/AngleIcon';



const BgButton = ({classname}) => {
    return(
        <button className={classname} >
        <p>Reach us</p> 
        {classname === 'bg-btn' 
        ?( <AngleIcon iconName= {faAngleRight} hreference="#message-us" classname="angle-icon"/>) 
         : <AngleIcon iconName= {faAngleRight} hreference="#message-us" classname="angle-icon-small"/>}
    </button>
    )
}

export default BgButton;