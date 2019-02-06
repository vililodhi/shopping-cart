import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';
import Navbar from '../../shared/Navbar';
import Footer from '../../shared/Footer';

const Cart = (props) => {
    const product = localStorage.getItem('selectedProduct');
console.log(product);
    if (product) {
        return (
            <div className="side-margin">
                <Navbar />
                <h4 align="left">Added items in your cart.</h4>
                <br></br>
                <div className="row">
                    <div className="col-md-4">
                        <Card>
                            <CardBody>
                                <CardImg src={product.image} title={product.name} className="cart-image"/>
                                <CardTitle>{product.name}</CardTitle>
                                <CardText>{product.description}</CardText>
                                <CardText><b>Price : ₹{product.price}</b></CardText>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-md-4">
                        <div className="my-1">
                            <b className="mr-sm-2">Quantity</b>
                            <i className="plus circle icon rounded"></i> value <i className="minus circle icon"></i>
                        </div>
                        <button className="btn btn-primary mr-sm-2 my-1"> Proceed to Buy</button>
                        <button className="btn btn-primary mr-sm-2 my-1"> Delete</button>
                    </div>
                </div>
                <Footer />
            </div>
        );
    } else {
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
                <Footer />
            </div>
        );
    }
}

export default Cart;
