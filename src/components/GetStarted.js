import React from 'react';
import {faAngleRight} from '@fortawesome/free-solid-svg-icons';
import '../styles/getstarted.css';
import AngleIcon from './AngleIcon';


const GetStarted = ({message}) => {
    return(
        <div className="get-started-button">
            <a href="/">{message}</a>
            <AngleIcon iconName= {faAngleRight} hreference="/more"/>
        </div>
    );
};

export default GetStarted;
