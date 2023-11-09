import {
  DAYS_IN_WEEK,
  MIN_CALENDAR_DAYS,
  MAX_CALENDAR_DAYS,
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
  const weekData = [];

  for (let i = 0; i < 7; i++) {
    const currentDate = new Date(firstDayOfWeek);
    currentDate.setDate(firstDayOfWeek.getDate() + i);
    weekData.push(currentDate);
  }

  return weekData;
};

export const getCalendarMonthData = (
  monthNumber: number,
  year: number,
  isMondayFirst?: boolean,
) => {
  const totalDaysInMonth = getDaysInMonth(year, monthNumber);
  const monthFirstDay = getMonthFirstDay(year, monthNumber);
  const calendarData = [];

  let daysFromPrevMonth;
  if (isMondayFirst) {
    daysFromPrevMonth = (DAYS_IN_WEEK + monthFirstDay - 1) % DAYS_IN_WEEK;
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

  for (
    let day = prevMonthDays - daysFromPrevMonth + 1;
    day <= prevMonthDays;
    day++
  ) {
    calendarData.push(new Date(prevMonthYear, prevMonth, day));
  }

  for (let day = 1; day <= totalDaysInMonth; day++) {
    calendarData.push(new Date(year, monthNumber, day));
  }

  const remainingDays = totalDaysInMonth + daysFromPrevMonth;
  const weeksToAdd = Math.ceil(MAX_CALENDAR_DAYS / DAYS_IN_WEEK);
  const daysToAdd = weeksToAdd * DAYS_IN_WEEK - remainingDays;

  for (let day = 1; day <= daysToAdd; day++) {
    const newDate = new Date(nextMonthYear, nextMonth, day);

    if (calendarData.length === MIN_CALENDAR_DAYS) {
      return calendarData;
    }

    if (newDate.getMonth() === nextMonth) {
      calendarData.push(newDate);
    }
  }

  return calendarData;
};

export const getCalendarYearData = (year: number, isMondayFirst = false) => {
  const yearData = [];
  for (let month = 0; month < 12; month++) {
    const monthData = getCalendarMonthData(month, year, isMondayFirst);
    yearData.push(monthData);
  }

  return yearData;
};
