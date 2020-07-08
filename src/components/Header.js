import React from "react";
import "../styles/header.css";
import SearchBar from "./SearchBar";
import Logo from "./Logo";
import Nav from "./Nav";

const Header = () => {
  return (
    <div className="header">

      <div className="header__logo header--section">
          <Logo/>
      </div>
      <SearchBar/>
      <Nav/>
    </div>
  );
};

export default Header;
