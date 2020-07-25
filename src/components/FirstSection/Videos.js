import React from "react";
import covid19 from "../../assets/videos/covid19-2.webm";
import workinghome from "../../assets/videos/workinghome.webm";
import fingertyping from "../../assets/videos/findtyping.webm";
import mask from "../../assets/videos/mask.webm";
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
