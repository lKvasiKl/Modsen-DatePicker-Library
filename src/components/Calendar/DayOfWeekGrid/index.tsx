import { useMemo } from "react";
import { DayOfWeek, WeekdaysHeader } from "components";

import { useCalendar } from "providers/CalendarProvider";

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

const DayOfWeekGrid = ({
  type,
  isMondayFirst,
  isWeekendDate,
  isWithRange,
  minDate,
  maxDate,
  isTodosEnabled,
  isHolidayDate,
}: DayOfWeekGridProps) => {
  const { firstDateOfWeek, selectedDate, selectedMonth, selectedYear } =
    useCalendar();

  const GREED_DATA = useMemo(() => {
    if (type === CALENDAR_TYPES.Week) {
      return getCalendarWeekData(firstDateOfWeek);
    } else if (type === CALENDAR_TYPES.Month) {
      return getCalendarMonthData(selectedMonth, selectedYear, isMondayFirst);
    }
  }, [firstDateOfWeek, selectedMonth, selectedYear, isMondayFirst, type]);

  const YEAR_GREED_DATA = useMemo(() => {
    if (type === CALENDAR_TYPES.Year) {
      return getCalendarYearData(selectedYear, isMondayFirst);
    }
  }, [type, selectedYear, isMondayFirst]);

  return (
    <>
      {GREED_DATA && (
        <DayOfWeekGridContainer data-testid="day-of-week-grid">
          {GREED_DATA!.map((date) => {
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
      {type === CALENDAR_TYPES.Year && YEAR_GREED_DATA && (
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
