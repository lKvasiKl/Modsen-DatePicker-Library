import { render } from "@testing-library/react";
import { ThemeWrapper, WeekdaysHeader } from "components";

import { WEEKDAYS } from "constants/calendarData";

describe("WeekdaysHeader component", () => {
  it("renders weekdays header with Sunday first", () => {
    const { getByText } = render(
      <ThemeWrapper>
        <WeekdaysHeader isMondayFirst={false} />
      </ThemeWrapper>,
    );

    for (const day of Object.values(WEEKDAYS)) {
      const weekdayElement = getByText(day);
      expect(weekdayElement).toBeInTheDocument();
    }
  });

  it("renders weekdays header with Monday first", () => {
    const { getByText } = render(
      <ThemeWrapper>
        <WeekdaysHeader isMondayFirst={true} />
      </ThemeWrapper>,
    );

    const weekdays = Object.values(WEEKDAYS);
    const reorderedWeekdays = [...weekdays.slice(1), weekdays[0]];
    for (const day of reorderedWeekdays) {
      const weekdayElement = getByText(day);
      expect(weekdayElement).toBeInTheDocument();
    }
  });
});
