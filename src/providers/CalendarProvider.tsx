import { createContext, useState, useContext } from "react";

import { ProviderProps } from "./type";

const date = new Date();
const month = date.getMonth();
const year = date.getFullYear();

export const CalendarContext = createContext<{
  selectedDate: Date;
  selectedMonth: number;
  selectedYear: number;
  setSelectedDate: React.Dispatch<React.SetStateAction<Date>>;
  setSelectedMonth: React.Dispatch<React.SetStateAction<number>>;
  setSelectedYear: React.Dispatch<React.SetStateAction<number>>;
}>({
  selectedDate: date,
  selectedMonth: month,
  selectedYear: year,
  setSelectedDate: () => undefined,
  setSelectedMonth: () => undefined,
  setSelectedYear: () => undefined,
});

const CalendarProvider = ({ children }: ProviderProps) => {
  const [selectedDate, setSelectedDate] = useState(date);
  const [selectedMonth, setSelectedMonth] = useState(month);
  const [selectedYear, setSelectedYear] = useState(year);

  const value = {
    selectedDate,
    selectedMonth,
    selectedYear,
    setSelectedDate,
    setSelectedMonth,
    setSelectedYear,
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
