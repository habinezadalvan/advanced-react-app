import React from "react";

const MainCard = ({ imageSrc, text, classname, notation, id }) => {
  return (
    <div className={classname}>
      <img src={imageSrc} alt="automate"/>
      <p>{text}</p>
      <div className={`${notation}`} style={{display: `${notation ? 'flex' : 'none'}`}}>
        <p>{id}</p>
      </div>
    </div>
  );
};

export default MainCard;
