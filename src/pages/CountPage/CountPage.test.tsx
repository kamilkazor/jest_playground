import { render, screen } from "../../test-utils";
import CountPage from "./";

describe("CountPage", () => {
  test("renders correctly", () => {
    render(<CountPage />);
    const container = screen.getByTestId("CountPage");
    expect(container).toBeInTheDocument();
  });
});
