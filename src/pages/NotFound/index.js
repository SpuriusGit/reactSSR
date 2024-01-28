import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import HeadComponent from "../../components/HeadComponent";

const NotFound = () => {
  return (
    <React.Fragment>
      <HeadComponent title="404" description="Page not found" />
      <Container className="text-center mt-5">
        <Row>
          <Col>
            <h1>404</h1>
            <p>Page not found</p>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default NotFound;
