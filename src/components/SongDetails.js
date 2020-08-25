import React, { useContext } from "react";
import { SongsContext } from "../contexts/SongsContextProvider";

export default function SongDetails({ song }) {

  const { dispatch } = useContext(SongsContext);
  return (
    <li className="song-details">
      <div className="song-info">
        <p style={{fontWeight: "bold"}}>Title: {song.title}</p>
        <p style={{fontWeight: 300, color: "#000"}}>Artist: {song.artist}</p>
      </div>
      <div className="delete" onClick={() => dispatch({type: 'REMOVE_SONG', id: song.id})} >
          delete
      </div>
    </li>
  );
}
