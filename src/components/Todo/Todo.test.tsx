import { render, screen } from "../../test-utils";
import userEvent from "@testing-library/user-event";
import Todo from "./";

describe("Todo", () => {
  function addTodos(todos: string[]) {
    const input = screen.getByRole("textbox");
    const addButton = screen.getByRole("button");
    todos.forEach((todo) => {
      if (todo) userEvent.type(input, todo);
      userEvent.click(addButton);
    });
  }
  test("renders correctly", () => {
    render(<Todo />);
    const input = screen.getByRole("textbox");
    expect(input).toBeInTheDocument();
  });
  test("user can type inside input field", () => {
    render(<Todo />);
    const input = screen.getByRole("textbox");
    expect(input).toHaveValue("");
    userEvent.type(input, "test");
    expect(input).toHaveValue("test");
  });
  test("input is cleared after clicking add button", () => {
    render(<Todo />);
    const input = screen.getByRole("textbox");
    addTodos(["test"]);
    expect(input).toHaveValue("");
  });
  test("input text is added to the list after submit", () => {
    render(<Todo />);
    addTodos(["test todo"]);
    const testTodo = screen.getByText("test todo");
    expect(testTodo).toBeInTheDocument();
  });
  test("user can add multiple todos to the list", () => {
    render(<Todo />);
    addTodos(["test1", "test2", "test3"]);
    const listItems = screen.queryAllByRole("listitem");
    expect(listItems.length).toBe(3);
  });
  test("user can't add empty todo", () => {
    render(<Todo />);
    addTodos([""]);
    const listItems = screen.queryAllByRole("listitem");
    expect(listItems.length).toBe(0);
  });
  test("user can remove specific todo by click", () => {
    render(<Todo />);
    addTodos(["test1", "test2", "test3"]);
    const test1 = screen.getByText("test1");
    const test2 = screen.getByText("test2");
    const test3 = screen.getByText("test3");
    userEvent.click(test2);
    expect(test2).not.toBeInTheDocument();
    expect(test1).toBeInTheDocument();
    expect(test3).toBeInTheDocument();
  });
});
