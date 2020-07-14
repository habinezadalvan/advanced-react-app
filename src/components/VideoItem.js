import React from "react";
import moment from "moment";
import "../styles/videonItem.css";
const VideoItem = ({ video, onVideoSelect }) => {
  const videoSrc = `https://youtube.com/embed/${video.id.videoId}`;

  return (
    <div className="video-container" onClick={() => onVideoSelect(video)}>
      <div className="video-image">
        <iframe
          src={videoSrc}
          title={video.snippet.title}
          frameBorder="0"
          allow="accelerometer"
          onClick={() => onVideoSelect(video)}
        />
      </div>
      <div className="video-title">
        <h2>{video.snippet.title}</h2>
        <p className="shallow">{moment(video.snippet.publishTime).fromNow()}</p>
      </div>
    </div>
  );
};

export default VideoItem;
