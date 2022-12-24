import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Counter from "../../components/Counter";

const CountPage = () => {
  return (
    <Container className="my-5" data-testid="CountPage">
      <Row>
        <Col>
          <Counter />
        </Col>
      </Row>
    </Container>
  );
};

export default CountPage;
