import { HOLIDAYS } from "constants/holidays";

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
  return HOLIDAYS.some(
    (holiday) =>
      date.getDate() === holiday.date.getDate() &&
      date.getMonth() === holiday.date.getMonth(),
  );
};

export const formatDate = (date: Date): string => {
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear().toString();

  return `${day}/${month}/${year}`;
};
