import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './App';
import Login from './components/user/LoginComponent';
import Register from './components/user/RegisterComponent';
import Cart from './components/cart/CartComponent';
import helloWorld from './components/hello-world/hello-world-component';
import localStorage from './components/local-storage/local';
import demos from './facebook/CommentDetails';
import Songs from './components/songs/SongListComponent';
import PostList from './components/postList/PostList';

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
                        <Route path={ '/local-storage' } exact component={ localStorage } />
                        <Route path={ '/demos' } exact component={ demos } />
                        <Route path={ '/music' } exact component={ Songs } />
                        <Route path={ '/post' } exact component={ PostList } />
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default Routes;
