import { render, screen } from "../../test-utils";
import userEvent from "@testing-library/user-event";
import { rest } from "msw";
import { server } from "../../mocks/server";
import GetPosts from "./";

describe("GetPosts", () => {
  test("renders correctly", () => {
    render(<GetPosts />);
    const button = screen.getByText(/get posts/i);
    expect(button).toBeInTheDocument();
  });
  test("there is no posts rendered before clicking button", () => {
    render(<GetPosts />);
    const postsList = screen.queryAllByRole("listitem");
    expect(postsList.length).toBe(0);
  });
  test("posts are fetched and rendered after clicking button", async () => {
    render(<GetPosts />);
    const button = screen.getByText(/get posts/i);
    userEvent.click(button);
    const postsList = await screen.findAllByRole("listitem");
    expect(postsList.length).toBeGreaterThan(0);
  });
  test("error message is displayed after failed fetch", async () => {
    server.use(
      rest.get(
        "https://jsonplaceholder.typicode.com/posts",
        (req, res, ctx) => {
          return res(ctx.status(500));
        }
      )
    );
    render(<GetPosts />);
    const button = screen.getByText(/get posts/i);
    userEvent.click(button);
    const errorMessage = await screen.findByText(/error/i);
    expect(errorMessage).toBeInTheDocument();
  });
});
