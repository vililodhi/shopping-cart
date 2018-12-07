import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

const Productdetail = (props) => {
    return(
        <Card>
            <CardBody>
                <CardImg src={props.selectedProduct.image} title={props.selectedProduct.name} />
                <CardTitle>{props.selectedProduct.name}</CardTitle>
                <CardText>{props.selectedProduct.description}</CardText>
                <CardText><b>Price : ₹{props.selectedProduct.price}</b></CardText>
            </CardBody>
        </Card>
    );
}

export default Productdetail;
