import React, { Component } from 'react';
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import SearchBar from '../components/SearchBarComponent';

class Menubar extends Component {
    render() {
        return (
            <Navbar className="fixed-top" dark color="primary" expand="md">
                <NavbarBrand href="/">Shopping Cart</NavbarBrand>
                <SearchBar />
                <Nav className="ml-auto" navbar>
                    <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav caret>
                            Hello, <b> Your Orders</b>
                        </DropdownToggle>
                        <DropdownMenu right>
                            <Link to="/login">
                                <DropdownItem>Sign in</DropdownItem>
                            </Link>
                            <DropdownItem divider />
                            <Link to="/register">
                                <DropdownItem>New Customer? Starts Here</DropdownItem>
                            </Link>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                    <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav caret>
                            Try<b> Prime</b>
                        </DropdownToggle>
                        <DropdownMenu right>
                            <DropdownItem>Join Prime</DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem>Manage Prime</DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                    <NavLink href="/cart">
                        <i className="shopping cart icon"></i> Cart
                    </NavLink>
                </Nav>
            </Navbar>
        );
    }
}

export default Menubar;
