import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Auth from "../components/Auth";

describe("popup", () => {
  it("is rendered on screen", () => {
    render(<Auth displayPopup={true} />);
    const popup = screen.getByRole("form");

    expect(popup).toBeInTheDocument();
  });
});
