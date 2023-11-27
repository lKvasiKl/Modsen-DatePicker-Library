import { ComponentType } from "react";
import { CalendarProps } from "components/Calendar/types";
interface WithRangeProps extends Pick<CalendarProps, "isWithRange"> {
}
declare const withRange: <T extends WithRangeProps>(WrappedComponent: ComponentType<T>) => {
    (props: Omit<T, "isWithRange">): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
export default withRange;
