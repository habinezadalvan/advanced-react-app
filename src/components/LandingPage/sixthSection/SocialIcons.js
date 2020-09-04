import React from "react";
import SocialIcon from "../../common/SocialIcon";
import twitter from "../../../assets/svg/twitter.svg";
import linkedin from "../../../assets/svg/linkedin.svg";
import facebook from "../../../assets/svg/facebook.svg";
import instagram from "../../../assets/svg/instagram.svg";
import github from "../../../assets/svg/github.svg";

const SocialIcons = () => {
  return (
    <div className="social-icons-container">
       <div className="icon-zero">
        <SocialIcon
          icon={github}
          alt="twitter"
          site="https://github.com/habinezadalvan"
        />
      </div>
      <div className="icon-one">
        <SocialIcon
          icon={twitter}
          alt="twitter"
          site="https://twitter.com/habinezachrist8" 
        />
      </div>
      <div className="icon-two">
        <SocialIcon icon={linkedin} alt="linkedin" site="https://www.linkedin.com/in/christian-habineza-191106129/"/>
      </div>
      <div className="icon-three">
        {" "}
        <SocialIcon icon={facebook} alt="facebook"  site="https://web.facebook.com/habineza.leonchristian"/>
      </div>

      <div className="icon-four">
        {" "}
        <SocialIcon icon={instagram} alt="instagram" site="https://www.instagram.com/dalda_chris/"/>
      </div>
    </div>
  );
};

export default SocialIcons;
