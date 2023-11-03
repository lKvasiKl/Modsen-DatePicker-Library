import { CALENDAR_TYPES } from "../types";

export const PREV_GREED = "prevGreed" as const;
export const NEXT_GREED = "nextGreed" as const;

export type Direction = typeof NEXT_GREED | typeof PREV_GREED;

export interface GreedSliderProps {
  type: CALENDAR_TYPES;
  minDate?: Date;
  maxDate?: Date;
  isMondayFirst?: boolean;
}
