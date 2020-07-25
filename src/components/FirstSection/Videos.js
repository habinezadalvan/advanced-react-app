import React from "react";
import covid19 from "../../assets/videos/covid1-19-2.webm";
import workinghome from "../../assets/videos/workinghome2.webm";
import fingertyping from "../../assets/videos/findtyping2.webm";
import mask from "../../assets/videos/mask2.webm";
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
