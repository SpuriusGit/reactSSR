import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const NotFound = () => {
  return (
    <Container className="text-center mt-5">
      <Row>
        <Col>
          <h1>404</h1>
          <p>Page not found</p>
        </Col>
      </Row>
    </Container>
  );
};

export default NotFound;
