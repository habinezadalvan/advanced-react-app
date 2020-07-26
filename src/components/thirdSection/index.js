import React from "react";
import MainCard from "../common/MainCard";
import images from "../../assets/imageUrls";
import Arrow from "../common/Arrow";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";

const ThirdSection = () => {
  return (
    <div className="third-section" id="section-three">
      <div className="third-section--left">
        <div className="third-section--left__container">
          <MainCard
            imageSrc={images.automation}
            text="Meet client"
            classname="small-main-card"
          />
          <MainCard
            imageSrc={images.analysis}
            text="Analysing needs"
            classname="small-main-card"
          />
          <MainCard
            imageSrc={images.future}
            text="Planning & system design"
            classname="small-main-card"
          />
        </div>
        <div>
          <Arrow />
        </div>
      </div>
      <div className="third-section--right">
        <div className="main">
          <div className="internal-cards-container">
            <MainCard
              imageSrc={images.together}
              text="Development process"
              classname="middle-card"
            />
          </div>
        </div>
        <div className="external-card">
          <MainCard
            imageSrc={images.code}
            text="Write code"
            classname="write-code"
          />
          <MainCard imageSrc={images.lab} text="Testing" classname="testing" />

          <MainCard imageSrc={images.feature} text="Features delivery" classname="features-delivery" />
          <MainCard imageSrc={images.training} text="Share updates to our client" classname="share-updates" />
          <MainCard imageSrc={images.optimization} text="Optimization" classname="optimization" />
          <MainCard imageSrc={images.review} text="Client feedback" classname="client-feedback" />
          <MainCard imageSrc={images.order} text="Product delivery" classname="product-delivery" />

          <div className="pointing-up-arrow">
              <div><FontAwesomeIcon icon={faAngleUp}/></div>
            <div className="vertical-statiff"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdSection;
