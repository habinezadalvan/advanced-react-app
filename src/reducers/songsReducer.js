const id = Math.random() * 1000000;


export const songReducer = (state, action) => {
    switch(action.type){
        case 'ADD_SONG': 
            return [{title: action.song.title, artist: action.song.artist, id}, ...state];
        case 'REMOVE_SONG':
            return state.filter(song => song.id !== action.id);
        default: 
            return state
    }
}