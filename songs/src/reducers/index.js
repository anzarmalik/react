import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        { title: "No Scrubs", duration: "4:05", },
        { title: "Macarena", duration: "2:12", },
        { title: "All star", duration: "3:45", },
        { title: "way too", duration: "5:20", },
    ]
};

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }
    return selectedSong
};

export default combineReducers({
    songs: songsReducer,
     selectedSong : selectedSongReducer,
})