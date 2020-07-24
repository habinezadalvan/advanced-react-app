import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';


const AngleIcon = ({iconName, hreference, direction, classname}) => (
    <div className={classname} onClick= {direction}>
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