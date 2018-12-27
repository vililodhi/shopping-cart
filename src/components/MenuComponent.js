import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import Productdetail from './ProductdetailComponent';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedProduct: null
        }
    }

    onProductSelect(product) {
        this.setState({ selectedProduct: product});
    }

    renderProduct(product) {
        if (product != null)
            return (
                <Productdetail selectedProduct={this.state.selectedProduct}/>
            );
        else
            return (
                <div></div>
            );
    }

    render() {
        const menu = this.props.products.map((product) => {
            return (
                <div className="col-md-3" key={product.id}>
                    <Card>
                        <CardImg src={product.image} title={product.name} />
                        <CardBody>
                            <CardTitle>{product.name}</CardTitle>
                            <CardText><b>Price : ₹{product.price}</b></CardText>
                            <button className="btn btn-primary" onClick={() => this.onProductSelect(product)}><i className="shopping cart icon"></i> Add to cart</button>
                        </CardBody>
                    </Card>
                    <br></br>
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>
                <div className="row">
                    <div className="col-md-3">
                        {this.renderProduct(this.state.selectedProduct)}
                    </div>
                </div>
            </div>
        );
    }
}

export default Menu;
