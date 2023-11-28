import { render, screen } from "@testing-library/react";

import { ErrorBoundary, ThemeWrapper } from "components/index";

describe("ErrorBoundary component", () => {
  it("renders children when there is no error", () => {
    const ChildComponent = () => (
      <div data-testid="child-element">Child Element</div>
    );

    render(
      <ThemeWrapper>
        <ErrorBoundary>
          <ChildComponent />
        </ErrorBoundary>
      </ThemeWrapper>,
    );

    const childElement = screen.getByTestId("child-element");
    expect(childElement).toBeInTheDocument();
  });

  it("renders error message when there is an error", () => {
    const ChildComponent = () => {
      throw new Error("Test error");
    };

    render(
      <ThemeWrapper>
        <ErrorBoundary>
          <ChildComponent />
        </ErrorBoundary>
      </ThemeWrapper>,
    );

    const errorBoundary = screen.getByTestId("error-boundary");
    const errorTitle = screen.getByText("An error has occured");
    const errorMessage = screen.getByText("(╯°□°）╯︵ ┻━┻");

    expect(errorBoundary).toBeInTheDocument();
    expect(errorTitle).toBeInTheDocument();
    expect(errorMessage).toBeInTheDocument();
  });
});
