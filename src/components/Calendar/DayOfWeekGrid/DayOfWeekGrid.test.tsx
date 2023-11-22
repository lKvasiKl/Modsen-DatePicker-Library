import { render, screen } from "@testing-library/react";
import { DayOfWeekGrid, ThemeWrapper } from "components";

import { CALENDAR_TYPES } from "../types";

describe("DayOfWeekGrid component", () => {
  it("renders DayOfWeekGrid for Week", () => {
    render(
      <ThemeWrapper>
        <DayOfWeekGrid
          isMondayFirst={false}
          isTodosEnabled={false}
          isWeekendDate={() => false}
          isWithRange={false}
          type={CALENDAR_TYPES.Week}
        />
      </ThemeWrapper>,
    );

    const dayOfWeekGrid = screen.getByTestId("day-of-week-grid");

    expect(dayOfWeekGrid).toBeInTheDocument();
  });

  it("renders DayOfWeekGrid for Month", () => {
    render(
      <ThemeWrapper>
        <DayOfWeekGrid
          isMondayFirst={false}
          isTodosEnabled={false}
          isWeekendDate={() => false}
          isWithRange={false}
          type={CALENDAR_TYPES.Month}
        />
      </ThemeWrapper>,
    );

    const dayOfWeekGrid = screen.getByTestId("day-of-week-grid");

    expect(dayOfWeekGrid).toBeInTheDocument();
  });

  it("renders DayOfWeekGrid for Year", () => {
    render(
      <ThemeWrapper>
        <DayOfWeekGrid
          isMondayFirst={false}
          isTodosEnabled={false}
          isWeekendDate={() => false}
          isWithRange={false}
          type={CALENDAR_TYPES.Year}
        />
      </ThemeWrapper>,
    );

    const dayOfWeekGrid = screen.getByTestId("day-of-week-grid-year");

    expect(dayOfWeekGrid).toBeInTheDocument();
  });
});
