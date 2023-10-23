import {
  DAYS_IN_WEEK,
  MIN_CALENDAR_DAYS,
  MAX_CALENDAR_DAYS,
  MONTH,
} from "constants/calendarData";

export const isWeekendDate = (date: Date): boolean => {
  return date.getDay() === 0 || date.getDay() === 6;
};

export const isCurrentMonth = (date: Date, currentDate: Date) => {
  return date.getMonth() !== currentDate.getMonth();
};

export const isSelectedDay = (date: Date, selectedDate: Date): boolean => {
  const day = date.getDate();
  const selectedDay = selectedDate.getDate();

  return day === selectedDay;
};

export const getDaysInMonth = (year: number, month: number) => {
  const date = new Date(year, month + 1, 0);

  return date.getDate();
};

export const getMonthFirstDay = (currentDate: Date) => {
  const firstDayOfMonth = new Date(currentDate);
  firstDayOfMonth.setDate(1);

  return firstDayOfMonth.getDay();
};

export const getLastDayOfPreviousMonth = (currentDate: Date) => {
  let year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  let prevMonth = month - 1;

  if (prevMonth === -1) {
    prevMonth = MONTH.DECEMBER;
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

export const getCalendarData = (currentDate: Date, isSundayFirst: boolean) => {
  let monthNumber = currentDate.getMonth();
  let year = currentDate.getFullYear();
  const totalDaysInMonth = getDaysInMonth(year, monthNumber);
  const monthFirstDay = getMonthFirstDay(currentDate);
  const calendarData = [];

  let daysFromPrevMonth;
  if (isSundayFirst) {
    daysFromPrevMonth = (DAYS_IN_WEEK + monthFirstDay) % DAYS_IN_WEEK;
  } else {
    daysFromPrevMonth = (DAYS_IN_WEEK + monthFirstDay - 1) % DAYS_IN_WEEK;
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
    if (newDate.getMonth() === nextMonth) {
      calendarData.push(newDate);
    }

    if (calendarData.length === MIN_CALENDAR_DAYS) {
      return calendarData;
    }
  }

  return calendarData;
};
