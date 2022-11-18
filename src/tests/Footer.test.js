import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Footer from "../components/Footer";

describe("display", () => {
  it("renders footer", () => {
    render(<Footer />);
    const element = screen.getByText("Log in");
    expect(element).toBeInTheDocument();
  });
});
