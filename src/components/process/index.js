import React from "react";
import { connect } from "react-redux";
import SubHeaderLink from "../common/SubHeaderLink";
import SubHeader from "../common/SubHeader";
import ProcessDetail from "./ProcessDetail";
import { Link } from "@reach/router";



class OurProcess extends React.Component {

  
  renderSubHeader = () => {
    return this.props.steps.map((process) => {
      return (
        <div key={process.id} >
          <Link className="link" to={`/process/${process.id}`}>
          <SubHeaderLink
            icon={process.icon}
            title={process.title}
            id={process.id}
          />
          </Link>
        </div>
      );
    });
  };
  render() {
    return (
      <div className="our-process">
        <SubHeader>{this.renderSubHeader()}</SubHeader>
        <ProcessDetail  />
        <div id="up">
          <div id="down"></div>
          <div id="reach-us"></div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { steps: state.steps };
};
export default connect(mapStateToProps)(OurProcess);
