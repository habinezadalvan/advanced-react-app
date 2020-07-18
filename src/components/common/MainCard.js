import React from "react";

const MainCard = ({ imageSrc, text, classname }) => {
  return (
    <div className={classname}>
      <img src={imageSrc} alt="automate"/>
      <p>{text}</p>
    </div>
  );
};

export default MainCard;
