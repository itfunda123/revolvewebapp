// src/components/ImageGridPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import { NavDropdown, Nav, Navbar, Container } from 'react-bootstrap';
import img1 from '../Assets/image1.jpg';
import img2 from '../Assets/image2.jpg';
import img3 from '../Assets/image3.jpg';
import img4 from '../Assets/image4.jpg';
import img5 from '../Assets/image5.jpg';
import img6 from '../Assets/image6.jpg';

const CustomNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand as={Link} to="/">REVOLVE</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar" />
        <Navbar.Collapse id="navbar">
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

const ImageGrid = () => {
  return (
    <div className="container-fluid px-0 mt-5 pt-5">
      <div className="row no-gutters">
        {[img1, img2, img3, img4, img5, img6].map((img, idx) => (
          <div className="col-12 col-md-4 p-0" key={idx}>
            <img src={img} alt={`Grid ${idx + 1}`} className="img-fluid w-100" />
          </div>
        ))}
      </div>
    </div>
  );
};

const ImageGridPage = () => {
  return (
    <div>
      <CustomNavbar />
      <ImageGrid />
    </div>
  );
};

export default ImageGridPage;
