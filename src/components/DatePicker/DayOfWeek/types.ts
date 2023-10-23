import { RANGE_STATE } from "constants/calendarData";

export interface DayOfWeekProps {
  dayOfWeek: Date;
  isSelected: boolean;
  isDisabled: boolean;
  isWeekend: boolean;
  rangeState?: RANGE_STATE;
  onClick?: () => void;
}

export interface DayOfWeekStyleProps {
  $isSelected: boolean;
  $isDisabled: boolean;
  $isWeekend: boolean;
  $rangeState?: RANGE_STATE;
}
