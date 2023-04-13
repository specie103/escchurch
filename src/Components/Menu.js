import React from 'react';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function Menu() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="p-3">
      <Container>
        <Navbar.Brand href="/">Charts</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              {' '}
              <Link className="text-decoration-none text-white" to="/About">
                About
              </Link>
            </Nav.Link>
            <Nav.Link>
              {' '}
              <Link className="text-decoration-none text-white" to="/Connect">
                Connect
              </Link>
            </Nav.Link>
            <Nav.Link>
              {' '}
              <Link className="text-decoration-none text-white" to="/Updates">
                Updates
              </Link>
            </Nav.Link>
            <Nav.Link>
              {' '}
              <Link className="text-decoration-none text-white" to="/Contact">
                Contact
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}