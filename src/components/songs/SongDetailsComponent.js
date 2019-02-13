import React from 'react';
import { connect } from 'react-redux';

const SongDetails = ({ song }) => {
    if (song != null) {
        return (
            <div>
                <b>
                    <p>Song Title : { song.title } </p>
                    <p>Song Duration : { song.duration } </p>
                </b>
            </div>
        );
    } else {
        return (
            <div>
                <h5>No Song Selected!</h5>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { song: state.songsReducer.selectedSong };
}

export default connect(mapStateToProps)(SongDetails);
