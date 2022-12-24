import React from "react";

import Button from "react-bootstrap/Button";

import useCounter from "../../hooks/useCounter";

const Counter = () => {
  const { count, increment, decrement } = useCounter();
  return (
    <>
      <h2 className="display-4">Count: {count}</h2>
      <Button
        variant="danger"
        className="m-2"
        data-testid="decrement"
        onClick={() => {
          decrement();
        }}
      >
        <i className="bi bi-dash-lg"></i>
      </Button>
      <Button
        className="m-2"
        data-testid="increment"
        onClick={() => {
          increment();
        }}
      >
        <i className="bi bi-plus-lg"></i>
      </Button>
    </>
  );
};

export default Counter;
