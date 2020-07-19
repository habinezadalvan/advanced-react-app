import React from "react";
import Heading from "../common/Heading";
import automate from '../../assets/images/automation.png';
import softwaredev from '../../assets/images/coding.png';
import graphicDesign from '../../assets/images/pen.png';
import digitalmarketing from '../../assets/images/digital-marketing.png';
import MainCard from "../common/MainCard";
import WhatWeDoGraphic from "./WhatWeDoGraphic";
const FourthSection = ({referance, inView, entry}) => {
 
  return (
    <div className="fourth-section">
      <div className="fourth-section--left">
        <Heading text2="what we do"/>
        <WhatWeDoGraphic referance={referance} inView={inView} entry={entry}/>
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
