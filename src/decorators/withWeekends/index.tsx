import { ComponentType } from "react";

import { CalendarProps } from "components/Calendar/types";

import { isWeekendDate } from "utils/calendarDateData";

interface WithWeekendsProps extends Pick<CalendarProps, "isWeekendDate"> {}

const withWeekendsDays = <T extends WithWeekendsProps>(
  WrappedComponent: ComponentType<T>,
) => {
  const ComponentWeekendsDays = (props: Omit<T, keyof WithWeekendsProps>) => {
    return <WrappedComponent {...(props as T)} isWeekendDate={isWeekendDate} />;
  };

  const displayName = WrappedComponent.displayName || WrappedComponent.name;
  ComponentWeekendsDays.displayName = `withWeekendsDays(${displayName})`;

  return ComponentWeekendsDays;
};

export default withWeekendsDays;
