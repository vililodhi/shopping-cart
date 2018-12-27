import React, { Component } from 'react';
import Navbar from '../shared/Navbar';

class Login extends Component {
    render() {
        return (
            <div className="top-margin">
                <Navbar />
                <h4>Login Here!</h4>
            </div>
        );
    }
}

export default Login;
