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
        // create a new item
        const newItem = {
            id: 1 + Math.random(),
            value: this.state.newItem.slice()
        };

        // copy current list of items
        const list = [...this.state.list];

        // add the new item to the list
        list.push(newItem);

        // update state with new list, reset the new item input
        this.setState({
            list,
            selectedProduct: ""
        });

    }

    render() {
        const menu = this.props.products.map((product) => {
            return (
                <div className="col-md-3 top-margin" key={product.id}>
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
                <div className="row">
                { menu }
                </div>
            </div>
        );
    }
}

export default Menu;
