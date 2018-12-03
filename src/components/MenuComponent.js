import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

class Menu extends Component {
    constructor(props) {
      super(props);
      this.state = {
        selectedDish: null
      }
    }

    onDishSelect(dish) {
        this.setState({ selectedDish: dish});
    }

    renderDish(dish) {
        if (dish != null)
            return(
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
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
              <div  className="col-3 col-md-3">
                <Card key={product.id}
                  onClick={() => this.onDishSelect(product)}>
                  <CardImg src={product.image} title={product.name} />
                  <CardTitle>{product.name}</CardTitle>
                  <CardSubtitle>{product.description}</CardSubtitle>
                </Card>
              </div>
            );
        });

        return (
          <div className="container">
              <div className="row">
                  {menu}
              </div>
              <div className="row">
                <div  className="col-12 col-md-5 m-1">
                  {this.renderDish(this.state.selectedDish)}
                </div>
              </div>
          </div>
        );
    }
}

export default Menu;
