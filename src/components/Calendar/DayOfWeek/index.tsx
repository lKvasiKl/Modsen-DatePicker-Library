import React, { useCallback } from "react";

import { useCalendar } from "providers/CalendarProvider";
import { useDate } from "providers/DateProvider";

import { getCache } from "utils/dataCaching";

import { RANGE_STATE } from "constants/calendarData";

import { DayOfWeekProps } from "./types";
import { DayOfWeekButton, Dot } from "./styled";

const { Start, End, Between } = RANGE_STATE;

const DayofWeek = React.memo((props: DayOfWeekProps) => {
  const {
    dayOfWeek,
    isSelected = false,
    isDisabled = false,
    isWeekend = false,
    isWithRange = false,
    minDate = undefined,
    maxDate = undefined,
    isTodosEnabled = false,
    isHoliday = false,
  } = props;

  const { range, setRange } = useDate();
  const { setSelectedDate, setSelectedMonth, setSelectedYear } = useCalendar();

  const day = dayOfWeek.getDate();
  const month = dayOfWeek.getMonth();
  const year = dayOfWeek.getFullYear();

  const handleSelectDate = useCallback(() => {
    const canChangeMonth =
      (!minDate || dayOfWeek >= minDate) && (!maxDate || dayOfWeek <= maxDate);

    if (canChangeMonth) {
      setSelectedDate(dayOfWeek);
      setSelectedMonth(month);
      setSelectedYear(year);

      if (isWithRange) {
        if (!range || (!range.rangeStart && !range.rangeEnd)) {
          setRange({ rangeStart: dayOfWeek, rangeEnd: undefined });
        } else {
          const start =
            range && range.rangeStart ? range.rangeStart : dayOfWeek;
          const rangeArr =
            dayOfWeek < start ? [dayOfWeek, start] : [start, dayOfWeek];

          setRange({ rangeStart: rangeArr[0], rangeEnd: rangeArr[1] });
        }
      }
    }
  }, [
    minDate,
    dayOfWeek,
    maxDate,
    setSelectedDate,
    setSelectedMonth,
    month,
    setSelectedYear,
    year,
    isWithRange,
    range,
    setRange,
  ]);

  const getRangeState = (date: Date) => {
    if (range && range.rangeStart) {
      if (date.getTime() === range.rangeStart.getTime()) {
        return Start;
      }

      if (range.rangeEnd && date.getTime() === range.rangeEnd.getTime()) {
        return End;
      }

      if (range.rangeEnd && date > range.rangeStart && date < range.rangeEnd) {
        return Between;
      }
    }
  };

  const todos = getCache(dayOfWeek.toDateString());

  return (
    <>
      <DayOfWeekButton
        $isDisabled={isDisabled}
        $isHoliday={isHoliday}
        $isSelected={isSelected}
        $isWeekend={isWeekend}
        $rangeState={getRangeState(dayOfWeek)}
        data-testid="day-of-week"
        onClick={handleSelectDate}
      >
        {day}
        {isTodosEnabled && todos.length !== 0 && <Dot />}
      </DayOfWeekButton>
    </>
  );
});

export default DayofWeek;
