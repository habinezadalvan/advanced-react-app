import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contact = ({ icon, content }) => {
  return (
    <div className="contact">
      <FontAwesomeIcon icon={icon} />
      <p>{content}</p>
    </div>
  );
};

export default Contact;
