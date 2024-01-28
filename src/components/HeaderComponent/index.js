import React from "react";
import { Link, useLocation } from "react-router-dom";
import Container from "react-bootstrap/Container";
import { Navbar, Nav, Button } from "react-bootstrap";

const HeaderComponent = () => {
  const location = useLocation();

  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="/">React SSR project</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Button
              variant="link"
              disabled={location.pathname === "/"}
              style={{ color: "white", textDecoration: "none" }}
            >
              <Link
                to={`/`}
                className="mr-2"
                style={{ color: "white", textDecoration: "none" }}
              >
                Home
              </Link>
            </Button>
            <Button
              variant="link"
              disabled={location.pathname === "/users"}
              style={{ color: "white", textDecoration: "none" }}
            >
              <Link
                to={`/users`}
                style={{ color: "white", textDecoration: "none" }}
              >
                Users
              </Link>
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default HeaderComponent;
