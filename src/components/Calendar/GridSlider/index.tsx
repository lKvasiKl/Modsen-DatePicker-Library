import React, { useCallback, useEffect } from "react";

import { useCalendar } from "providers/CalendarProvider";

import { getFirstDayOfWeek } from "utils/calendarDateData";

import { ICONS } from "constants/icons";
import { Icon } from "constants/styles/global";
import {
  DAYS_IN_WEEK,
  MONTH,
  MONTH_COUNT,
  DATE_UNIT,
} from "constants/calendarData";

import { CALENDAR_TYPES } from "../types";

import { Direction, GridSliderProps, PREV_GRID, NEXT_GRID } from "./types";
import { SliderButton, SliderContainer, Title } from "./styled";

const { Week, Month, Year } = CALENDAR_TYPES;
const { prevGrid, nextGrid } = ICONS;

const GridSlider = React.memo((props: GridSliderProps) => {
  const { type, minDate, maxDate, isMondayFirst } = props;

  const {
    selectedDate,
    firstDateOfWeek,
    selectedMonth,
    selectedYear,
    setFirstDateOfWeek,
    setSelectedMonth,
    setSelectedYear,
  } = useCalendar();

  useEffect(() => {
    setFirstDateOfWeek(getFirstDayOfWeek(selectedDate, isMondayFirst));
  }, [isMondayFirst, selectedDate, setFirstDateOfWeek]);

  const title =
    type === Year
      ? `${selectedYear}`
      : `${MONTH[selectedMonth]} ${selectedYear}`;

  const handleGridChange = useCallback(
    (direction: Direction) => () => {
      let nextMonth = selectedMonth;
      let nextYear = selectedYear;
      const nextFirstDate = firstDateOfWeek;

      if (type === Month) {
        if (direction === NEXT_GRID) {
          nextMonth = (selectedMonth + DATE_UNIT) % MONTH_COUNT;
          nextYear =
            selectedMonth === MONTH_COUNT - DATE_UNIT
              ? selectedYear + DATE_UNIT
              : selectedYear;
        } else {
          nextMonth = (selectedMonth - DATE_UNIT + MONTH_COUNT) % MONTH_COUNT;
          nextYear =
            selectedMonth === 0 ? selectedYear - DATE_UNIT : selectedYear;
        }
      }

      if (type === Week) {
        if (direction === NEXT_GRID) {
          nextFirstDate.setDate(nextFirstDate.getDate() + DAYS_IN_WEEK);
        } else {
          nextFirstDate.setDate(nextFirstDate.getDate() - DAYS_IN_WEEK);
        }

        nextMonth = firstDateOfWeek.getMonth();
        nextYear = firstDateOfWeek.getFullYear();
        setFirstDateOfWeek(new Date(nextFirstDate));
      }

      if (type === Year) {
        if (direction === NEXT_GRID) {
          nextYear++;
        } else {
          nextYear--;
        }
      }

      const nextDate = new Date(nextYear, nextMonth);
      const canChangeMonth =
        (!minDate || nextDate >= minDate) && (!maxDate || nextDate <= maxDate);

      if (canChangeMonth) {
        setSelectedMonth(nextMonth);
        setSelectedYear(nextYear);
      }
    },
    [
      firstDateOfWeek,
      maxDate,
      minDate,
      selectedMonth,
      selectedYear,
      setFirstDateOfWeek,
      setSelectedMonth,
      setSelectedYear,
      type,
    ],
  );

  return (
    <SliderContainer>
      <SliderButton
        data-testid="prev-button"
        onClick={handleGridChange(PREV_GRID)}
      >
        <Icon src={prevGrid} />
      </SliderButton>
      <Title data-testid="grid-slider">{title}</Title>
      <SliderButton
        data-testid="next-button"
        onClick={handleGridChange(NEXT_GRID)}
      >
        <Icon src={nextGrid} />
      </SliderButton>
    </SliderContainer>
  );
});

export default GridSlider;
