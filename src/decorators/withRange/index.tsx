import { ComponentType } from "react";

import { CalendarProps } from "components/Calendar/types";

interface WithRangeProps extends Pick<CalendarProps, "isWithRange"> {}

const withRange = <T extends WithRangeProps>(
  WrappedComponent: ComponentType<T>,
) => {
  const ComponentWithRange = (props: Omit<T, keyof WithRangeProps>) => {
    return <WrappedComponent {...(props as T)} isWithRange={true} />;
  };

  const displayName = WrappedComponent.displayName || WrappedComponent.name;
  ComponentWithRange.displayName = `withRange(${displayName})`;

  return ComponentWithRange;
};

export default withRange;
