import { Weekday } from "./types";

export enum RANGE_STATE {
  Start = "Start",
  Between = "Between",
  End = "End",
}

export const WEEKDAYS: Weekday = {
  Sunday: "Su",
  Monday: "Mo",
  Tuesday: "Tu",
  Wednesday: "We",
  Thursday: "Th",
  Friday: "Fr",
  Saturday: "Sa",
};

export enum MONTH {
  JANUARY,
  FEBRUARY,
  MARCH,
  APRIL,
  MAY,
  JUNE,
  JULY,
  AUGUST,
  SEPTEMBER,
  OCTOBER,
  NOVEMBER,
  DECEMBER,
}

export const DAYS_IN_WEEK = 7;
export const MIN_CALENDAR_DAYS = 35;
export const MAX_CALENDAR_DAYS = 42;
