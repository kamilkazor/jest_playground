import { render, screen } from "../../test-utils";
import TodoPage from "./";

describe("TodoPage", () => {
  test("renders correctly", () => {
    render(<TodoPage />);
    const container = screen.getByTestId("TodoPage");
    expect(container).toBeInTheDocument();
  });
});
