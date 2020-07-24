import React from "react";
import MainCard from "../common/MainCard";
import automate from "../../assets/images/automation.png";
import analysis from "../../assets/images/analysis.png";
import future from "../../assets/images/future.png";
import together from "../../assets/images/together.png";
import testing from "../../assets/images/lab.png";
import features from "../../assets/images/feature.png";
import share_updates from "../../assets/images/training.png";
import review from "../../assets/images/review.png";
import optimization from "../../assets/images/optimization.png";
import code from "../../assets/images/code.png";
import delivery from "../../assets/images/order.png";
import Arrow from "../common/Arrow";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";

const ThirdSection = () => {
  return (
    <div className="third-section" id="section-three">
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
      <div className="third-section--right">
        <div className="main">
          <div className="internal-cards-container">
            <MainCard
              imageSrc={together}
              text="Development process"
              classname="middle-card"
            />
          </div>
        </div>
        <div className="external-card">
          <MainCard
            imageSrc={code}
            text="Write code"
            classname="write-code"
          />
          <MainCard imageSrc={testing} text="Testing" classname="testing" />

          <MainCard imageSrc={features} text="Features delivery" classname="features-delivery" />
          <MainCard imageSrc={share_updates} text="Share updates to our client" classname="share-updates" />
          <MainCard imageSrc={optimization} text="Optimization" classname="optimization" />
          <MainCard imageSrc={review} text="Client feedback" classname="client-feedback" />
          <MainCard imageSrc={delivery} text="Product delivery" classname="product-delivery" />

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
