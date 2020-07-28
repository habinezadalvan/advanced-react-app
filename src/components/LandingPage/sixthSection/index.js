import React from "react";
import SendMessage from "./SendMessage";
import ExtraRectangle from "./ExtraRectangle";

const SixthSection = () => {
  return (
    <div className="sixth-section">
      <div className="sixth-section--left">
        <SendMessage />
      </div>
      <div className="sixth-section--right">
        <ExtraRectangle />
      </div>
    </div>
  );
};

export default SixthSection;
