import React from 'react';
import VideoItem from './VideoItem';
import '../styles/v ideolist.css';

const VideosList = ({videos, onVideoSelect}) => {

    const renderedList = videos.map(video => {
       return <VideoItem key={video.id.videoId || new Date()} video={video} onVideoSelect={onVideoSelect}/>
    });

    return <div className="list-container" >{renderedList}</div>
    
}

export default VideosList;