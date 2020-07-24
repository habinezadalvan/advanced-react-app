import React from "react";
import covid19 from "../../assets/videos/covid19.mp4";
import workinghome from "../../assets/videos/workinghome.mp4";
import fingertyping from "../../assets/videos/findtyping.mp4";
import mask from "../../assets/videos/mask.mp4";
import Video from "./Video";


const Videos = () => {
  return (
    <div className="videos">
        <Video text="LIVE" video={workinghome}/>
        <Video text="DIGITAL" video={covid19}/>
        <Video text="WITH" video={mask}/>
        <Video text="US" video={fingertyping}/>
    </div>
  );
};

export default Videos;
