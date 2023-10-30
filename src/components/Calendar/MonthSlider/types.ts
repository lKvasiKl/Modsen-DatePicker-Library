export const PREV_MONTH = "prevMonth" as const;
export const NEXT_MONTH = "nextMonth" as const;

export type Direction = typeof NEXT_MONTH | typeof PREV_MONTH;

export interface MonthSliderProps {
  minDate?: Date;
  maxDate?: Date;
}
