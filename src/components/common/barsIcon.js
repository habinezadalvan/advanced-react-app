import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const BarsIcon = ({icon, classname}) => {
    return(
        <div className={`bars-icon ${classname}`}>
          <FontAwesomeIcon icon={icon}/>
      </div>
    )
}

export default BarsIcon;