import React from "react";
import SocialIcon from "../common/SocialIcon";
import twitter from "../../assets/svg/twitter.svg";
import linkedin from "../../assets/svg/linkedin.svg";
import facebook from "../../assets/svg/facebook.svg";
import instagram from "../../assets/svg/instagram.svg";
import SendMessage from "./SendMessage";

const SixthSection = () => {
  return (
    <div className="sixth-section">
      <div className="sixth-section--left">
        <SendMessage />
      </div>
      <div className="sixth-section--right">

        <div className="extra-rectangle">
          <div className="social-icons-container">
            <SocialIcon icon={twitter} alt="twitter" />
            <SocialIcon icon={linkedin} alt="linkedin" />
            <SocialIcon icon={facebook} alt="facebook" />
            <SocialIcon icon={instagram} alt="instagram" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SixthSection;
