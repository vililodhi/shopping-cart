import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './App';
import Login from './components/LoginComponent';
import Register from './components/RegisterComponent';
import Cart from './components/CartComponent';

class Routes extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <div>
                        <Route path="/" exact component={App} />
                        <Route path="/login" exact component={Login} />
                        <Route path="/register" exact component={Register} />
                        <Route path="/cart" exact component={Cart} />
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default Routes;
