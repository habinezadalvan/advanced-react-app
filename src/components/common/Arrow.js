import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

const Arrow = () => {
  return (
    <div className="arrow">
      <div className="arrow__stiff"></div>
      <div className="arrow__pointer-right">
        <FontAwesomeIcon icon={faAngleRight} />
      </div>
      <div className="arrow__pointer-down">
        <FontAwesomeIcon icon={faAngleDown} />
      </div>
    </div>
  );
};

export default Arrow;
