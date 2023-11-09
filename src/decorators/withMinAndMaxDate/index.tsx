import { ComponentType } from "react";

import { useDate } from "providers/DateProvider";

import { CalendarProps } from "components/Calendar/types";

type CalendarPropKeys = keyof CalendarProps;

interface WithMinAndMaxDateProps extends Pick<CalendarProps, CalendarPropKeys> {
  minDate?: Date;
  maxDate?: Date;
}

const withMinAndMaxDate = <T extends WithMinAndMaxDateProps>(
  WrappedComponent: ComponentType<T>,
) => {
  const ComponentMinAndMaxDate = (
    props: Omit<T, keyof WithMinAndMaxDateProps>,
  ) => {
    const { minDate, maxDate } = useDate();

    return (
      <WrappedComponent {...(props as T)} maxDate={maxDate} minDate={minDate} />
    );
  };

  const displayName = WrappedComponent.displayName || WrappedComponent.name;
  ComponentMinAndMaxDate.displayName = `withRange(${displayName})`;

  return ComponentMinAndMaxDate;
};

export default withMinAndMaxDate;
