import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import VRGEO from '../../assets/VR_GEO_SOLUTIONS_LOGO.png';
import './Navbar.css';

const CustomNavbar = () => {
    return (
        <Navbar expand="lg" variant="light" className="px-3 VrGeoNavbar" sticky="top">
            <Container fluid>
                <Navbar.Brand as={Link} to="/" className="navbar-logo-shift-right">
                    <img src={VRGEO} alt="VR Geo Solutions Logo" />
                </Navbar.Brand>
                {/* Use Bootstrap's default toggle without manual state handling */}
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto custom-nav-margin">
                        <Nav.Link as={NavLink} to="/" className="custom-nav-link">
                            Home
                        </Nav.Link>
                        <Nav.Link as={NavLink} to="/about" className="custom-nav-link">
                            About
                        </Nav.Link>
                        <Nav.Link as={NavLink} to="/products" className="custom-nav-link">
                            Products
                        </Nav.Link>
                        <Nav.Link as={NavLink} to="/services" className="custom-nav-link">
                            Services
                        </Nav.Link>
                        <Nav.Link as={NavLink} to="/contact" className="custom-nav-link">
                            Contact
                        </Nav.Link>
                        <Nav.Link as={NavLink} to="/innovation" className="custom-nav-link">
                            IT-Solutions
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default CustomNavbar;