import { useMemo } from "react";

import { useCalendar } from "providers/CalendarProvider";

import { DayOfWeek, WeekdaysHeader } from "components/index";

import {
  getCalendarMonthData,
  getCalendarWeekData,
  getCalendarYearData,
  isSelectedDay,
} from "utils/calendarData";
import { isCurrentMonth } from "utils/calendarMonthData";

import { DAYS_IN_WEEK, MONTH } from "constants/calendarData";

import { CALENDAR_TYPES } from "../types";

import { DayOfWeekGridProps } from "./types";
import {
  DayOfWeekGridContainer,
  MiniCalendarWrapper,
  MonthText,
  YearCalendarContainer,
} from "./styled";

const { Week, Month, Year } = CALENDAR_TYPES;

const DayOfWeekGrid = (props: DayOfWeekGridProps) => {
  const {
    type,
    isMondayFirst,
    isWeekendDate,
    isWithRange,
    minDate,
    maxDate,
    isTodosEnabled,
    isHolidayDate,
  } = props;

  const { firstDateOfWeek, selectedDate, selectedMonth, selectedYear } =
    useCalendar();

  const GREED_DATA = useMemo(() => {
    if (type === Week) {
      return getCalendarWeekData(firstDateOfWeek);
    } else if (type === Month) {
      return getCalendarMonthData(selectedMonth, selectedYear, isMondayFirst);
    }
  }, [firstDateOfWeek, selectedMonth, selectedYear, isMondayFirst, type]);

  const YEAR_GREED_DATA = useMemo(() => {
    if (type === Year) {
      return getCalendarYearData(selectedYear, isMondayFirst);
    }
  }, [type, selectedYear, isMondayFirst]);

  return (
    <>
      {GREED_DATA && (
        <DayOfWeekGridContainer data-testid="day-of-week-grid">
          {GREED_DATA.map((date) => {
            return (
              <DayOfWeek
                dayOfWeek={date}
                isDisabled={isCurrentMonth(date, selectedMonth)}
                isHoliday={isHolidayDate && isHolidayDate(date)}
                isSelected={isSelectedDay(date, selectedDate)}
                isTodosEnabled={isTodosEnabled}
                isWeekend={isWeekendDate && isWeekendDate(date)}
                isWithRange={isWithRange}
                key={date.getTime()}
                maxDate={maxDate}
                minDate={minDate}
              />
            );
          })}
        </DayOfWeekGridContainer>
      )}
      {type === Year && YEAR_GREED_DATA && (
        <YearCalendarContainer data-testid="day-of-week-grid-year">
          {YEAR_GREED_DATA.map((month) => {
            const currentMonth = month[DAYS_IN_WEEK].getMonth();

            return (
              <MiniCalendarWrapper key={month[DAYS_IN_WEEK].getTime()}>
                <MonthText>{MONTH[currentMonth]}</MonthText>
                <WeekdaysHeader isMondayFirst={isMondayFirst} />
                <DayOfWeekGridContainer>
                  {month.map((date) => (
                    <DayOfWeek
                      dayOfWeek={date}
                      isDisabled={isCurrentMonth(date, currentMonth)}
                      isHoliday={isHolidayDate && isHolidayDate(date)}
                      isSelected={isSelectedDay(date, selectedDate)}
                      isTodosEnabled={isTodosEnabled}
                      isWeekend={isWeekendDate && isWeekendDate(date)}
                      isWithRange={isWithRange}
                      key={date.getTime()}
                      maxDate={maxDate}
                      minDate={minDate}
                    />
                  ))}
                </DayOfWeekGridContainer>
              </MiniCalendarWrapper>
            );
          })}
        </YearCalendarContainer>
      )}
    </>
  );
};

export default DayOfWeekGrid;
