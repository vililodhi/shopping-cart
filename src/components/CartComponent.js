import React, { Component } from 'react';
import Navbar from '../shared/Navbar';

class Cart extends Component {
    render() {
        return (
            <div className="top-margin">
                <Navbar />
                <h4>Cart items</h4>
            </div>
        );
    }
}

export default Cart;
