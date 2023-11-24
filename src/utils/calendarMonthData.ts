import { DATE_UNIT, MONTH, MONTH_COUNT } from "constants/calendarData";

export const isCurrentMonth = (date: Date, selectedMonth: number) => {
  return date.getMonth() !== selectedMonth;
};

export const getPreviousMonth = (month: number, year: number) => {
  if (month === 0) {
    return { month: MONTH_COUNT - DATE_UNIT, year: year - DATE_UNIT };
  } else {
    return { month: month - DATE_UNIT, year };
  }
};

export const getNextMonth = (month: number, year: number) => {
  if (month === MONTH_COUNT - DATE_UNIT) {
    return { month: 0, year: year + DATE_UNIT };
  } else {
    return { month: month + DATE_UNIT, year };
  }
};

export const getDaysInMonth = (year: number, month: number) => {
  const date = new Date(year, month + DATE_UNIT, 0);

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

  let prevMonth = month - DATE_UNIT;

  if (prevMonth === -1) {
    prevMonth = MONTH.December;
    year--;
  }

  const lastDayOfPreviousMonth = new Date(year, prevMonth, 0);

  return lastDayOfPreviousMonth;
};
