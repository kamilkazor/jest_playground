import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";

import { useAppDispatch, useAppSelector } from "../../store/store";
import { addTodo, removeTodo, setTodos } from "../../store/todosSlice";

const Todo = () => {
  interface Todo {
    id: string;
    value: string;
    done: boolean;
  }

  const [todoValue, setTodoValue] = useState("");

  const todos = useAppSelector((state) => state.todos.todos);
  const dispatch = useAppDispatch();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!todoValue) return;
    dispatch(addTodo({ id: uuidv4(), value: todoValue, done: false }));
    setTodoValue("");
  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <InputGroup className="mb-3">
          <Form.Control
            placeholder="What are you planning to do?"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            required
            value={todoValue}
            onChange={(e) => {
              setTodoValue(e.target.value);
            }}
          />
          <Button variant="secondary" id="button-addon2" type="submit">
            Add
          </Button>
        </InputGroup>
      </Form>
      <h2 className="display-4 my-4">Stuff to do:</h2>
      <ListGroup variant="flush" as="ul">
        {todos.map((todo) => (
          <ListGroup.Item
            style={{ cursor: "pointer" }}
            action
            href={`#${todo.id}`}
            as="li"
            key={todo.id}
            onClick={() => {
              dispatch(removeTodo(todo));
            }}
          >
            {todo.value}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </>
  );
};

export default Todo;
