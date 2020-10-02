import React, {useState} from "react";
import profile from '../../../assets/imageUrls';
import SocialIcons from "../sixthSection/SocialIcons";

const FirstSection = () => {

  const [isClicked, setIsClicked] = useState(false)

  return (
    <div className="first-section" id="home">
      <div className="bio-section">
        <div className="bio">
          <h1>Software developer . UI/UX Designer . Leader . Health enthusiast</h1>
          <p>
            I'm a full-stack software developer experienced in javascript,
            react.js, and node.js. I enjoy working in a distributed team using
            Agile methodology. I am enthusiastic about solving all kinds of
            problems with technology and believe in learning new technologies.
            Having different backgrounds equips me with a broader way and
            applying technology in problem-solving.
          </p>
        </div>
      </div>
      <div className="profile-section">
        <div className="profile">
          <img src={profile.profile} alt="profile"/>
          <div className="names" >
            <p>Mr.Habineza Leon Christian</p>
          </div>
        </div>
      </div>
      <div className="toggleBtn" onClick={() => setIsClicked(!isClicked)}>links</div>
      <div style={{display: isClicked ? 'block' : 'none'}}><SocialIcons /></div>
    </div>
  );
};

export default FirstSection;
