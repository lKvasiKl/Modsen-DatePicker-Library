import React, { useCallback } from "react";

import { useCalendar } from "providers/CalendarProvider";

import { DayOfWeekProps } from "./types";
import { DayOfWeekButton } from "./styled";

const DayofWeek = React.memo(
  ({
    dayOfWeek,
    isSelected = false,
    isDisabled = false,
    isWeekend = false,
    rangeState = undefined,
    minDate = undefined,
    maxDate = undefined,
  }: DayOfWeekProps) => {
    const { setSelectedDate, setSelectedMonth, setSelectedYear } =
      useCalendar();

    const day = dayOfWeek.getDate();
    const month = dayOfWeek.getMonth();
    const year = dayOfWeek.getFullYear();

    const handleSelectDate = useCallback(() => {
      const canChangeMonth =
        (!minDate || dayOfWeek >= minDate) &&
        (!maxDate || dayOfWeek <= maxDate);

      if (canChangeMonth) {
        setSelectedDate(dayOfWeek);
        setSelectedMonth(month);
        setSelectedYear(year);
      }
    }, [dayOfWeek, month, year]);

    return (
      <DayOfWeekButton
        $isSelected={isSelected}
        $isDisabled={isDisabled}
        $isWeekend={isWeekend}
        $rangeState={rangeState}
        onClick={handleSelectDate}
      >
        {day}
      </DayOfWeekButton>
    );
  },
);

export default DayofWeek;
