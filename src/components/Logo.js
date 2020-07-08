import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import '../styles/logo.css';

const Logo = () => {
  return (
    <div className="header__logo header--section">
      <h1 style={{ color: "white" }}>
        Se<span className="header__logo--big"><FontAwesomeIcon icon={faSearch}/></span>rche<span className="header__logo--big">R</span>
      </h1>
    </div>
  );
};

export default Logo;
