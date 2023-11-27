import React from "react";
export interface ProviderProps {
    children: React.ReactNode;
}
export interface Range {
    rangeStart?: Date;
    rangeEnd?: Date;
}
export type RangeValues = Range | undefined;
export type DispatchDate = React.Dispatch<React.SetStateAction<Date>>;
export type DispatchRangeValues = React.Dispatch<React.SetStateAction<RangeValues>>;
export type DispatchNumber = React.Dispatch<React.SetStateAction<number>>;
