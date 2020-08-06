import React from "react";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import AngleIcon from "../common/AngleIcon";

const BgButton = ({ classname }) => {
  return (
    <a href="#message-us" className="link">
      <button className={classname}>
        <p>Reach us</p>
        {classname === "bg-btn" ? (
          <AngleIcon iconName={faAngleRight} classname="angle-icon" />
        ) : (
          <AngleIcon iconName={faAngleRight} classname="angle-icon-small" />
        )}
      </button>
    </a>
  );
};

export default BgButton;
