import React from "react";
import MainCard from "../common/MainCard";
import automate from "../../assets/images/automation.png";
import Arrow from "../common/Arrow";

const ThirdSection = () => {
  return (
    <div className="third-section">
      <div className="third-section--left">
        <div className="third-section--left__container">
          <MainCard
            imageSrc={automate}
            text="Meet client"
            classname="small-main-card"
          />
          <MainCard
            imageSrc={automate}
            text="Meet client"
            classname="small-main-card"
          />
          <MainCard
            imageSrc={automate}
            text="Meet client"
            classname="small-main-card"
          />
        </div>
        <div>
          <Arrow />
        </div>
      </div>
      <div className="third-section--right">THIRD SECTION RIGHT</div>
    </div>
  );
};

export default ThirdSection;
