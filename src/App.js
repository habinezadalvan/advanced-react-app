import React from "react";
import SongList from "./components/SongList";
import SongsContextProvider from "./contexts/SongsContextProvider";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">

      <SongsContextProvider>
        <NavBar />
        <SongList />
      </SongsContextProvider>
    </div>
  );
}

export default App;
