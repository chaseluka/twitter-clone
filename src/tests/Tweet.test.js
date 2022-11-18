import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Tweet from "../components/Tweet";

const tweets = [
  {
    id: "foo",
    displayName: "Good",
    username: "bla",
    time: 1668800000,
    tweet: "Hello World",
    likes: 0,
  },
  {
    id: "bar",
    displayName: "Don",
    username: "go",
    time: 1668803019,
    tweet: "My Name is don",
    likes: 34,
  },
];

describe("display", () => {
  it("renders Tweet", () => {
    render(<Tweet tweets={tweets} />);
    const element = screen.getByText("Hello World");
    expect(element).toBeInTheDocument();
  });
  it("renders all correct tweet info", () => {
    render(<Tweet tweets={tweets} />);
    const displayName = screen.getByText("Don");
    const userName = screen.getByText("@bla");
    const tweet = screen.getByText("My Name is don");
    const likes = screen.getByText("34");

    expect(displayName).toBeInTheDocument();
    expect(userName).toBeInTheDocument();
    expect(tweet).toBeInTheDocument();
    expect(likes).toBeInTheDocument();
  });
});
