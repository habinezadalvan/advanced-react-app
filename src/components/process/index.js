import React, {useEffect} from "react";
import { connect } from "react-redux";
import SubHeaderLink from "../common/SubHeaderLink";
import SubHeader from "../common/SubHeader";
import ProcessDetail from "./ProcessDetail";
import { Link, useLocation } from "@reach/router";
import Ids from "../common/Ids";



const OurProcess = (props) =>{

  const location = useLocation();

  useEffect(() => {
    props.pathname(location.pathname)
  }, [location.pathname]);


  const renderSubHeader = () => {
    return props.steps.map((process) => {
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
    return (
      <div className="our-process">
        <SubHeader>{renderSubHeader()}</SubHeader>
        <ProcessDetail  />
        <Ids />
      </div>
    );
}

const mapStateToProps = (state) => {
  return { steps: state.steps };
};
export default connect(mapStateToProps)(OurProcess);
