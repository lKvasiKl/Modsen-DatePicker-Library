import React from "react";
import { Range } from "decorators/withRange/types";
import { ProviderProps } from "./type";
export declare const DateContext: React.Context<{
    minDate: Date;
    maxDate: Date;
    range: Range | undefined;
    setMinDate: React.Dispatch<React.SetStateAction<Date>>;
    setMaxDate: React.Dispatch<React.SetStateAction<Date>>;
    setRange: React.Dispatch<React.SetStateAction<Range | undefined>>;
}>;
declare const DateProvider: ({ children }: ProviderProps) => import("react/jsx-runtime").JSX.Element;
declare const useDate: () => {
    minDate: Date;
    maxDate: Date;
    range: Range | undefined;
    setMinDate: React.Dispatch<React.SetStateAction<Date>>;
    setMaxDate: React.Dispatch<React.SetStateAction<Date>>;
    setRange: React.Dispatch<React.SetStateAction<Range | undefined>>;
};
export { DateProvider, useDate };
