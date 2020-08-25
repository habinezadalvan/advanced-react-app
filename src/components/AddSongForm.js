import React, { useState, useContext } from "react";
import { SongsContext } from "../contexts/SongsContextProvider";

export default function AddSongForm() {


  const {addSong , dispatch} = useContext(SongsContext)

  const [values, setvalues] = useState({title:'', artist: '', err: {title: '', artist: ""}});
  const [isError, setIsError] = useState(false);


  const handleInput = ({target: {name, value}}) => {
    setvalues(prevState => ({...prevState, [name]: value}))
  }


  const handleSubmit = (e) => {
    e.preventDefault();

    if(values.title === undefined || values.title.length === 0){
      setIsError(true)
     return setvalues({err:{title: 'Title field can not be empty!!'}})
    }else if(values.artist === undefined || values.artist.length === 0){
      setIsError(true)
      return setvalues({err:{artist: 'Artist field can not be empty!!'}})
    }
    dispatch({type: 'ADD_SONG', song: {title: values.title, artist: values.artist}});
    setvalues({title: '', artist: '', err: {title: '', artist: ""}});
  };

  return (
    <form onSubmit={handleSubmit} className="add-song-form">
      <div className="inputs">
        <div className="input-container">
          <label>Song Title</label>
          <input
            type="text"
            placeholder="Add song"
            name="title"
            value={values.title}
            onChange={handleInput}
          />
         
        </div>
        <p style={{display: `${isError ? 'block' : 'none'}`, width: "70%", margin: '2px auto', color: 'rgb(139, 35, 139)'}}>{values.err.title}</p>
        <div className="input-container">
          <label>Song Artist</label>
          <input
            type="text"
            placeholder="Add artist"
            name="artist"
            value={values.artist}
            onChange={handleInput}
            
          />
         
        </div>
        <p style={{display: `${isError ? 'block' : 'none'}`, width: "70%", margin: '0px auto', color: 'rgb(139, 35, 139)' }}>{values.err.artist}</p>
      </div>
      <div className="btn-div">
        <div>
         <input type="submit" value="Add song" />
        </div>
      </div>
    </form>
  );
}
