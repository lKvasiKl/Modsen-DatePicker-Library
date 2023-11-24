import { DATE_UNIT, DAYS_IN_WEEK } from "constants/calendarData";
import { HOLIDAYS } from "constants/holidays";

export const getFirstDayOfWeek = (
  selectedDate: Date,
  isMondayFirst = false,
) => {
  const firstDay = new Date(selectedDate);

  if (isMondayFirst) {
    const dayOfWeek = firstDay.getDay();
    const daysToMonday =
      dayOfWeek === 0 ? DAYS_IN_WEEK - DATE_UNIT : dayOfWeek - DATE_UNIT;
    firstDay.setDate(firstDay.getDate() - daysToMonday);
  } else {
    firstDay.setDate(firstDay.getDate() - firstDay.getDay());
  }

  return firstDay;
};

export const isWeekendDate = (date: Date): boolean => {
  return date.getDay() === 0 || date.getDay() === DAYS_IN_WEEK - DATE_UNIT;
};

export const isHolidayDate = (date: Date): boolean => {
  return HOLIDAYS.some(
    (holiday) =>
      date.getDate() === holiday.date.getDate() &&
      date.getMonth() === holiday.date.getMonth(),
  );
};

export const formatDate = (date: Date): string => {
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + DATE_UNIT).toString().padStart(2, "0");
  const year = date.getFullYear().toString();

  return `${day}/${month}/${year}`;
};
