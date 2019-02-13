import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        {
            title: 'No Scrubs',
            duration: '1:30'
        },
        {
            title: 'Macarena',
            duration: '2:00'
        },
        {
            title: 'All Star',
            duration: '2:30'
        },
        {
            title: 'I want it that way',
            duration: '3:00'
        },
        {
            title: 'Dear Zindagi',
            duration: '3:30'
        },
        {
            title: 'Simmba',
            duration: '4:00'
        }
    ];
};

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return  action.payload;
    }

    return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});
