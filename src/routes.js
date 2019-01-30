import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './App';
import Login from './components/user/LoginComponent';
import Register from './components/user/RegisterComponent';
import Cart from './components/cart/CartComponent';
import helloWorld from './components/hello-world/hello-world-component';

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
                        <Route path={ '/hello-world' } exact component={ helloWorld } />
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default Routes;
