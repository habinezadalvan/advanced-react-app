import '../styles/bgVideo.css';
import React from "react";
import videosrc from "../assets/Keyboard.mp4";

const HomeBackground = () => (
  <div className="home__bg-video">
    <video
      className="home__video-content"
      autoPlay="autoplay"
      muted
      loop="loop"
    >
      <source src={videosrc} type="video/mp4" />
      Your browser is not supported!
    </video>
  </div>
);

export default HomeBackground;
