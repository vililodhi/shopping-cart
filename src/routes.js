import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './App';
import Navbar from './shared/Navbar';

class Routes extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <div>
                        <Navbar />
                        <Route path="/" exact component={App} />
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default Routes;
