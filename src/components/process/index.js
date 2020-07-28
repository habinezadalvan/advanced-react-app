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

  
  componentDidMount(){
    console.log('did mount =====')
  }
  componentDidUpdate(){
    console.log('did update ---')
    console.log('this.props ======', this.props);

  }
  renderSelectedProcess = () => {
  }
  renderSubHeader = () => {
    return this.props.steps.map((process) => {
      return (
        <div key={process.id}>
          <ExactNavLink className="link" to={`/process/${process.id}`}>
          <SubHeaderLink
            icon={process.icon}
            title={process.title}
          />
          </ExactNavLink>
        </div>
      );
    });
  };
  render() {
    return (
      <div className="our-process">
        {this.renderSelectedProcess()}
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
