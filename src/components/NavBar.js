import React, { useContext } from "react";
import { SongsContext } from "../contexts/SongsContextProvider";

export default function NavBar() {
  const { songs } = useContext(SongsContext);

  return (
    <div className="nav-bar">
      <h1>La Musico</h1>
      <div className="info-div">
        <div className="info">
          <p>Most played songs in Kigali</p>
        </div>
        <div className="info">
          <p>current songs: {songs.length} songs</p>
        </div>
      </div>
    </div>
  );
}
