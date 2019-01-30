import React, { Component } from 'react';
import Navbar from '../../shared/Navbar';
import { Link } from 'react-router-dom';

class Login extends Component {
    render() {
        return (
            <div className="row top-margin">
                <Navbar />
                <div className="col-md-4 top-margin">
                </div>
                <div className="col-md-4 top-margin">
                    <h4>Login here to continue..!</h4>
                    <Link to="/" className="btn btn-danger">Go Back!</Link>
                </div>
                <div className="col-md-4 top-margin">
                    <button type="button" className="btn btn-primary">G Sign in with Google</button>
                </div>
            </div>
        );
    }
}

export default Login;
