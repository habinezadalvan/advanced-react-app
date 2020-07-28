import React from "react";
import img from "../../assets/imageUrls";
const SubHeaderLink = ({icon, title}) => {

  return (
    <div className="sub-header__link" >
      <div className="icon">
        <img src={icon} alt={title} />
      </div>
      <div className="text">
        <p>{title}</p>
      </div>
    </div>
  );
};

export default SubHeaderLink;
