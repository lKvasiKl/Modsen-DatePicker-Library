import React, { useCallback, useEffect } from "react";

import NextGreedIcon from "assets/icons/next.svg";
import PrevGreedIcon from "assets/icons/prev.svg";
import { Icon } from "constants/styles/global";
import { DAYS_IN_WEEK, MONTH, MONTH_COUNT } from "constants/calendarData";
import { useCalendar } from "providers/CalendarProvider";
import { getFirstDayOfWeek } from "utils/calendarData";

import { CALENDAR_TYPES } from "../types";
import { Direction, GreedSliderProps, PREV_GREED, NEXT_GREED } from "./types";
import { SliderButton, SliderContainer, Title } from "./styled";

const GreedSlider = React.memo(
  ({ type, minDate, maxDate, isMondayFirst }: GreedSliderProps) => {
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
    }, [isMondayFirst]);

    const title =
      type === CALENDAR_TYPES.Year
        ? `${selectedYear}`
        : `${MONTH[selectedMonth]} ${selectedYear}`;

    const handleGreedChange = useCallback(
      (direction: Direction) => () => {
        let nextMonth = selectedMonth;
        let nextYear = selectedYear;
        let nextFirstDate = firstDateOfWeek;

        if (type === CALENDAR_TYPES.Month) {
          if (direction === NEXT_GREED) {
            nextMonth = (selectedMonth + 1) % MONTH_COUNT;
            nextYear = selectedMonth === 11 ? selectedYear + 1 : selectedYear;
          } else {
            nextMonth = (selectedMonth - 1 + MONTH_COUNT) % MONTH_COUNT;
            nextYear = selectedMonth === 0 ? selectedYear - 1 : selectedYear;
          }
        }

        if (type === CALENDAR_TYPES.Week) {
          if (direction === NEXT_GREED) {
            nextFirstDate.setDate(nextFirstDate.getDate() + DAYS_IN_WEEK);
          } else {
            nextFirstDate.setDate(nextFirstDate.getDate() - DAYS_IN_WEEK);
          }

          nextMonth = firstDateOfWeek.getMonth();
          nextYear = firstDateOfWeek.getFullYear();
          setFirstDateOfWeek(new Date(nextFirstDate));
        }

        if (type === CALENDAR_TYPES.Year) {
          if (direction === NEXT_GREED) {
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
      [firstDateOfWeek, selectedMonth, selectedYear, type],
    );

    return (
      <SliderContainer>
        <SliderButton onClick={handleGreedChange(PREV_GREED)}>
          <Icon src={PrevGreedIcon} />
        </SliderButton>
        <Title>{title}</Title>
        <SliderButton onClick={handleGreedChange(NEXT_GREED)}>
          <Icon src={NextGreedIcon} />
        </SliderButton>
      </SliderContainer>
    );
  },
);

export default GreedSlider;
