import React from "react";

const MainCard = ({ imageSrc, text }) => {
  return (
    <div className="main-card">
      <img src={imageSrc} alt="automate" />
      <p>{text}</p>
    </div>
  );
};

export default MainCard;
