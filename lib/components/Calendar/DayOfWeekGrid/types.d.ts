import { CALENDAR_TYPES } from "../types";
export interface DayOfWeekGridProps {
    type: CALENDAR_TYPES;
    isMondayFirst?: boolean;
    isWeekendDate?: (date: Date) => boolean;
    isWithRange?: boolean;
    minDate?: Date;
    maxDate?: Date;
    isTodosEnabled?: boolean;
    isHolidayDate?: (date: Date) => boolean;
}
