import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function NavbarComponent() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top" className="shadow-sm">
      <Container>
        <Navbar.Brand as={Link} to="/">Cricket Players API</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">List Players</Nav.Link>
            <Nav.Link as={Link} to="/add-player">Add Player</Nav.Link>
            <Nav.Link as={Link} to="/update-player">Update Player</Nav.Link>
            <Nav.Link as={Link} to="/find-player">Find Player</Nav.Link>
            <Nav.Link as={Link} to="/delete-player">Delete Player</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
