import React, { useState } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Todo from "../../components/Todo";

const TodoPage = () => {
  return (
    <Container className="my-5" data-testid="TodoPage">
      <Row>
        <Col>
          <Todo />
        </Col>
      </Row>
    </Container>
  );
};

export default TodoPage;
