import React from "react";

import Calendar from "components/Calendar";
import { CalendarProps } from "components/Calendar/types";

class CalendarService {
  private calendar: React.FC<CalendarProps>;

  constructor() {
    this.calendar = Calendar;
  }

  public addDecorator(
    decorator: (calendar: React.FC<CalendarProps>) => React.FC<CalendarProps>,
  ): void {
    this.calendar = decorator(this.calendar);
  }

  public getCalendar(): React.FC<CalendarProps> {
    return this.calendar;
  }
}

export default CalendarService;
