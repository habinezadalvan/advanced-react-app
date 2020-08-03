import React, {useEffect} from "react";
import {connect} from 'react-redux';
import ExtraRectangle from "../LandingPage/sixthSection/ExtraRectangle";
import images from '../../assets/imageUrls';
import { useParams } from "@reach/router";
import TeamHeading from "./TeamHeading";
import TeamList from "./TeamList";
import MemberCard from "./MemberCard";




const ProcessDetail = (props) => {
//  const params = useParams();

//  useEffect(() => {
//     props.findProcess(Number(params.processId));
//  }, [Number(params.processId)]);

  return (
    <div className="team-content ">
    <div className="team-left-section">
       <div className="left-section__container">
           <TeamHeading title="IT team" />
           <TeamList>
               <MemberCard />
               <MemberCard />
               <MemberCard />
               <MemberCard />
               <MemberCard />
           </TeamList>
       </div>
    </div>
    <div className="team-right-section">
        <div className="upper-part">
            <div className="team-message-container">
                <TeamHeading title="Our message" />
                <div className="team-message">
                    <p>We feel privileged and empowered when working on your project. Our main  goal is to make sure that we deliver your product on time with high quality. We appreciate your trust.</p>
                    <br/>
                    <p>We enjoy your product as we are coding, as we enjoy our codes when coding your product. </p>
                </div>
            </div>
        </div>
        <div className="lower-part">
            <ExtraRectangle/>
        </div>
    </div>
</div>
  );
};

const mapStateToProps = (state) => {
    // return {
    //     selectedProcess: state.selectedProcess, 
    //     process : state.process
    // };
}
export default connect(mapStateToProps)(ProcessDetail);
