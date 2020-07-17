import React from "react";

const FirstSection = () => {
  return (
    <div className="first-section">
      <div className="first-section__content">
        <div className="first-section__content--left">FIRST SECTION LEFT</div>
        <div className="first-section__content--right">
          <div className="first-section__videos">
            FIRST SECTION RIGHT VIDOES AREA
          </div>
        </div>
      </div>
      <div className="first-section__free-space">
        <div className="first-section__free-space--left "></div>
        <div className="first-section__free-space--right">
          <div className="extra-rectangle"></div>
        </div>
      </div>
    </div>
  );
};

export default FirstSection;
