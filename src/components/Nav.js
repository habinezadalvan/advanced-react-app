import React from "react";
import '../styles/nav.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';

const Nav = () => {
  return (
    <div className="header__nav header--section">
      <ul>
        <li><a href="#">home</a></li>
        <li><a href="#">about</a></li>
        <li><a href="#">contacts</a></li>
      </ul>
      <div className="bars-icon">
          <FontAwesomeIcon icon={faBars}/>
      </div>
    </div>
  );
};

export default Nav;
