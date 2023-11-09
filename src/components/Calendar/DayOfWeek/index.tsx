import React, { useCallback, useState } from "react";

import { useCalendar } from "providers/CalendarProvider";
import { useDate } from "providers/DateProvider";

import TodosModal from "components/TodosModal";

import usePortal from "hooks/usePortal";

import { RANGE_STATE } from "constants/calendarData";

import { DayOfWeekProps } from "./types";
import { DayOfWeekButton } from "./styled";

const DayofWeek = React.memo(
  ({
    dayOfWeek,
    isSelected = false,
    isDisabled = false,
    isWeekend = false,
    isWithRange = false,
    minDate = undefined,
    maxDate = undefined,
    isTodosEnabled = false,
    isHoliday = false,
  }: DayOfWeekProps) => {
    const [isTodoModalOpen, setIsTodoModalOpen] = useState<boolean>(false);

    const { setSelectedDate, setSelectedMonth, setSelectedYear } =
      useCalendar();
    const { range, setRange } = useDate();
    const todosPortal = usePortal();

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

      if (isTodosEnabled) {
        setIsTodoModalOpen(true);
      }
    }, [
      minDate,
      dayOfWeek,
      maxDate,
      isTodosEnabled,
      setSelectedDate,
      setSelectedMonth,
      month,
      setSelectedYear,
      year,
      isWithRange,
      range,
      setRange,
    ]);

    const handleCloseTodoModal = useCallback(() => {
      setIsTodoModalOpen(false);
    }, []);

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
        </DayOfWeekButton>
        {isTodosEnabled &&
          isTodoModalOpen &&
          todosPortal(<TodosModal onClose={handleCloseTodoModal} />)}
      </>
    );
  },
);

export default DayofWeek;
