import React from "react";
import Heading from "../common/Heading";
import automate from '../../assets/images/automation.png';
import softwaredev from '../../assets/images/coding.png';
import graphicDesign from '../../assets/images/pen.png';
import digitalmarketing from '../../assets/images/digital-marketing.png';
import MainCard from "../common/MainCard";

const FourthSection = () => {
  return (
    <div className="fourth-section">
      <div className="fourth-section--left">
        <Heading text2="what we do"/>
      </div>
      <div className="fourth-section--right">
        <div className="fourth-section--right__container">
            <MainCard imageSrc={automate} text="Automate business systems"/>
            <MainCard imageSrc={softwaredev} text="Software development"/>
            <MainCard imageSrc={graphicDesign} text="Graphic design"/>
            <MainCard imageSrc={digitalmarketing} text="Digital marketing"/>
        </div>
      </div>
    </div>
  );
};

export default FourthSection;
