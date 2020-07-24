import React from 'react';
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import AngleIcon from '../common/AngleIcon';



const BgButton = ({classname}) => {
    return(
        <button className={classname}>
        <p>Reach us</p> 
        <AngleIcon iconName= {faAngleRight} hreference="/more"/>
    </button>
    )
}

export default BgButton;