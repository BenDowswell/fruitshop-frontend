import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';

function NavigationBar({ isLoggedIn, onLogout }) {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="mb-4">
      <Navbar.Brand href="/">Fruit Shop</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          {isLoggedIn ? (
            <Button variant="outline-light" onClick={onLogout}>
              Logout
            </Button>
          ) : (
            <Button variant="outline-light" href="/login">
              Login
            </Button>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavigationBar; 