import React, { Component } from 'react';

class CurrentPosition extends Component {
    constructor(props) {
        super(props);
        //This is the only time we do direct assignment
        //To this.this.state
        this.state = {
            lat: null,
            errorMessage: ''
        };

        window.navigator.geolocation.getCurrentPosition(
            position => {
                //We called setState!!!
                this.setState({ lat: position.coords.latitude});
            },
            err => {
                this.setState({ errorMessage: err.message});
            }
        );
    }

    render() {
        if (this.state.lat && !this.state.errorMessage) {
            return <div>Latitude : {this.state.lat}</div>
        }

        if (this.state.errorMessage && !this.state.lat) {
            return <div>{this.state.errorMessage}</div>
        }

        if (!this.state.lat && !this.state.errorMessage) {
            return <i className="spinner icon" title="Loading.."></i>
        }
    }
}

export default CurrentPosition;
