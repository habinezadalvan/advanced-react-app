import React from "react";
import Logo from "../common/Logo";
import Nav from "../header/Nav";

const Header = ({ classname }) => {
  return (
    <div className={`header ${classname}`} id="header">
      <div className="header__main-container">
        <div className="header__logo header--section">
          <Logo />
        </div>
      </div>
      <Nav link1="home" link2="services" link3="our work"  link4="partners" link5="our team"/>
    </div>
  );
};

export default Header;
