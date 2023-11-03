import { ComponentType } from "react";

import { CalendarProps } from "components/Calendar/types";
import { isHolidayDate } from "utils/calendarData";

interface WithHolidaysProps extends Pick<CalendarProps, "isHolidayDate"> {}

const withHolidayDays = <T extends WithHolidaysProps>(
  WrappedComponent: ComponentType<T>,
) => {
  const ComponentHolidaysDays = (props: Omit<T, keyof WithHolidaysProps>) => {
    return <WrappedComponent {...(props as T)} isHolidayDate={isHolidayDate} />;
  };

  const displayName = WrappedComponent.displayName || WrappedComponent.name;
  ComponentHolidaysDays.displayName = `withHolidays(${displayName})`;

  return ComponentHolidaysDays;
};

export default withHolidayDays;
