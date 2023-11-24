/// <reference types="react" />
import { DispatchDate, DispatchNumber, ProviderProps } from "./type";
export declare const CalendarContext: import("react").Context<{
    firstDateOfWeek: Date;
    selectedDate: Date;
    selectedMonth: number;
    selectedYear: number;
    setFirstDateOfWeek: DispatchDate;
    setSelectedDate: DispatchDate;
    setSelectedMonth: DispatchNumber;
    setSelectedYear: DispatchNumber;
}>;
declare const CalendarProvider: ({ children }: ProviderProps) => import("react/jsx-runtime").JSX.Element;
declare const useCalendar: () => {
    firstDateOfWeek: Date;
    selectedDate: Date;
    selectedMonth: number;
    selectedYear: number;
    setFirstDateOfWeek: DispatchDate;
    setSelectedDate: DispatchDate;
    setSelectedMonth: DispatchNumber;
    setSelectedYear: DispatchNumber;
};
export { CalendarProvider, useCalendar };
