import React, { ComponentType } from "react";
import { CalendarProps } from "components/Calendar/types";
import { Range } from "./types";
interface WithRangeProps extends Pick<CalendarProps, "isWithRange"> {
    range?: Range;
    setRange?: React.Dispatch<React.SetStateAction<Range | undefined>>;
}
declare const withRange: <T extends WithRangeProps>(WrappedComponent: React.ComponentType<T>) => {
    (props: Omit<T, keyof WithRangeProps>): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
export default withRange;
