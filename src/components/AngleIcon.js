import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import '../styles/angleIcon.css';


const AngleIcon = ({iconName, hreference, direction}) => (
    <div className="angle-icon" onClick= {direction}>
        <a href={hreference}>
          <FontAwesomeIcon icon={iconName} />
        </a>
    </div>
)

AngleIcon.defaultProps = {
    iconName : 'faAngleDown',
    hreference: '/'
}
export default AngleIcon;