import React from "react";

import GetPosts from "../../components/GetPosts";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const PostsPage = () => {
  return (
    <Container className="my-5" data-testid="PostsPage">
      <Row>
        <Col>
          <GetPosts />
        </Col>
      </Row>
    </Container>
  );
};

export default PostsPage;
