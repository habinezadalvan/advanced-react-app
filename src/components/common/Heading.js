import React from "react";

const Heading = ({text1, text2}) => {
  return (
    <div className="heading">
      <h1>
        {text1} <span className="colored-heading">{text2}</span>
      </h1>
    </div>
  );
};

export default Heading;
