import { render, screen, fireEvent } from "@testing-library/react";
import { DatePicker, ThemeWrapper } from "components";

const Calendar = () => <div data-testid="calendar">Mock Calendar</div>;

jest.mock("providers/CalendarProvider", () => ({
  useCalendar: jest.fn(() => ({
    selectedDate: new Date(2022, 11, 25),
    setRange: jest.fn(),
  })),
}));

jest.mock("providers/DateProvider", () => ({
  useDate: jest.fn(() => ({
    setRange: jest.fn(),
  })),
}));

describe("DatePicker component", () => {
  it("renders with initial date and label", () => {
    render(
      <ThemeWrapper>
        <DatePicker Calendar={Calendar} label="Choose Date" />
      </ThemeWrapper>,
    );

    const labelElement = screen.getByText("Choose Date");
    const calendarIcon = screen.getByTestId("calendar-icon-button");

    expect(labelElement).toBeInTheDocument();
    expect(calendarIcon).toBeInTheDocument();
  });

  it("opens and closes the calendar on calendar icon click", () => {
    render(
      <ThemeWrapper>
        <DatePicker Calendar={Calendar} label="Choose Date" />
      </ThemeWrapper>,
    );

    const calendarIcon = screen.getByTestId("calendar-icon-button");

    fireEvent.click(calendarIcon);

    const calendar = screen.getByText("Mock Calendar");

    expect(calendar).toBeVisible();

    fireEvent.click(calendarIcon);

    expect(calendar).not.toBeVisible();
  });
});
