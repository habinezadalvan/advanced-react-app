import React from "react";
import Navigation from "./Navigation";

const Header = ({ classname, url }) => {
  return (
    <div className={`header ${classname}`} id="header">
       <Navigation url={url} />
    </div>
   
  );
};

export default Header;
