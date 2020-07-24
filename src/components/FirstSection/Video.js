import React from 'react';
import SmallVideo from "../common/SmallVideo";
import covid19 from "../../assets/videos/covid19.mp4";
import workinghome from "../../assets/videos/workinghome.mp4";
import fingertyping from "../../assets/videos/findtyping.mp4";
import mask from "../../assets/videos/mask.mp4";

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