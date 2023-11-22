import { fireEvent, render, screen } from "@testing-library/react";
import { Button, ThemeWrapper } from "components";

describe("Calendar component", () => {
  const onButtonClickMock = jest.fn();
  const title = "Clear Range";

  it("renders ClearButton with title", () => {
    render(
      <ThemeWrapper>
        <Button title={title} onButtonClick={onButtonClickMock} />
      </ThemeWrapper>,
    );

    const rangeClearButton = screen.getByTestId("calendar-button");
    const clearButtonTitle = screen.getByText(title);

    expect(rangeClearButton).toBeInTheDocument();
    expect(clearButtonTitle).toBeInTheDocument();
  });

  it("calls onClearClick when the button is clicked", () => {
    render(
      <ThemeWrapper>
        <Button title={title} onButtonClick={onButtonClickMock} />
      </ThemeWrapper>,
    );

    const clearButtonTitle = screen.getByText(title);

    fireEvent.click(clearButtonTitle);
    expect(onButtonClickMock).toHaveBeenCalled();
  });
});
