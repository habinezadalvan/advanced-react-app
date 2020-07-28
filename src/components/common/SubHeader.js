import React from "react";
import BarsIcon from "./barsIcon";
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTh} from '@fortawesome/free-solid-svg-icons';
const SubHeader = (props) => {
  console.log('props ----', props);
  return (
     <div className="sub-header">
         {props.children}
         <BarsIcon icon={faTh} classname="th-icon" />
    </div>
  );
};

export default SubHeader;
