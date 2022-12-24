import React, { useEffect, useState } from "react";

import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

type Posts = Post[];

const GetPosts = () => {
  const [getPosts, setGetPosts] = useState(false);
  const [posts, setPosts] = useState<Posts>();
  const [error, setError] = useState<Error | undefined>(undefined);

  useEffect(() => {
    if (!getPosts) return;
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        setError(undefined);
        setPosts(data);
      })
      .catch((err) => {
        setError(err);
        console.log(err);
      });
  }, [getPosts]);

  return (
    <>
      <Button
        className="mb-5"
        onClick={() => {
          setGetPosts(true);
        }}
      >
        Get posts
      </Button>
      {error && (
        <div>
          <h4>Error:</h4>
          <p>{error.message}</p>
        </div>
      )}
      {posts && (
        <ListGroup variant="flush" as="ul">
          {posts.map((post) => (
            <ListGroup.Item
              as="li"
              key={post.id}
              className="d-flex align-items-center justify-content-start py-3 px-2 border-bottom"
            >
              <div
                className="bg-info d-flex justify-content-center align-items-center fw-bold text-white fs-3 m-3"
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: "50%",
                  flexShrink: 0,
                }}
              >
                <i className="bi bi-person-fill"></i>
              </div>
              <div>
                <h4>{post.title}</h4>
                <p className="mb-0">{post.body}</p>
              </div>
            </ListGroup.Item>
          ))}
        </ListGroup>
      )}
    </>
  );
};

export default GetPosts;
