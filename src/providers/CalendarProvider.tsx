import { createContext, useState, useContext } from "react";

import { ProviderProps } from "./type";
import { getFirstDayOfWeek } from "utils/calendarData";

const date = new Date();
const month = date.getMonth();
const year = date.getFullYear();
const firstDayOfWeek = getFirstDayOfWeek(date);

export const CalendarContext = createContext<{
  firstDateOfWeek: Date;
  selectedDate: Date;
  selectedMonth: number;
  selectedYear: number;
  setFirstDateOfWeek: React.Dispatch<React.SetStateAction<Date>>;
  setSelectedDate: React.Dispatch<React.SetStateAction<Date>>;
  setSelectedMonth: React.Dispatch<React.SetStateAction<number>>;
  setSelectedYear: React.Dispatch<React.SetStateAction<number>>;
}>({
  firstDateOfWeek: firstDayOfWeek,
  selectedDate: date,
  selectedMonth: month,
  selectedYear: year,
  setFirstDateOfWeek: () => undefined,
  setSelectedDate: () => undefined,
  setSelectedMonth: () => undefined,
  setSelectedYear: () => undefined,
});

const CalendarProvider = ({ children }: ProviderProps) => {
  const [firstDateOfWeek, setFirstDateOfWeek] = useState(firstDayOfWeek);
  const [selectedDate, setSelectedDate] = useState(date);
  const [selectedMonth, setSelectedMonth] = useState(month);
  const [selectedYear, setSelectedYear] = useState(year);

  const value = {
    firstDateOfWeek,
    selectedDate,
    selectedMonth,
    selectedYear,
    setSelectedDate,
    setSelectedMonth,
    setSelectedYear,
    setFirstDateOfWeek,
  };

  return (
    <CalendarContext.Provider value={value}>
      {children}
    </CalendarContext.Provider>
  );
};

const useCalendar = () => {
  return useContext(CalendarContext);
};

export { CalendarProvider, useCalendar };
