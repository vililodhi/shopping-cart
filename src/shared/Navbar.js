import React, { Component } from 'react';
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
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
                            <Link to="/prime">
                                <DropdownItem>Join Prime</DropdownItem>
                            </Link>
                            <Link to="/manage-prime">
                                <DropdownItem>Manage Prime</DropdownItem>
                            </Link>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                    <Link to="/cart">
                        <NavItem>
                            <NavLink><i className="shopping cart icon"></i> Cart</NavLink>
                        </NavItem>
                    </Link>
                </Nav>
            </Navbar>
        );
    }
}

export default Menubar;
