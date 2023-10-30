import React, { useCallback } from "react";

import NextMonthIcon from "assets/icons/next.svg";
import PrevMonthIcon from "assets/icons/prev.svg";
import { Icon } from "constants/styles/global";
import { MONTH } from "constants/calendarData";
import { useCalendar } from "providers/CalendarProvider";

import { Direction, MonthSliderProps, NEXT_MONTH, PREV_MONTH } from "./types";
import { MonthSliderButton, MonthSliderContainer, Title } from "./styled";

const MonthSlider = React.memo(({ minDate, maxDate }: MonthSliderProps) => {
  const { selectedMonth, selectedYear, setSelectedMonth, setSelectedYear } =
    useCalendar();

  const title = `${MONTH[selectedMonth]} ${selectedYear}`;

  const handleMonthChange = useCallback(
    (direction: Direction) => () => {
      let nextMonth = selectedMonth;
      let nextYear = selectedYear;

      if (direction === NEXT_MONTH) {
        nextMonth = (selectedMonth + 1) % 12;
        nextYear = selectedMonth === 11 ? selectedYear + 1 : selectedYear;
      } else {
        nextMonth = (selectedMonth - 1 + 12) % 12;
        nextYear = selectedMonth === 0 ? selectedYear - 1 : selectedYear;
      }

      const nextDate = new Date(nextYear, nextMonth);
      const canChangeMonth =
        (!minDate || nextDate >= minDate) && (!maxDate || nextDate <= maxDate);

      if (canChangeMonth) {
        setSelectedMonth(nextMonth);
        setSelectedYear(nextYear);
      }
    },
    [selectedMonth, setSelectedMonth, selectedYear, setSelectedYear],
  );

  return (
    <MonthSliderContainer>
      <MonthSliderButton onClick={handleMonthChange(PREV_MONTH)}>
        <Icon src={PrevMonthIcon} />
      </MonthSliderButton>
      <Title>{title}</Title>
      <MonthSliderButton onClick={handleMonthChange(NEXT_MONTH)}>
        <Icon src={NextMonthIcon} />
      </MonthSliderButton>
    </MonthSliderContainer>
  );
});

export default MonthSlider;
