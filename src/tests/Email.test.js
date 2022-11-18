import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Email from "../components/Email";

describe("email", () => {
  it("shows sign into if user selected this", () => {
    render(<Email login={true} />);
    const signIn = screen.getByText("Sign into your account");
    expect(signIn).toBeInTheDocument();
  });
  it("shows create account if user selected this", () => {
    render(<Email login={false} />);
    const create = screen.getByText("Create your account");
    expect(create).toBeInTheDocument();
  });
  it("renders form normally", () => {
    render(<Email />);
    const element = screen.getByText("Continue");
    expect(element).toBeInTheDocument();
  });
});
describe("error", () => {
  it("says email is in use", () => {
    render(<Email emailIsTaken={true} />);
    const error = screen.getByText("This email is in use.", { exact: false });
    expect(error).toBeInTheDocument();
  });
  it("says email is incorrect", () => {
    render(<Email incorrectEmail={true} />);
    const error = screen.getByText(
      "This email is not associated with an account.",
      { exact: false }
    );
    expect(error).toBeInTheDocument();
  });
  it("something went wrong", () => {
    render(<Email otherError={true} />);
    const error = screen.getByText("Something went wrong", { exact: false });
    expect(error).toBeInTheDocument();
  });
});
