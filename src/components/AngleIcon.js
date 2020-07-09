import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import '../styles/angleIcon.css';

const AngleIcon = ({iconName}) => (
    <div className="angle-icon">
        <FontAwesomeIcon icon={iconName} />
    </div>
)
export default AngleIcon;