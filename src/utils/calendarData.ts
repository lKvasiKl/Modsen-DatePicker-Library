export const isWeekendDate = (date: Date): boolean => {
  return date.getDay() === 0 || date.getDay() === 6;
};

export const isCurrentMonth = (date: Date) => {
  const month = date.getMonth();

  return month !== month - 1;
};

export const isSelectedDay = (date: Date, selectedDate: Date): boolean => {
  const day = date.getDate();
  const selectedDay = selectedDate.getDate();

  return day === selectedDay;
};
