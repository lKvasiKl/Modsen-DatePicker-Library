import { fireEvent, render, screen } from "@testing-library/react";
import { ClearButton, ThemeWrapper } from "components";

describe("Calendar component", () => {
  const onClearClickMock = jest.fn();
  const title = "Clear Range";

  it("renders ClearButton with title", () => {
    render(
      <ThemeWrapper>
        <ClearButton title={title} onClearClick={onClearClickMock} />
      </ThemeWrapper>,
    );

    const rangeClearButton = screen.getByTestId("range-clear-button");
    const clearButtonTitle = screen.getByText(title);

    expect(rangeClearButton).toBeInTheDocument();
    expect(clearButtonTitle).toBeInTheDocument();
  });

  it("calls onClearClick when the button is clicked", () => {
    render(
      <ThemeWrapper>
        <ClearButton title={title} onClearClick={onClearClickMock} />
      </ThemeWrapper>,
    );

    const clearButtonTitle = screen.getByText(title);

    fireEvent.click(clearButtonTitle);
    expect(onClearClickMock).toHaveBeenCalled();
  });
});
