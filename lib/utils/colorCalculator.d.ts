import { RANGE_STATE } from "constants/calendarData";
export declare const determineBackgroundColor: ($isSelected: boolean, $rangeState: RANGE_STATE | undefined) => string;
export declare const determineTextColor: ($isSelected: boolean, $isDisabled: boolean, $isWeekend: boolean, $rangeState: RANGE_STATE | undefined, $isHoliday: boolean) => string;
