import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
//import { Link } from 'react-router-dom';
import Navbar from '../../shared/Navbar';

class Cart extends Component {
    render () {
        console.log(localStorage.getItem('selectedProduct'));
        const product = JSON.parse(localStorage.getItem('selectedProduct'));

    //if (product) {
        return (
            <div className="top-margin">
                <Navbar />
                <h4 align="left">Added items in your cart.</h4>
                <div className="row">
                    <div className="col-md-4">
                        <Card>
                            <CardBody>
                                <CardImg src={product.image} title={product.name} />
                                <CardTitle>{product.name}</CardTitle>
                                <CardText>{product.description}</CardText>
                                <CardText><b>Price : ₹{product.price}</b></CardText>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-md-4">
                        <div>
                            <b className="mr-sm-2">Quantity</b>
                            <i className="plus circle icon rounded"></i> value <i className="minus circle icon"></i>
                        </div>
                        <button
                          className="btn btn-primary mr-sm-2"
                        > Continue</button>
                    </div>
                </div>
            </div>
        );
    /*} else {
        return (
            <div className="top-margin">
                <Navbar />
                <div className="row">
                    <div className="col-md-4">
                        <h4>Cart items</h4>
                        <div>Your Cart is Empty.</div>
                    </div>
                    <div className="col-md-4">
                        <Link to="/" className="btn btn-primary">Continue Shopping</Link>
                    </div>
                    <div className="col-md-4">
                    </div>
                </div>
            </div>
        );
    }*/
    }
}

export default Cart;
