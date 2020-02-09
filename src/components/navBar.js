import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const BeerNavBar = () => {
    return (
    <Navbar sticky="top" bg="dark" variant="dark">
        <Container>
            <Navbar.Brand href="#home">
            <img
                alt=""
                src={require("./../beericon.png")}
                width="30"
                height="30"
                className="d-inline-block align-top"
            />{' '}
            Beer UI App
            </Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#products">Products</Nav.Link>
                <Nav.Link href="#about">About</Nav.Link>
            </Nav>
        </Container>
      </Navbar>
    )
}

export default BeerNavBar;