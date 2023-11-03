import {
  DAYS_IN_WEEK,
  MIN_CALENDAR_DAYS,
  MAX_CALENDAR_DAYS,
  MONTH,
} from "constants/calendarData";
import { HOLIDAYS } from "constants/holidays";

export const isCurrentMonth = (date: Date, selectedMonth: number) => {
  return date.getMonth() !== selectedMonth;
};

export const formatDate = (date: Date): string => {
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear().toString();

  return `${day}/${month}/${year}`;
};

export const isSelectedDay = (date: Date, selectedDate: Date): boolean => {
  return (
    date.getDate() === selectedDate.getDate() &&
    date.getMonth() === selectedDate.getMonth() &&
    date.getFullYear() === selectedDate.getFullYear()
  );
};

export const getFirstDayOfWeek = (
  selectedDate: Date,
  isMondayFirst = false,
) => {
  const firstDay = new Date(selectedDate);

  if (isMondayFirst) {
    const dayOfWeek = firstDay.getDay();
    const daysToMonday = dayOfWeek === 0 ? 6 : dayOfWeek - 1;
    firstDay.setDate(firstDay.getDate() - daysToMonday);
  } else {
    firstDay.setDate(firstDay.getDate() - firstDay.getDay());
  }

  return firstDay;
};

export const isWeekendDate = (date: Date): boolean => {
  return date.getDay() === 0 || date.getDay() === 6;
};

export const isHolidayDate = (date: Date): boolean => {
  for (const holiday of HOLIDAYS) {
    const holidayDate = holiday.date;

    if (
      date.getDate() === holidayDate.getDate() &&
      date.getMonth() === holidayDate.getMonth()
    ) {
      return true;
    }
  }

  return false;
};

export const getDaysInMonth = (year: number, month: number) => {
  const date = new Date(year, month + 1, 0);

  return date.getDate();
};

function getMonthFirstDay(year: number, month: number) {
  const firstDayOfMonth = new Date(year, month, 1);
  const dayOfWeek = firstDayOfMonth.getDay();

  return dayOfWeek;
}

export const getLastDayOfPreviousMonth = (currentDate: Date) => {
  let year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  let prevMonth = month - 1;

  if (prevMonth === -1) {
    prevMonth = MONTH.December;
    year--;
  }

  const lastDayOfPreviousMonth = new Date(year, prevMonth, 0);

  return lastDayOfPreviousMonth;
};

const getPreviousMonth = (month: number, year: number) => {
  if (month === 0) {
    return { month: 11, year: year - 1 };
  } else {
    return { month: month - 1, year };
  }
};

const getNextMonth = (month: number, year: number) => {
  if (month === 11) {
    return { month: 0, year: year + 1 };
  } else {
    return { month: month + 1, year };
  }
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
