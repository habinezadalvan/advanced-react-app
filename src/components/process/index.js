import React from "react";
import { connect } from "react-redux";
import SubHeaderLink from "../common/SubHeaderLink";
import SubHeader from "../common/SubHeader";
import { selectProcess } from "../../actions";
import ProcessDetail from "./ProcessDetail";

class OurProcess extends React.Component {
  renderSubHeader = () => {
    return this.props.steps.map((process) => {
      return (
        <div onClick={() => this.props.selectProcess(process)} key={process.id}>
          <SubHeaderLink
            icon={process.icon}
            title={process.title}
          />
        </div>
      );
    });
  };
  render() {
    return (
      <div className="our-process">
        <SubHeader>{this.renderSubHeader()}</SubHeader>
        <ProcessDetail />
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
export default connect(mapStateToProps, { selectProcess })(OurProcess);
