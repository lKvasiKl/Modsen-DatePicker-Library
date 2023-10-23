import React, { useMemo } from "react";

import {
  getCalendarData,
  isCurrentMonth,
  isSelectedDay,
  isWeekendDate,
} from "utils/calendarData";
import { DayOfWeek } from "components";

import { DayOfWeekGridProps } from "./types";
import { DayOfWeekGridContainer } from "./styled";

const DayOfWeekGrid = React.memo(
  ({ currentDate, onClick, isSundayFirst = true }: DayOfWeekGridProps) => {
    const MONTH_DAYS = useMemo(
      () => getCalendarData(currentDate, isSundayFirst),
      [currentDate, isSundayFirst],
    );

    return (
      <DayOfWeekGridContainer>
        {MONTH_DAYS.map((date, index) => {
          return (
            <DayOfWeek
              key={index}
              dayOfWeek={date}
              isSelected={isSelectedDay(date, currentDate)}
              isDisabled={isCurrentMonth(date, currentDate)}
              isWeekend={isWeekendDate(date)}
              onClick={onClick}
            />
          );
        })}
      </DayOfWeekGridContainer>
    );
  },
);

export default DayOfWeekGrid;
