import { MONTH } from "constants/calendarData";

export const isCurrentMonth = (date: Date, selectedMonth: number) => {
  return date.getMonth() !== selectedMonth;
};

export const getPreviousMonth = (month: number, year: number) => {
  if (month === 0) {
    return { month: 11, year: year - 1 };
  } else {
    return { month: month - 1, year };
  }
};

export const getNextMonth = (month: number, year: number) => {
  if (month === 11) {
    return { month: 0, year: year + 1 };
  } else {
    return { month: month + 1, year };
  }
};

export const getDaysInMonth = (year: number, month: number) => {
  const date = new Date(year, month + 1, 0);

  return date.getDate();
};

export function getMonthFirstDay(year: number, month: number) {
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
