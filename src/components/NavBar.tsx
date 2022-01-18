import React from 'react';
import Navbar from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import {NavLink} from "react-router-dom";
import { SHOP_ROUTE } from '../utils/consts';

const NavBar = () => {

    return (

        <Navbar bg="dark" variant="dark">
            <Container>
                <NavLink to={SHOP_ROUTE}> ElectroShop</NavLink>
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
            </Container>
        </Navbar>


    );
};

export default NavBar;