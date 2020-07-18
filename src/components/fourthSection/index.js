import React from "react";
import Heading from "../common/Heading";
import automate from '../../assets/images/automation.png';
import softwaredev from '../../assets/images/coding.png';
import graphicDesign from '../../assets/images/pen.png';
import digitalmarketing from '../../assets/images/digital-marketing.png';
import MainCard from "../common/MainCard";
import allappleproductsgif from '../../assets/images/appleproducts.gif';
import screenshot from '../../assets/images/screenshot.png'
const FourthSection = () => {
  return (
    <div className="fourth-section">
      <div className="fourth-section--left">
        <Heading text2="what we do"/>
        <div className="fourth-section__image">
          <img src={allappleproductsgif} alt="all apple products"/>
          <img src={screenshot} alt="screenshot" className="screenshot"/>
        </div>
      </div>
      <div className="fourth-section--right">
        <div className="fourth-section--right__container">
            <MainCard imageSrc={automate} text="Automate business systems" classname="big-main-card"/>
            <MainCard imageSrc={softwaredev} text="Software development" classname="big-main-card"/>
            <MainCard imageSrc={graphicDesign} text="Graphic design" classname="big-main-card"/>
            <MainCard imageSrc={digitalmarketing} text="Digital marketing" classname="big-main-card"/>
        </div>
      </div>
    </div>
  );
};

export default FourthSection;
