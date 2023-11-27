import { ComponentType } from "react";
import { CalendarProps } from "components/Calendar/types";
interface WithRangeProps extends Pick<CalendarProps, "isTodosEnabled"> {
}
declare const withTodo: <T extends WithRangeProps>(WrappedComponent: ComponentType<T>) => {
    (props: Omit<T, "isTodosEnabled">): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
export default withTodo;
