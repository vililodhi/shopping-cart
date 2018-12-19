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
                            <DropdownItem href="/">
                                Sign in
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
                            Try<b> Prime</b>
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
                        <NavLink href="/"><i className="shopping cart icon"></i>Cart</NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
        );
    }
}

export default Menubar;
