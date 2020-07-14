import React from "react";
import '../styles/videosarea.css';
import VideosList from "./VideosList";
import DisplayVideo from "./DisplayVideo";

const VideosArea = ({videos, onVideoSelect, selectedVideo}) => {
  return (
    <div className="videos-area">
      <div className="videos-area__displayer">
          <DisplayVideo selectedVideo ={selectedVideo} />
      </div>
      <div className="videos-area__list">
          <VideosList videos={videos} onVideoSelect={onVideoSelect}/>
      </div>
    </div>
  );
};

export default VideosArea;
