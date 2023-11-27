/// <reference types="react" />
import { RANGE_STATE } from "constants/calendarData";
export type DispatchTodoModal = React.Dispatch<React.SetStateAction<boolean>>;
export interface DayOfWeekProps {
    dayOfWeek: Date;
    isSelected: boolean;
    isDisabled: boolean;
    isWeekend?: boolean;
    isWithRange?: boolean;
    minDate?: Date;
    maxDate?: Date;
    isTodosEnabled?: boolean;
    isHoliday?: boolean;
}
export interface DayOfWeekStyleProps {
    $isSelected: boolean;
    $isDisabled: boolean;
    $isWeekend: boolean;
    $rangeState?: RANGE_STATE;
    $isHoliday: boolean;
}
