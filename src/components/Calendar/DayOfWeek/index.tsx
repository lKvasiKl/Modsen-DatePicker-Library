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

      if (isWithRange && (!range || (!range.rangeStart && !range.rangeEnd))) {
        setRange({ rangeStart: dayOfWeek, rangeEnd: undefined });
      } else {
        const [start, end] =
          dayOfWeek < range!.rangeStart!
            ? [dayOfWeek, range!.rangeStart]
            : [range!.rangeStart, dayOfWeek];
        setRange({ rangeStart: start, rangeEnd: end });
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
    if (range && range.rangeStart && range.rangeEnd) {
      const isStartDate = date.getTime() === range.rangeStart.getTime();
      const isEndDate = date.getTime() === range.rangeEnd.getTime();
      const isBetween = date > range.rangeStart && date < range.rangeEnd;

      if (isStartDate) {
        return Start;
      }

      if (isEndDate) {
        return End;
      }

      if (isBetween) {
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
