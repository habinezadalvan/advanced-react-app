import React from "react";
import MainCard from "../common/MainCard";
import automate from "../../assets/images/automation.png";
import analysis from "../../assets/images/analysis.png";
import future from "../../assets/images/future.png";
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
            imageSrc={analysis}
            text="Analysing needs"
            classname="small-main-card"
          />
          <MainCard
            imageSrc={future}
            text="Planning & system design"
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
