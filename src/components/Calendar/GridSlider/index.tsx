import React, { useCallback, useEffect } from "react";

import { useCalendar } from "providers/CalendarProvider";

import { getFirstDayOfWeek } from "utils/calendarDateData";

import { Icon } from "constants/styles/global";
import { DAYS_IN_WEEK, MONTH, MONTH_COUNT } from "constants/calendarData";

import NextGreedIcon from "assets/icons/next.svg";
import PrevGreedIcon from "assets/icons/prev.svg";

import { CALENDAR_TYPES } from "../types";

import { Direction, GridSliderProps, PREV_GRID, NEXT_GRID } from "./types";
import { SliderButton, SliderContainer, Title } from "./styled";

const GridSlider = React.memo(
  ({ type, minDate, maxDate, isMondayFirst }: GridSliderProps) => {
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
      type === CALENDAR_TYPES.Year
        ? `${selectedYear}`
        : `${MONTH[selectedMonth]} ${selectedYear}`;

    const handleGridChange = useCallback(
      (direction: Direction) => () => {
        let nextMonth = selectedMonth;
        let nextYear = selectedYear;
        const nextFirstDate = firstDateOfWeek;

        if (type === CALENDAR_TYPES.Month) {
          if (direction === NEXT_GRID) {
            nextMonth = (selectedMonth + 1) % MONTH_COUNT;
            nextYear = selectedMonth === 11 ? selectedYear + 1 : selectedYear;
          } else {
            nextMonth = (selectedMonth - 1 + MONTH_COUNT) % MONTH_COUNT;
            nextYear = selectedMonth === 0 ? selectedYear - 1 : selectedYear;
          }
        }

        if (type === CALENDAR_TYPES.Week) {
          if (direction === NEXT_GRID) {
            nextFirstDate.setDate(nextFirstDate.getDate() + DAYS_IN_WEEK);
          } else {
            nextFirstDate.setDate(nextFirstDate.getDate() - DAYS_IN_WEEK);
          }

          nextMonth = firstDateOfWeek.getMonth();
          nextYear = firstDateOfWeek.getFullYear();
          setFirstDateOfWeek(new Date(nextFirstDate));
        }

        if (type === CALENDAR_TYPES.Year) {
          if (direction === NEXT_GRID) {
            nextYear++;
          } else {
            nextYear--;
          }
        }

        const nextDate = new Date(nextYear, nextMonth);
        const canChangeMonth =
          (!minDate || nextDate >= minDate) &&
          (!maxDate || nextDate <= maxDate);

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
          <Icon src={PrevGreedIcon} />
        </SliderButton>
        <Title data-testid="grid-slider">{title}</Title>
        <SliderButton
          data-testid="next-button"
          onClick={handleGridChange(NEXT_GRID)}
        >
          <Icon src={NextGreedIcon} />
        </SliderButton>
      </SliderContainer>
    );
  },
);

export default GridSlider;
