import React from "react";

const PercentageCard = ({value, classname}) => {
  return (
    <div className={`percentage-card ${classname}`}>
      <p>{value}</p>
      <h1>100%</h1>
    </div>
  );
};

PercentageCard.defaultProps={
    value: '',
    classname:''
}
export default PercentageCard;
