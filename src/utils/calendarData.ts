import {
  DATE_UNIT,
  DAYS_IN_WEEK,
  MAX_CALENDAR_DAYS,
  MONTH_COUNT,
} from "constants/calendarData";

import {
  getDaysInMonth,
  getMonthFirstDay,
  getNextMonth,
  getPreviousMonth,
} from "./calendarMonthData";

export const isSelectedDay = (date: Date, selectedDate: Date): boolean => {
  return (
    date.getDate() === selectedDate.getDate() &&
    date.getMonth() === selectedDate.getMonth() &&
    date.getFullYear() === selectedDate.getFullYear()
  );
};

export const getCalendarWeekData = (firstDayOfWeek: Date) => {
  return Array.from({ length: DAYS_IN_WEEK }, (_, i) => {
    const currentDate = new Date(firstDayOfWeek);
    currentDate.setDate(firstDayOfWeek.getDate() + i);

    return currentDate;
  });
};

export const getCalendarMonthData = (
  monthNumber: number,
  year: number,
  isMondayFirst?: boolean,
) => {
  const totalDaysInMonth = getDaysInMonth(year, monthNumber);
  const monthFirstDay = getMonthFirstDay(year, monthNumber);

  let daysFromPrevMonth: number;
  if (isMondayFirst) {
    daysFromPrevMonth =
      (DAYS_IN_WEEK + monthFirstDay - DATE_UNIT) % DAYS_IN_WEEK;
  } else {
    daysFromPrevMonth = (DAYS_IN_WEEK + monthFirstDay) % DAYS_IN_WEEK;
  }

  const { month: prevMonth, year: prevMonthYear } = getPreviousMonth(
    monthNumber,
    year,
  );
  const { month: nextMonth, year: nextMonthYear } = getNextMonth(
    monthNumber,
    year,
  );

  const prevMonthDays = getDaysInMonth(prevMonthYear, prevMonth);

  const prevMonthDates = Array.from({ length: daysFromPrevMonth }, (_, i) => {
    const day = prevMonthDays - daysFromPrevMonth + DATE_UNIT + i;
    return new Date(prevMonthYear, prevMonth, day);
  });

  const currentMonthDates = Array.from({ length: totalDaysInMonth }, (_, i) => {
    const day = i + DATE_UNIT;
    return new Date(year, monthNumber, day);
  });

  const remainingDays = totalDaysInMonth + daysFromPrevMonth;
  const weeksToAdd = Math.ceil(MAX_CALENDAR_DAYS / DAYS_IN_WEEK);
  const daysToAdd = weeksToAdd * DAYS_IN_WEEK - remainingDays;

  const nextMonthDates = Array.from({ length: daysToAdd }, (_, i) => {
    const day = i + DATE_UNIT;
    const newDate = new Date(nextMonthYear, nextMonth, day);

    return newDate.getMonth() === nextMonth ? newDate : null;
  }).filter((date) => date !== null) as Date[];

  return [...prevMonthDates, ...currentMonthDates, ...nextMonthDates];
};

export const getCalendarYearData = (year: number, isMondayFirst = false) => {
  return Array.from({ length: MONTH_COUNT }, (_, month) =>
    getCalendarMonthData(month, year, isMondayFirst),
  );
};
