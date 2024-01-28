import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import { Navbar, Nav, Button } from "react-bootstrap";

const HeaderComponent = () => {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="/">React SSR project</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Button variant="link">
              <Link to={`/`} className="mr-2">
                Home
              </Link>
            </Button>
            <Button variant="link">
              <Link to={`/users`}>Users</Link>
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default HeaderComponent;
