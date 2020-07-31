import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';


const AngleIcon = ({iconName, direction, classname}) => (
    <div className={classname} onClick= {direction}>
          <FontAwesomeIcon icon={iconName} />
    </div>
)

AngleIcon.defaultProps = {
    iconName : 'faAngleDown',
   
}
export default AngleIcon;