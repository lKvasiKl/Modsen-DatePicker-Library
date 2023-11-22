import { CALENDAR_TYPES } from "../types";

export const PREV_GRID = "prevGreed" as const;
export const NEXT_GRID = "nextGreed" as const;

export type Direction = typeof NEXT_GRID | typeof PREV_GRID;

export interface GridSliderProps {
  type: CALENDAR_TYPES;
  minDate?: Date;
  maxDate?: Date;
  isMondayFirst?: boolean;
}
