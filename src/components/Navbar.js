import React from 'react';
import { Link } from 'react-router-dom';
import { NavDropdown, Nav, Navbar, Container } from 'react-bootstrap';

const CustomNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">REVOLVE</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar" />
        <Navbar.Collapse id="navbar">
          {/* align content to the right */}
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About Revolve</Nav.Link>
            <NavDropdown title="What We Do" id="services-dropdown">
              <NavDropdown.Item as={Link} to="/branding">Branding & Signature</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/illustration">Illustration</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/photography">Product Photography</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/clothing">Clothing</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/clients">Clients</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
