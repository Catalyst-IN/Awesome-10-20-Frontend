import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import './Nav.scss';

const NavigationBar = () => {

  return (
  <>
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="/">Catalyst</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
    </Nav>
    <Nav>
      <Nav.Link >abc</Nav.Link>
      <Nav.Link >efg</Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Navbar>
  </>
)};

export default NavigationBar;
