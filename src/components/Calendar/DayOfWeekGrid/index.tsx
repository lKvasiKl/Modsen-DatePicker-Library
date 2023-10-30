import React, { useMemo } from "react";

import {
  getCalendarData,
  isCurrentMonth,
  isSelectedDay,
} from "utils/calendarData";
import { useCalendar } from "providers/CalendarProvider";
import { DayOfWeek } from "components";

import { DayOfWeekGridProps } from "./types";
import { DayOfWeekGridContainer } from "./styled";
import { RANGE_STATE } from "constants/calendarData";

const DayOfWeekGrid = React.memo(
  ({
    isMondayFirst,
    isWeekendDate,
    range,
    minDate,
    maxDate,
  }: DayOfWeekGridProps) => {
    const { selectedDate, selectedMonth, selectedYear } = useCalendar();

    const MONTH_DAYS = useMemo(
      () => getCalendarData(selectedMonth, selectedYear, isMondayFirst),
      [selectedMonth, selectedYear, isMondayFirst],
    );

    const getRangeState = (date: Date) => {
      if (range && range.rangeStart && range.rangeEnd) {
        const isStartDate = date.getTime() === range.rangeStart.getTime();
        const isEndDate = date.getTime() === range.rangeEnd.getTime();
        const isBetween = date > range.rangeStart && date < range.rangeEnd;

        if (isStartDate) {
          return RANGE_STATE.Start;
        }

        if (isEndDate) {
          return RANGE_STATE.End;
        }

        if (isBetween) {
          return RANGE_STATE.Between;
        }
      }
    };

    return (
      <DayOfWeekGridContainer>
        {MONTH_DAYS.map((date, index) => {
          return (
            <DayOfWeek
              key={index}
              dayOfWeek={date}
              isSelected={isSelectedDay(date, selectedDate)}
              isDisabled={isCurrentMonth(date, selectedMonth)}
              isWeekend={isWeekendDate && isWeekendDate(date)}
              rangeState={getRangeState(date)}
              minDate={minDate}
              maxDate={maxDate}
            />
          );
        })}
      </DayOfWeekGridContainer>
    );
  },
);

export default DayOfWeekGrid;
