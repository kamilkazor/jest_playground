import { render, screen } from "./test-utils";
import App from "./App";

describe("App", () => {
  test("renders correctly", () => {
    render(<App />);
    const container = screen.getByTestId("App");
    expect(container).toBeInTheDocument();
  });
});
