import React, { useMemo } from "react";

import { WEEKDAYS } from "constants/calendarData";
import { Weekday } from "components";

import { WeekdaysHeaderProps } from "./types";
import { WeekdaysContainer } from "./styled";

const WeekdaysHeader = React.memo(
  ({ isSundayFirst = true }: WeekdaysHeaderProps) => {
    const WEEKDAYS_ARRAY = useMemo(() => {
      const days = Object.values(WEEKDAYS);

      return isSundayFirst ? days : [...days.slice(1), days[0]];
    }, [isSundayFirst]);

    return (
      <WeekdaysContainer>
        {WEEKDAYS_ARRAY.map((day) => (
          <Weekday key={day} weekday={day} />
        ))}
      </WeekdaysContainer>
    );
  },
);

export default WeekdaysHeader;
