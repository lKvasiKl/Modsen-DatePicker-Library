import { ComponentType } from "react";
import { CalendarProps } from "components/Calendar/types";
interface WithWeekendsProps extends Pick<CalendarProps, "isWeekendDate"> {
}
declare const withWeekendsDays: <T extends WithWeekendsProps>(WrappedComponent: ComponentType<T>) => {
    (props: Omit<T, "isWeekendDate">): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
export default withWeekendsDays;
