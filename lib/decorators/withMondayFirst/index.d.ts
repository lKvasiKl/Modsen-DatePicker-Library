import { ComponentType } from "react";
import { CalendarProps } from "components/Calendar/types";
interface WithMondayFirstProps extends Pick<CalendarProps, "isMondayFirst"> {
}
declare const withMondayFirst: <T extends WithMondayFirstProps>(WrappedComponent: ComponentType<T>) => {
    (props: Omit<T, "isMondayFirst">): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
export default withMondayFirst;
