import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const HomePage = () => {
  return (
    <Container className="my-5">
      <Row>
        <Col>
          <h1 className="display-1">About:</h1>
          <p className="lead">
            The main purpose of this project is to practise unit testing with
            Jest and React Testing Library.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
