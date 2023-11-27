export interface CalendarProps {
    type: CALENDAR_TYPES;
    isMondayFirst?: boolean;
    isWeekendDate?: (date: Date) => boolean;
    isWithRange?: boolean;
    minDate?: Date;
    maxDate?: Date;
    isTodosEnabled?: boolean;
    isHolidayDate?: (date: Date) => boolean;
}
export interface CalendarStyledProps {
    $isRangeExist?: boolean;
    $isTodosEnabled?: boolean;
}
export declare enum CALENDAR_TYPES {
    Week = 1,
    Month = 2,
    Year = 3
}
