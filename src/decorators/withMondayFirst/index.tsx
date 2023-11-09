import { ComponentType } from "react";

import { CalendarProps } from "components/Calendar/types";

interface WithMondayFirstProps extends Pick<CalendarProps, "isMondayFirst"> {}

const withMondayFirst = <T extends WithMondayFirstProps>(
  WrappedComponent: ComponentType<T>,
) => {
  const ComponentWithMondayFirst = (
    props: Omit<T, keyof WithMondayFirstProps>,
  ) => {
    return <WrappedComponent {...(props as T)} isMondayFirst={true} />;
  };

  const displayName = WrappedComponent.displayName || WrappedComponent.name;
  ComponentWithMondayFirst.displayName = `withMondayFirst(${displayName})`;

  return ComponentWithMondayFirst;
};

export default withMondayFirst;
