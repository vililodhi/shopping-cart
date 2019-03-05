import React, { Component } from 'react';
import { connect } from 'react-redux';
import Navbar from '../../shared/Navbar';
import Footer from '../../shared/Footer';
import { selectSong } from '../../actions/songs-actions';
import SongDetails from './SongDetailsComponent';

class SongList extends Component {
    renderList () {
        return this.props.songs.map((song) => {
            return (
                <div className="item" key={song.title}>
                    <div className="right floated content">
                        <button
                            className="ui button primary"
                            onClick={() => this.props.selectSong(song)}
                        >
                            Select
                        </button>
                    </div>
                    <div className="content">{song.title}</div>
                </div>
            );
        });
    }

    render () {
        return (
            <div className="top-margin">
                <Navbar />
                <div className="ui container grid">
                    <div className="ui row">
                        <div className="column eight wide">
                            <div className="ui divided list">
                                <h1>Songs List</h1>
                                { this.renderList() }
                            </div>
                        </div>
                        <div className="column eight wide">
                            <h1>Selected Song Details:</h1>
                            <SongDetails />
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { songs: state.songsReducer.songs };
}

export default connect(
    mapStateToProps,
    { selectSong }
)(SongList);
