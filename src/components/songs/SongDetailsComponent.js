import React from 'react';
import { connect } from 'react-redux';

const SongDetails = (props) => {
    return (
        <div>SongDetails</div>
    );
}

const mapStateToProps = (state) => {
    return { song: state.songsReducer.selectedSong };
}

export default connect(mapStateToProps)(SongDetails);
