import React from "react";
import { ProviderProps } from "./type";
export declare const CalendarContext: React.Context<{
    firstDateOfWeek: Date;
    selectedDate: Date;
    selectedMonth: number;
    selectedYear: number;
    setFirstDateOfWeek: React.Dispatch<React.SetStateAction<Date>>;
    setSelectedDate: React.Dispatch<React.SetStateAction<Date>>;
    setSelectedMonth: React.Dispatch<React.SetStateAction<number>>;
    setSelectedYear: React.Dispatch<React.SetStateAction<number>>;
}>;
declare const CalendarProvider: ({ children }: ProviderProps) => import("react/jsx-runtime").JSX.Element;
declare const useCalendar: () => {
    firstDateOfWeek: Date;
    selectedDate: Date;
    selectedMonth: number;
    selectedYear: number;
    setFirstDateOfWeek: React.Dispatch<React.SetStateAction<Date>>;
    setSelectedDate: React.Dispatch<React.SetStateAction<Date>>;
    setSelectedMonth: React.Dispatch<React.SetStateAction<number>>;
    setSelectedYear: React.Dispatch<React.SetStateAction<number>>;
};
export { CalendarProvider, useCalendar };
