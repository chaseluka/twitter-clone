import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import SignUp from "../components/SignUp";

describe("sign up", () => {
  it("renders normal page if email isn't selected", () => {
    render(<SignUp />);
    const email = screen.getByText("Sign up with Google");
    expect(email).toBeInTheDocument();
  });
  it("renders email comp on click", () => {
    render(<SignUp />);
    const signUp = screen.getByText("Sign up with Email");
    fireEvent.click(signUp);
    const email = screen.getByText("Continue");
    expect(email).toBeInTheDocument();
  });
});
