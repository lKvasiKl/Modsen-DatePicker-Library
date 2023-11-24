export declare const isCurrentMonth: (date: Date, selectedMonth: number) => boolean;
export declare const getPreviousMonth: (month: number, year: number) => {
    month: number;
    year: number;
};
export declare const getNextMonth: (month: number, year: number) => {
    month: number;
    year: number;
};
export declare const getDaysInMonth: (year: number, month: number) => number;
export declare function getMonthFirstDay(year: number, month: number): number;
export declare const getLastDayOfPreviousMonth: (currentDate: Date) => Date;
