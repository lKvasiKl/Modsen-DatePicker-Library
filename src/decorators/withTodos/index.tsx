import { ComponentType } from "react";

import { CalendarProps } from "components/Calendar/types";

interface WithRangeProps extends Pick<CalendarProps, "isTodosEnabled"> {}

const withTodo = <T extends WithRangeProps>(
  WrappedComponent: ComponentType<T>,
) => {
  const ComponentWithTodo = (props: Omit<T, keyof WithRangeProps>) => {
    return <WrappedComponent {...(props as T)} isTodosEnabled={true} />;
  };

  const displayName = WrappedComponent.displayName || WrappedComponent.name;
  ComponentWithTodo.displayName = `withTodo(${displayName})`;

  return ComponentWithTodo;
};

export default withTodo;
