import React, { Fragment } from "react";
import moment from "moment";
import "../styles/displayvideo.css";
import "../styles/videonItem.css";

const DisplayVideo = ({ selectedVideo }) => {
  const videoSrc = `https://youtube.com/embed/${
    selectedVideo && selectedVideo.id.videoId
  }`;

  if (!selectedVideo) {
    return (
        <div class="ui segment extended-video">
          <div class="ui active inverted dimmer">
            <div class="ui text loader">Loading</div>
          </div>
          <p></p>
        </div>
    );
  } else {
    return (
      <Fragment>
        <div className="extended-video">
          <iframe
            src={videoSrc}
            title={selectedVideo.snippet.title}
            allowFullScreen
            frameBorder="0"
            allow="accelerometer"
            id="lg-video"
            className="extended-iframe"
          />
        </div>
        <div className="video-info">
          <h2>{selectedVideo.snippet.title}</h2>
          <p className="shallow">
            {moment(
              selectedVideo.snippet.publishTime
            ).fromNow() || ""}
          </p>
          <p>{selectedVideo.snippet.description}</p>
        </div>
      </Fragment>
    );
  }
};

export default DisplayVideo;
