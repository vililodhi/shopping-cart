import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedProduct: null,
      modal: false
    }

    this.toggle = this.toggle.bind(this);
  }

  onProductSelect(product) {
    this.setState({ selectedProduct: product});
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  renderProduct(product) {
    if (product != null)
      return(
        <Card>
        </Card>
      );
    else
      return(
        <div></div>
      );
  }

  render() {
    const menu = this.props.products.map((product) => {
      return (
        <div className="col-md-3">
            <Card key={product.id}
              onClick={() => this.onProductSelect(product)}>
              <CardImg src={product.image} title={product.name} />
              <CardBody>
                <CardTitle>{product.name}</CardTitle>
                <CardText>{product.description}</CardText>
                <CardText className="a-price-symbol"><b>Price : ₹{product.price}</b></CardText>
              </CardBody>
            </Card>
            {/*<Modal isOpen={this.state.modal} toggle={this.toggle}>
              <ModalHeader toggle={this.toggle}>{product.name}</ModalHeader>
              <img width="50%" src={product.image} />
              <ModalBody>{product.description}</ModalBody>
              <ModalFooter>
                <Button color="primary" onClick={this.toggle}>-</Button>{' '}
                <Button color="secondary" onClick={this.toggle}>+</Button>
              </ModalFooter>
            </Modal>*/}
        </div>
      );
    });

    return (
      <div className="container">
          <div className="row">
            {menu}
          </div>
          <div className="row">
            <div  className="col-md-3">
              {this.renderProduct(this.state.selectedProduct)}
            </div>
          </div>
      </div>
    );
  }
}

export default Menu;
