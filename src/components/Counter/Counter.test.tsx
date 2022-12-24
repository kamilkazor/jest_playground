import { render, screen } from "../../test-utils";
import userEvent from "@testing-library/user-event";
import Counter from "./";

describe("Counter", () => {
  test("renders correctly", () => {
    render(<Counter />);
    const count = screen.getByText(/count/i);
    expect(count).toBeInTheDocument();
  });
  test("default count is 0", () => {
    render(<Counter />);
    const count = screen.getByText(/count: 0/i);
    expect(count).toBeInTheDocument();
  });
  test("user can decrement count by 1", () => {
    render(<Counter />);
    const decrementButton = screen.getByTestId("decrement");
    userEvent.click(decrementButton);
    const count = screen.getByText(/count: -1/i);
    expect(count).toBeInTheDocument();
  });
  test("user can increment count by 1", () => {
    render(<Counter />);
    const incrementButton = screen.getByTestId("increment");
    userEvent.click(incrementButton);
    const count = screen.getByText(/count: 1/i);
    expect(count).toBeInTheDocument();
  });
});
