import { render, screen } from "../../test-utils";
import Navbar from "./";

describe("Navbar", () => {
  test("renders correctly", () => {
    render(<Navbar />);
    const brand = screen.getByText(/jest playground/i);
    expect(brand).toBeInTheDocument();
  });
});
