import React from "react";
import { ProviderProps, RangeValues, DispatchDate, DispatchRangeValues } from "./type";
export declare const DateContext: React.Context<{
    minDate: Date;
    maxDate: Date;
    range: RangeValues;
    setMinDate: DispatchDate;
    setMaxDate: DispatchDate;
    setRange: DispatchRangeValues;
}>;
declare const DateProvider: ({ children }: ProviderProps) => import("react/jsx-runtime").JSX.Element;
declare const useDate: () => {
    minDate: Date;
    maxDate: Date;
    range: RangeValues;
    setMinDate: DispatchDate;
    setMaxDate: DispatchDate;
    setRange: DispatchRangeValues;
};
export { DateProvider, useDate };
