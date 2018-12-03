import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
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
        <Navbar dark color="primary" expand="md">
          <NavbarBrand href="/">Shopping Cart</NavbarBrand>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Hello, Sign in
                  <b> Your Orders</b>
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Sign In
                  </DropdownItem>
                  <DropdownItem>
                    New Customer? Starts Here
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Try
                  <b> Prime</b>
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Join Prime
                  </DropdownItem>
                  <DropdownItem>
                    Manage Prime
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <NavLink href="/">Cart</NavLink>
              </NavItem>
              </Nav>
          </Collapse>
        </Navbar>
        <img src={logo} className="App-logo" alt="logo" />
        <Menu products={this.state.products} />
        <div className="footer-copyright text-center py-3">© 2018 Copyright:
          <a href="https://github.com/vaishalilodhi/shopping-cart/">vaishalilodhi</a>
        </div>
      </div>
    );
  }
}

export default App;
