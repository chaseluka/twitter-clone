import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Write from "../components/Write";

describe("display", () => {
  it("renders Write", () => {
    render(<Write />);
    const element = screen.getByText("Tweet");
    expect(element).toBeInTheDocument();
  });
});
