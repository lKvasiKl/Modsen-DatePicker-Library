import { CALENDAR_TYPES } from "../types";
export declare const PREV_GRID: "prevGreed";
export declare const NEXT_GRID: "nextGreed";
export type Direction = typeof NEXT_GRID | typeof PREV_GRID;
export interface GridSliderProps {
    type: CALENDAR_TYPES;
    minDate?: Date;
    maxDate?: Date;
    isMondayFirst?: boolean;
}
