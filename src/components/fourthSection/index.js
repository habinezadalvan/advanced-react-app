import React from "react";
import Heading from "../common/Heading";
import images from '../../assets/imageUrls';
import MainCard from "../common/MainCard";
import WhatWeDoGraphic from "./WhatWeDoGraphic";
const FourthSection = ({referance, inView, entry}) => {
 
  return (
    <div className="fourth-section" id="services">
      <div className="fourth-section--left">
        <Heading text2="what we do"/>
        <WhatWeDoGraphic referance={referance} inView={inView} entry={entry}/>
      </div>
      <div className="fourth-section--right">
        <div className="fourth-section--right__container">
            <MainCard imageSrc={images.automation} text="Automate business systems" classname="big-main-card"/>
            <MainCard imageSrc={images.coding} text="Software development" classname="big-main-card"/>
            <MainCard imageSrc={images.pen} text="Graphic design" classname="big-main-card"/>
            <MainCard imageSrc={images.digital_marketing} text="Digital marketing" classname="big-main-card"/>
        </div>
      </div>
    </div>
  );
};

export default FourthSection;
