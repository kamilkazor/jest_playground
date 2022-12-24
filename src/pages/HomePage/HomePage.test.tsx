import { render, screen } from "../../test-utils";
import HomePage from "./";

describe("HomePage", () => {
  test("renders correctly", () => {
    render(<HomePage />);
    const title = screen.getByText(/About/i);
    expect(title).toBeInTheDocument();
  });
});
