import React from "react";
import SocialIcon from "../../common/SocialIcon";
import twitter from "../../../assets/svg/twitter.svg";
import linkedin from "../../../assets/svg/linkedin.svg";
import facebook from "../../../assets/svg/facebook.svg";
import instagram from "../../../assets/svg/instagram.svg";

const ExtraRectangle = () => {
  return (
        <div className="extra-rectangle">
          <div className="social-icons-container">
            <SocialIcon icon={twitter} alt="twitter" site="https://twitter.com/digitol5" />
            <SocialIcon icon={linkedin} alt="linkedin" />
            <SocialIcon icon={facebook} alt="facebook" />
            <SocialIcon icon={instagram} alt="instagram" />
          </div>
        </div>
  );
};

export default ExtraRectangle;