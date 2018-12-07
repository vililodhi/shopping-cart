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
import CommentDetails from './facebook/CommentDetails';
import ApprovalCard from './facebook/ApprovalCard';
import CurrentPosition from './seasons/CurrentPosition';
import faker from 'faker';

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
                                    Hello,
                                    <b> Your Orders</b>
                                </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem href="/">
                                        Sign In
                                    </DropdownItem>
                                    <DropdownItem>
                                        New Customer? Starts Here
                                    </DropdownItem>
                                    <DropdownItem href="/">
                                        Additional Features
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                    Try
                                    <b> Prime</b>
                                </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem href="/">
                                        Join Prime
                                    </DropdownItem>
                                    <DropdownItem href="/">
                                        Manage Prime
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                            <NavItem>
                                <NavLink href="/"><i class="shopping cart icon"></i>Cart</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
                <img src={logo} className="App-logo" alt="logo" />
                <div className="row">
                    <div className="col-md-10">
                        <Menu products={this.state.products} />
                    </div>
                    <div className="col-md-2">
                        <h5><CurrentPosition /></h5>
                        <br></br>
                        <h5>Review Comments</h5>
                        <div className="ui container comments">
                            <ApprovalCard>
                                <CommentDetails
                                    author={faker.name.firstName()}
                                    timeAgo="Today at 2:27PM"
                                    content="This is fake data!"
                                    avatar={faker.image.avatar()}
                                />
                            </ApprovalCard>
                            <br></br>
                            <ApprovalCard>
                                <CommentDetails
                                    author={faker.name.firstName()}
                                    timeAgo="Today at 2:30PM"
                                    content="This is fake data!"
                                    avatar={faker.image.avatar()}
                                />
                            </ApprovalCard>
                            <br></br>
                            <ApprovalCard>
                                <CommentDetails
                                    author={faker.name.firstName()}
                                    timeAgo="Today at 2:35PM"
                                    content="This is fake data!"
                                    avatar={faker.image.avatar()}
                                />
                            </ApprovalCard>
                            <br></br>
                            <ApprovalCard>
                                <CommentDetails
                                    author={faker.name.firstName()}
                                    timeAgo="Today at 2:45PM"
                                    content="This is fake data!"
                                    avatar={faker.image.avatar()}
                                />
                            </ApprovalCard>
                            <br></br>
                            <ApprovalCard>
                                <div>
                                    <h4>Warning!</h4>
                                    Are you sure, You want to do this?
                                </div>
                            </ApprovalCard>
                            <br></br>
                        </div>
                    </div>
                </div>
                <div className="footer-copyright text-center py-3">© 2018 Copyright:
                    <a href="https://github.com/vaishalilodhi/shopping-cart/">vaishalilodhi</a>
                </div>
            </div>
        );
    }
}

export default App;
