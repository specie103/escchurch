import React from 'react';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../images/logo.png';

export default function Menu() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light"  className="p-2 custom-nav">
      <Container fluid>
      <Navbar.Brand href="/" className='ps-5'>
            <img
              src={logo}
              width="200"
              height="50"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav navbar-toggler navbar-toggler-icon" />
        <Navbar.Collapse id="responsive-navbar-nav navbar-toggler-icon">
          <Nav className="m-auto">
            <Nav.Link className="custom-link">
              {' '}
              <Link className="text-decoration-none text-black p-2" to="/About" >
                <i className='bi bi-bank'></i> About
              </Link>
            </Nav.Link>
            <Nav.Link className="custom-link">
              {' '}
              <Link className="text-decoration-none text-black p-2" to="/Connect">
              <i className='bi bi-exclude'></i> Connect
              </Link>
            </Nav.Link>
            <Nav.Link className="custom-link">
              {' '}
              <Link className="text-decoration-none text-black p-2" to="/Events">
              <i className='bi bi-calendar-check-fill'></i> Events
              </Link>
            </Nav.Link>
            <Nav.Link className="custom-link ">
              {' '}
              <Link className="text-decoration-none text-black p-2" to="/Contact">
              <i className='bi bi-phone-fill'></i> Contact
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}