import React from "react";

import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

/******************
 * MainNavBar -- Main website navigation bar
 * - Company name & logo (brand)
 * - links to the main pages
 ***********/
const MainNavBar = () => {
  return (
    <Navbar sticky="top" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          <img
            alt=""
            src={require("../../beericon.png")}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          Beer UI App
        </Navbar.Brand>
        <Nav className="mr-auto">
          {["home", "products", "about"].map((str, i) => (
            <Nav.Link key={i} href={"#" + str} className="text-capitalize">
              {str}
            </Nav.Link>
          ))}
        </Nav>
      </Container>
    </Navbar>
  );
};

export default MainNavBar;
