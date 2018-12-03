import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import logo from './logo.svg';
import './App.css';
import Menu from './components/MenuComponent';
import { PRODUCTS } from './shared/products';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      products: PRODUCTS
    };
  }

  render() {
    return (
      <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Shopping Cart</NavbarBrand>
            <NavbarBrand href="/">Hello, Sign in</NavbarBrand>
            <NavbarBrand href="/">Cart</NavbarBrand>
          </div>
        </Navbar>
        <img src={logo} className="App-logo" alt="logo" />
        <Menu products={this.state.products} />
      </div>
    );
  }
}

export default App;
