import React, { Fragment } from "react";
import moment from "moment";
import "../styles/displayvideo.css";
import "../styles/videonItem.css";

const DisplayVideo = ({ selectedVideo }) => {
  const videoSrc = `https://youtube.com/embed/${
    selectedVideo && selectedVideo.id.videoId
  }`;
  return (
    <Fragment>
      <div className="extended-video">
        <iframe
          src={videoSrc}
          title={selectedVideo && selectedVideo.snippet.title}
          allowFullScreen
          frameBorder="0"
          allow="accelerometer"
          id="lg-video"
          className="extended-iframe"
        />
      </div>
      <div className="video-info">
        <h2>{selectedVideo && selectedVideo.snippet.title}</h2>
        <p className="shallow">
          {moment(selectedVideo && selectedVideo.snippet.publishTime).fromNow() || ''}
        </p>
        <p>{selectedVideo && selectedVideo.snippet.description}</p>
      </div>
    </Fragment>
  );
};

export default DisplayVideo;
