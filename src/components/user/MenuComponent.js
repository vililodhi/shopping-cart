import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedProduct: null,
            list: []
        }
    }

    onProductSelect(product) {
        let list = (localStorage.getItem('selectedProduct') !== null )
            ? Object.values(JSON.parse(localStorage.getItem('selectedProduct')))
            : [];
        list.push(product);
        localStorage.setItem('selectedProduct', JSON.stringify(list));
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
                            <Link to="/cart"
                                className="btn btn-primary"
                                onClick={() => this.onProductSelect(product)}
                            ><i className="shopping cart icon"></i> Add to cart</Link>
                        </CardBody>
                    </Card>
                    <br></br>
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row top-margin">
                { menu }
                </div>
            </div>
        );
    }
}

export default Menu;
