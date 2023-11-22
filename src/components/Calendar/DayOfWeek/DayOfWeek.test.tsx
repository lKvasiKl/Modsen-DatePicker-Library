import { render, screen } from "@testing-library/react";
import { DayOfWeek, ThemeWrapper } from "components";

describe("DayOfWeek component", () => {
  it("renders DayOfWeek with date", () => {
    render(
      <ThemeWrapper>
        <DayOfWeek
          dayOfWeek={new Date()}
          isDisabled={false}
          isHoliday={false}
          isSelected={false}
          isTodosEnabled={false}
          isWeekend={false}
          isWithRange={false}
          maxDate={undefined}
          minDate={undefined}
        />
      </ThemeWrapper>,
    );

    const dayOfWeek = screen.getByTestId("day-of-week");
    expect(dayOfWeek).toBeInTheDocument();
  });
});
