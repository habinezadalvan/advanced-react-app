import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';

const Nav = ({link1, link2, link3, link4, link5}) => {
  return (
    <div className="header__nav header--section">
      <ul>
        <li><a href="/">{link1}</a></li>
        <li><a href="/">{link2}</a></li>
        <li><a href="/">{link3}</a></li>
        <li><a href="/">{link4}</a></li>
        <li><a href="/">{link5}</a></li>
      </ul>
      <div className="bars-icon">
          <FontAwesomeIcon icon={faBars}/>
      </div>
    </div>
  );
};

export default Nav;