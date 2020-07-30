import React from "react";
import { connect } from "react-redux";
import SubHeaderLink from "../common/SubHeaderLink";
import SubHeader from "../common/SubHeader";
import ProcessDetail from "./ProcessDetail";
import { Link } from "@reach/router";



const isActive = ({isCurrent}) => {
 return isCurrent ? {className: 'active'} : {};
};

const ExactNavLink = (props) => (
  <Link getProps= {isActive} {...props} />
);


class OurProcess extends React.Component {

  renderSubHeader = () => {
    return this.props.steps.map((process) => {
      return (
        <div key={process.id} onClick={() => this.setState({isActive : process.id})} >
          <ExactNavLink className="link" to={`/process/${process.id}`}>
          <SubHeaderLink
            icon={process.icon}
            title={process.title}
            id={process.id}
          />
          </ExactNavLink>
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
