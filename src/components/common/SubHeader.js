import React from "react";
import SubHeaderLink from "./SubHeaderLink";
const SubHeader = ({children}) => {
  return (
     <div className="sub-header">
         {children}
    </div>
  );
};

export default SubHeader;
