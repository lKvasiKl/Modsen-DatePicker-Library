import React from "react";
import { CalendarProps } from "components/Calendar/types";
declare class CalendarService {
    private calendar;
    constructor();
    addDecorator(decorator: (calendar: React.FC<CalendarProps>) => React.FC<CalendarProps>): void;
    getCalendar(): React.FC<CalendarProps>;
}
export default CalendarService;
