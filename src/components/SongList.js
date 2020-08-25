import React, { useState, useContext } from "react";
import AddSongForm from "./AddSongForm";
import { SongsContext } from "../contexts/SongsContextProvider";
import SongDetails from './SongDetails';

const SongList = () => {

  const {songs} = useContext(SongsContext);



  const id = Math.random() * 1000000;
 


  return (
    <div className="song-list">
      {
        songs.length ? (<ul className="details-container">
          {songs.map(song => (<SongDetails key={song.id} song={song}/>))}
        </ul>) : (<div>
          <p>Currently there are no favorite songs, please add songs...</p>
        </div>)
      }
  
      <AddSongForm  />
    

    </div>
  );
}


export default SongList;