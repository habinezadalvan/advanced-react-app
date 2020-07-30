import React from "react";
import Navigation from "./Navigation";

const Header = ({ classname }) => {
  return (
    <div className={`header ${classname}`} id="header">
       <Navigation />
    </div>
   
  );
};

export default Header;
