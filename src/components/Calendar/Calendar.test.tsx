import { render, screen } from "@testing-library/react";
import { Calendar } from "components";

import { CALENDAR_TYPES } from "./types";

describe("Calendar component", () => {
  it("renders Calendar", () => {
    render(
      <Calendar
        isHolidayDate={undefined}
        isMondayFirst={false}
        isTodosEnabled={false}
        isWeekendDate={undefined}
        isWithRange={false}
        maxDate={undefined}
        minDate={undefined}
        type={CALENDAR_TYPES.Month}
      />,
    );

    const calendar = screen.getByTestId("calendar");

    expect(calendar).toBeInTheDocument();
  });

  it("renders Calendar with Clear button", () => {
    render(
      <Calendar
        isHolidayDate={undefined}
        isMondayFirst={false}
        isTodosEnabled={false}
        isWeekendDate={undefined}
        isWithRange={true}
        maxDate={undefined}
        minDate={undefined}
        type={CALENDAR_TYPES.Month}
      />,
    );

    const calendar = screen.getByTestId("calendar");
    const rangeClearButton = screen.getByTestId("range-clear-button");

    expect(calendar).toBeInTheDocument();
    expect(rangeClearButton).toBeInTheDocument();
  });
});
