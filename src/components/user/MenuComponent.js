import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import Cart from '../cart/CartComponent';

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

    render() {
        const menu = this.props.products.map((product) => {
            return (
                <div className="col-md-3" key={product.id}>
                    <Card>
                        <CardImg src={product.image} title={product.name} />
                        <CardBody>
                            <CardTitle>{product.name}</CardTitle>
                            <CardText><b>Price : ₹{product.price}</b></CardText>
                            <button
                              className="btn btn-primary"
                              onClick={() => this.onProductSelect(product)}
                            ><i className="shopping cart icon"></i> Add to cart</button>
                        </CardBody>
                    </Card>
                    <br></br>
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                { this.state.selectedProduct
                ? <div className="col-md-4">
                    <Cart selectedProduct={this.state.selectedProduct} />
                </div>
                : menu
                }
                </div>
            </div>
        );
    }
}

export default Menu;
