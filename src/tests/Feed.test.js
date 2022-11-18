import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Feed from "../components/Feed";

describe("display", () => {
  it("renders Feed", () => {
    render(<Feed />);
    const element = screen.getByText("Home");
    expect(element).toBeInTheDocument();
  });
});
