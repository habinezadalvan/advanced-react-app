import React, {createContext, useEffect, useReducer} from 'react';
import { songReducer } from '../reducers/songsReducer';


export const SongsContext = createContext();



export default function SongsContextProvider(props) {

    const [songs, dispatch] = useReducer(songReducer, [], () => {
        const localSongs = localStorage.getItem('songs');
        return localSongs ? JSON.parse(localSongs) : [];
    });

    useEffect(() => {
        localStorage.setItem('songs', JSON.stringify(songs));
    }, [songs]);

    return (
        <SongsContext.Provider value={{songs, dispatch}}>
            {props.children}
        </SongsContext.Provider>
    )
}

// export default function SongsContextProvider(props) {

//     const [songs, setSongs] = useState([
//         { title: `We don't care`, artist: 'meddy ft rayvanny',  id: 1 },
//         { title: `Dusoma `, artist: 'meddy ft otile brown', id: 2 },
//         { title: "igare ", artist: ' mico the best', id: 3 },
//       ]);
    
//       const id = Math.random() * 1000000;
    
//     const addSong = (title, artist) => {
//         setSongs([{title, artist, id}, ...songs])
//     };

//     const removeSong = (id) => {
//     console.log('id ----', id);
//       const remainingSongs =  songs.filter(song => Number(song.id) !== Number(id));
//       setSongs([...remainingSongs])
//       return removeSong;
//     }
    
//     return (
//         <SongsContext.Provider value={{songs, addSong, removeSong}}>
//             {props.children}
//         </SongsContext.Provider>
//     )
// }
