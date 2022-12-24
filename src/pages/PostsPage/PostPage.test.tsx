import { render, screen } from "../../test-utils";
import PostsPage from "./";

describe("PostsPage", () => {
  test("renders correctly", () => {
    render(<PostsPage />);
    const container = screen.getByTestId("PostsPage");
    expect(container).toBeInTheDocument();
  });
});
