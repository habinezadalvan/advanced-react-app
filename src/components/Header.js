import React from "react";
import "../styles/header.css";
import SearchBar from "./SearchBar";
import Logo from "./Logo";
import Nav from "./Nav";

const Header = ({classname}) => {
  return (
    <div className={`header ${classname}`} id="header">

      <div className="header__logo header--section">
          <Logo/>
      </div>
      <SearchBar/>
      <Nav home="home" about="about" contacts="contacts" />
    </div>
  );
};

export default Header;
