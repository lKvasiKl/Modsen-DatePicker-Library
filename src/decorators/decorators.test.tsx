import React from "react";
import { render, screen } from "@testing-library/react";
import CalendarService from "decorators/index";

import Calendar from "components/Calendar";
import { CALENDAR_TYPES, CalendarProps } from "components/Calendar/types";

describe("CalendarService", () => {
  it("should create an instance of CalendarService", () => {
    const calendarService = new CalendarService();
    expect(calendarService).toBeInstanceOf(CalendarService);
  });

  it("should return the Calendar component", () => {
    const calendarService = new CalendarService();
    const calendarComponent = calendarService.getCalendar();
    expect(calendarComponent).toEqual(Calendar);
  });

  it("should add a decorator to the Calendar component", () => {
    const calendarService = new CalendarService();

    const mockDecorator = (calendar: React.FC<CalendarProps>) => {
      return (props: CalendarProps) => (
        <div>
          <h1>Decorated Calendar</h1>
          {calendar(props)}
        </div>
      );
    };

    calendarService.addDecorator(mockDecorator);

    const DecoratedCalendar = calendarService.getCalendar();

    render(<DecoratedCalendar type={CALENDAR_TYPES.Month} />);

    const decoratedHeader = screen.getByText("Decorated Calendar");
    const originalCalendar = screen.getByTestId("calendar");

    expect(decoratedHeader).toBeInTheDocument();
    expect(originalCalendar).toBeInTheDocument();
  });
});
