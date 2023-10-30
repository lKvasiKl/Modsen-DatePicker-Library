import { ComponentType, useState } from "react";

import { CalendarProps } from "components/Calendar/types";

import { Range } from "./types";

interface WithRangeProps extends Pick<CalendarProps, "range"> {
  range?: Range;
  setRange?: React.Dispatch<React.SetStateAction<Range | undefined>>;
}

const withRange = <T extends WithRangeProps>(
  WrappedComponent: ComponentType<T>,
) => {
  const ComponentWithRange = (props: Omit<T, keyof WithRangeProps>) => {
    const [range, setRange] = useState<Range | undefined>({
      rangeStart: new Date(2023, 9, 11),
      rangeEnd: new Date(2023, 9, 25),
    });

    return (
      <WrappedComponent {...(props as T)} range={range} setRange={setRange} />
    );
  };

  const displayName = WrappedComponent.displayName || WrappedComponent.name;
  ComponentWithRange.displayName = `withRange(${displayName})`;

  return ComponentWithRange;
};

export default withRange;
