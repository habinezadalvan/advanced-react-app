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
    const firstThreeSteps = this.props.steps.slice(0, 3);
    return firstThreeSteps.map((process) => {
      return (
        <div key={process.id}>
          <Link className="link" to={`/process/${process.id}`}>
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
    const otherSteps = this.props.steps.slice(3);

    return otherSteps.map((process) => {
      return (
        <div key={process.id}>
          <Link className="link" to={`/process/${process.id}`}>
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
          </div>
          <div>
            <Arrow />
          </div>
        </div>
        <div className="third-section--right">
          <div className="main">
            <div className="internal-cards-container">
              <Link className="link" to="/process/1">
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
  return state;
};
export default connect(mapStateToProps)(ThirdSection);
