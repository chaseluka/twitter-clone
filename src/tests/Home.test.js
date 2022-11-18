import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "../components/Home";

describe("display", () => {
  it("renders feed", () => {
    render(<Home />);
    const element = screen.getByText("Tweet");
    expect(element).toBeInTheDocument();
  });
  it("renders sidebar", () => {
    render(<Home />);
    const element = screen.getByText("What's Happening");
    expect(element).toBeInTheDocument();
  });
});
