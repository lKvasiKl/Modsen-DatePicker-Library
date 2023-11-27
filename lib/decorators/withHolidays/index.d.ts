import { ComponentType } from "react";
import { CalendarProps } from "components/Calendar/types";
interface WithHolidaysProps extends Pick<CalendarProps, "isHolidayDate"> {
}
declare const withHolidayDays: <T extends WithHolidaysProps>(WrappedComponent: ComponentType<T>) => {
    (props: Omit<T, "isHolidayDate">): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
export default withHolidayDays;
