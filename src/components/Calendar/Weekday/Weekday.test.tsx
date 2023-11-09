import { render } from "@testing-library/react";
import { ThemeWrapper, Weekday } from "components";

import { WEEKDAYS } from "constants/calendarData";

describe("Weekday component", () => {
  it("renders Weekday with the provided weekday", () => {
    const { getByText } = render(
      <ThemeWrapper>
        <Weekday weekday={WEEKDAYS["Monday"]} />
      </ThemeWrapper>,
    );

    const weekdayElement = getByText("Mo");

    expect(weekdayElement).toBeInTheDocument();
  });
});
