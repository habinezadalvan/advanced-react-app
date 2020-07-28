import React from "react";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import Heading from "../../common/Heading";
import images from "../../../assets/imageUrls";
import ContentAndBtn from "./ContentAndBtn";
import Videos from "./Videos";
import BgAnimation from "./BgAnimation";
import BgButton from "../../common/BgButton";
import AngleIcon from "../../common/AngleIcon";
import {scrollToTop} from '../../../vanillajs/index';

const FirstSection = () => {
  return (
    <div className="first-section" id="home">
      <div className="view">
        <div className="first-section__content">
          <div className="first-section__content--left">
            <ContentAndBtn />
          </div>
          <div className="first-section__content--right">
            <Videos />
          </div>
        </div>
        <div className="first-section__free-space">
          <div className="first-section__free-space--left "></div>
          <div className="first-section__free-space--right">
            <div className="extra-rectangle">
              <div className="second-section-heading">
                <Heading text1="Why we do" text2="what we do" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <BgAnimation />
      <div className="first-section__model"></div>
      <div className="moving-box">
        <img src={images.white_box} alt="whitebox" />
      </div>
      <div className="fixed-get-started hide" id="reach-us">
        <BgButton classname="small-btn" />
      </div>
      <div className="directing-btn" id="down">
        <AngleIcon iconName= {faAngleDown} hreference="#free_section" classname="angle-icon"/>
      </div>
      <div className="directing-btn invisible" id="up">
        <AngleIcon iconName= {faAngleUp} classname="angle-icon" direction={scrollToTop}/>
      </div>
    </div>
  );
};

export default FirstSection;
