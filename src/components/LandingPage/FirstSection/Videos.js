import React from "react";
import videos from "../../../assets/videosUrls";
import Video from "./Video";


const Videos = () => {
  return (
    <div className="videos">
        <Video text="LIVE" video={videos.workinghome}/>
        <Video text="DIGITAL" video={videos.codiv19}/>
        <Video text="WITH" video={videos.mask}/>
        <Video text="US" video={videos.fingerTyping}/>
    </div>
  );
};

export default Videos;
