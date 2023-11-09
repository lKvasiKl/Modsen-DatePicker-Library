import { ComponentType } from "react";
import { CalendarProps } from "components/Calendar/types";
type CalendarPropKeys = keyof CalendarProps;
interface WithMinAndMaxDateProps extends Pick<CalendarProps, CalendarPropKeys> {
    minDate?: Date;
    maxDate?: Date;
}
declare const withMinAndMaxDate: <T extends WithMinAndMaxDateProps>(WrappedComponent: ComponentType<T>) => {
    (props: Omit<T, keyof WithMinAndMaxDateProps>): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
export default withMinAndMaxDate;
