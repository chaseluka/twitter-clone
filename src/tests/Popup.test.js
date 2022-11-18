import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Popup from "../components/Popup";

describe("login", () => {
  it("is rendered on screen when selected", () => {
    render(<Popup login={true} />);
    const login = screen.getByText("Login with Google");
    expect(login).toBeInTheDocument();
  });
  it("is not rendered on screen, instead sign up is", () => {
    render(<Popup login={false} />);
    const signUp = screen.getByText("Sign up with Google");
    expect(signUp).toBeInTheDocument();
  });
});
