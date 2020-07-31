import React from "react";
import { useLocation } from "@reach/router";



const SubHeaderLink = ({icon, title, id}) => {

  const location = useLocation();
  const locationId = location.pathname.split('/')[2];

  return (
    <div className={`sub-header__link ${(Number(locationId) === id) ? 'active' : ''}`} >
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
