import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import FinishAccount from "../components/FinishAccount";

describe("FinishAccount", () => {
  it("renders form normally", () => {
    render(<FinishAccount />);
    const element = screen.getByText("Finish Creating Account");
    expect(element).toBeInTheDocument();
  });
});
describe("error", () => {
  it("says username is in use", () => {
    render(<FinishAccount usernameIsTaken={true} />);
    const error = screen.getByText("Username is already in use", {
      exact: false,
    });
    expect(error).toBeInTheDocument();
  });
});
