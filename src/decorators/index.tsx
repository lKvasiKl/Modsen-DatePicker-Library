import Calendar from "components/Calendar";

import React from "react";

class CalendarService {
  private calendar: React.FC;

  constructor() {
    this.calendar = Calendar;
  }

  public addDecorator(decorator: (calendar: React.FC) => React.FC): void {
    this.calendar = decorator(this.calendar);
  }

  public getCalendar(): React.FC {
    return this.calendar;
  }
}

export default CalendarService;
