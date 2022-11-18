import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Login from "../components/Login";

describe("login", () => {
  it("is renders normal page if email isn't selected", () => {
    render(<Login />);
    const login = screen.getByText("Login with Google");
    expect(login).toBeInTheDocument();
  });
  it("email comp renders on click", () => {
    render(<Login />);
    const signUp = screen.getByText("Login with Email");
    fireEvent.click(signUp);
    const email = screen.getByText("Continue");
    expect(email).toBeInTheDocument();
  });
});
