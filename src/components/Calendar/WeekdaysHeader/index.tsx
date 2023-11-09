import React, { useMemo } from "react";
import { Weekday } from "components";

import { WEEKDAYS } from "constants/calendarData";
import { Container } from "constants/styles/global";

import { WeekdaysHeaderProps } from "./types";

const WeekdaysHeader = React.memo(({ isMondayFirst }: WeekdaysHeaderProps) => {
  const WEEKDAYS_ARRAY = useMemo(() => {
    const days = Object.values(WEEKDAYS);

    return isMondayFirst ? [...days.slice(1), days[0]] : days;
  }, [isMondayFirst]);

  return (
    <Container>
      {WEEKDAYS_ARRAY.map((day) => (
        <Weekday key={day} weekday={day} />
      ))}
    </Container>
  );
});

export default WeekdaysHeader;
