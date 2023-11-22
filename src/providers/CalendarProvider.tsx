import { createContext, useState, useContext } from "react";

import { getFirstDayOfWeek } from "utils/calendarDateData";

import { DispatchDate, DispatchNumber, ProviderProps } from "./type";

const date = new Date();
const month = date.getMonth();
const year = date.getFullYear();
const firstDayOfWeek = getFirstDayOfWeek(date);

export const CalendarContext = createContext<{
  firstDateOfWeek: Date;
  selectedDate: Date;
  selectedMonth: number;
  selectedYear: number;
  setFirstDateOfWeek: DispatchDate;
  setSelectedDate: DispatchDate;
  setSelectedMonth: DispatchNumber;
  setSelectedYear: DispatchNumber;
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
