import React, { Component } from 'react';
import './App.css';
import Navbar from './shared/Navbar';
import Footer from './shared/Footer';
import Menu from './components/user/MenuComponent';
import { PRODUCTS } from './shared/products';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            products: PRODUCTS
        };
    }

    render() {
        return (
            <div className="App">
                <Navbar />
                <Menu products={this.state.products} />
                <Footer />
            </div>
        );
    }
}

export default App;
