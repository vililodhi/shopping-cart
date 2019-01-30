import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import Navbar from '../shared/Navbar';

const Cart = (props) => {
    if (props.selectedProduct) {
        return (
            <div className="top-margin">
                <Navbar />
                <h4>Cart items</h4>
                <Card>
                    <CardBody>
                        <CardImg src={props.selectedProduct.image} title={props.selectedProduct.name} />
                        <CardTitle>{props.selectedProduct.name}</CardTitle>
                        <CardText>{props.selectedProduct.description}</CardText>
                        <CardText><b>Price : ₹{props.selectedProduct.price}</b></CardText>
                    </CardBody>
                </Card>
            </div>
        );
    } else {
        return <div>Your Cart is Empty.</div>;
    }
}

export default Cart;
