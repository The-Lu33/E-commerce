import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar style={{background:'#212121',padding:'0.5rem'}}  expand="lg" variant="dark">
    <Container>
      <Navbar.Brand as={Link} to="/" >Ecommerce</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" style={{boxShadow:'none',border:'1px solid #FF3D00'}}/>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/login" >Login</Nav.Link>
          <Nav.Link as={Link} to="/Purchanses" >Purchases</Nav.Link>
          <Nav.Link > cart</Nav.Link>
          
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
};

export default NavBar;
