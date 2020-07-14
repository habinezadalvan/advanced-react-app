import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faVideo, faTh, faEllipsisV, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import "../styles/header.css";
import SearchBar from "./SearchBar";
import logoimage from "../assets/youtube-new-logo-png-youtube-redesign-new-logo-dark-theme-and-user-interface-revealed-620.png";

const Header = ({onSearchSubmit}) => {
  return (
    <div className="header">
      <div className="header__logo-area">
        <FontAwesomeIcon icon={faBars} />
        <div className="logo--img">
          <img src={logoimage} alt="logo"/>
        </div>
      </div>
      <div className="header__searchbar-area">
        <SearchBar onSearchSubmit={onSearchSubmit} />
      </div>
      <div className="header__icons-areas">
        <div className="header__icons-areas--free-space"></div>
        <div className="header__icons-areas--icons">
        <FontAwesomeIcon icon={faVideo} className="header__icon"/>
        <FontAwesomeIcon icon={faTh} className="header__icon"/>
        <FontAwesomeIcon icon={faEllipsisV} className="header__icon"/>
        <FontAwesomeIcon icon={faUserCircle} className="header__icon"/>
        </div>
      </div>
    </div>
  );
};

export default Header;
