import React from 'react';
import SmallVideo from "../common/SmallVideo";

const Video = ({video, text}) => {
    return(
        <div className="video-box small-video-card">
        <h1>{text}</h1>
        <div className="small-video">
            <SmallVideo videosrc={video} />
        </div>
      </div>
    )
}

export default Video;