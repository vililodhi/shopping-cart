import React, { Component } from 'react';
import Navbar from '../shared/Navbar';
import Productdetail from './ProductdetailComponent';

class Cart extends Component {
    render() {
        return (
            <div className="top-margin">
                <Navbar />
                <h4>Cart</h4>
            </div>
        );
    }
}

export default Cart;
