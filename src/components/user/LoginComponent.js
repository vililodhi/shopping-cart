import React, { Component } from 'react';
import Navbar from '../../shared/Navbar';
import { Link } from 'react-router-dom';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <div className="row top-margin">
                <Navbar />
                <div className="col-md-4 top-margin">
                </div>
                <div className="col-md-4 top-margin">
                    <h4>Login here to continue..!</h4>
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label>Email address</label>
                            <input
                                type="email"
                                className="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                placeholder="Enter email"
                                value={this.state.value}
                                onChange={this.handleChange}
                            />
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input
                                type="password"
                                className="form-control"
                                id="exampleInputPassword1"
                                placeholder="Password"
                            />
                            <small id="passwordHelpInline" className="text-muted">
                              Must be 8-20 characters long.
                            </small>
                        </div>
                        <div className="form-check my-1">
                            <input
                                type="checkbox"
                                className="form-check-input"
                                id="exampleCheck1"
                            />
                            <label className="form-check-label">Remember me</label>
                        </div>
                        <button type="submit" className="btn btn-primary mr-sm-2">Login </button>
                        <Link to="/" className="btn btn-danger mr-sm-2"> Go Back!</Link>
                    </form>
                </div>
                <div className="col-md-4 top-margin">
                    <button type="button" className="btn btn-primary">G Sign in with Google</button>
                </div>
            </div>
        );
    }
}

export default Login;
