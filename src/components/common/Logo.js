import React from "react";
import images from "../../assets/imageUrls";
import { Link } from "@reach/router";

const Logo = () => {
  return (
    <Link to="/" className="link">
      <div className="logo-container">
        <img className="logo" src={images.digitol_white_logo} alt="logo" />
        <p>Digitol</p>
      </div>
    </Link>
  );
};

export default Logo;
