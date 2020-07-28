import React from "react";
import MainCard from "../../common/MainCard";
import images from "../../../assets/imageUrls";
import Arrow from "../../common/Arrow";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import { Link } from "@reach/router";

class ThirdSection extends React.Component {
  renderFirstThreeSteps = () => {
    console.log("this.props", this.props.steps);
    const firstThreeSteps = this.props.steps.slice(0, 3);
    return firstThreeSteps.map((process) => {
      return (
        <div key={process.id}>
          <Link to={`process/${process.id}`}>
            <MainCard
              imageSrc={process.icon}
              text={process.title}
              classname={process.classname}
            />
          </Link>
        </div>
      );
    });
  };

  renderOtherSteps = () => {
    console.log("steps", this.props.steps.slice(3));
    const otherSteps = this.props.steps.slice(3);

    return otherSteps.map((process) => {
      return (
        <div key={process.id}>
          <Link to={`process/${process.id}`}>
            <MainCard
              imageSrc={process.icon}
              text={process.title}
              classname={process.classname}
            />
          </Link>
        </div>
      );
    });
  };
  render() {
    return (
      <div className="third-section" id="section-three">
        <div className="third-section--left">
          <div className="third-section--left__container">
            {this.renderFirstThreeSteps()}
            {/* <MainCard
              imageSrc={images.group}
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
            /> */}
          </div>
          <div>
            <Arrow />
          </div>
        </div>
        <div className="third-section--right">
          <div className="main">
            <div className="internal-cards-container">
              <Link to="process/1">
                <MainCard
                  imageSrc={images.together}
                  text="Development process"
                  classname="middle-card"
                />
              </Link>
            </div>
          </div>
          <div className="external-card">
            {this.renderOtherSteps()}

            {/* <MainCard
              imageSrc={images.code}
              text="Write code"
              classname="write-code"
            />
            <MainCard
              imageSrc={images.lab}
              text="Testing"
              classname="testing"
            />

            <MainCard
              imageSrc={images.feature}
              text="Features delivery"
              classname="features-delivery"
            />
            <MainCard
              imageSrc={images.training}
              text="Share updates to our client"
              classname="share-updates"
            />
            <MainCard
              imageSrc={images.optimization}
              text="Optimization"
              classname="optimization"
            />
            <MainCard
              imageSrc={images.review}
              text="Client feedback"
              classname="client-feedback"
            />
            <MainCard
              imageSrc={images.order}
              text="Product delivery"
              classname="product-delivery"
            /> */}

            <div className="pointing-up-arrow">
              <div>
                <FontAwesomeIcon icon={faAngleUp} />
              </div>
              <div className="vertical-statiff"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  // console.log("state", state);
  return state;
};
export default connect(mapStateToProps)(ThirdSection);
