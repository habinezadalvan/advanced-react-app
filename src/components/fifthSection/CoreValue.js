import React from "react";

const CoreValue = ({letter,coreValue, text}) => {
  return (
    <div className="core-value">
      <div className="core-value__box"><h1>{letter}</h1></div>
      <div className="core-value__content">
          <p>
            <strong className="core-value__strong">{coreValue} </strong>
          {text} 
          </p>
      </div>
    </div>
  );
};

export default CoreValue;
