import React, { useMemo } from "react";

import {
  getCalendarMonthData,
  getCalendarWeekData,
  getCalendarYearData,
  isCurrentMonth,
  isSelectedDay,
} from "utils/calendarData";
import { useCalendar } from "providers/CalendarProvider";
import { DayOfWeek, WeekdaysHeader } from "components";
import { DAYS_IN_WEEK, MONTH } from "constants/calendarData";

import { CALENDAR_TYPES } from "../types";
import { DayOfWeekGridProps } from "./types";
import {
  DayOfWeekGridContainer,
  MiniCalendarWrapper,
  MonthText,
  YearCalendarContainer,
} from "./styled";

const DayOfWeekGrid = React.memo(
  ({
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
    }, [selectedYear, isMondayFirst]);

    return (
      <>
        {GREED_DATA && (
          <DayOfWeekGridContainer>
            {GREED_DATA!.map((date) => {
              return (
                <DayOfWeek
                  key={date.getTime()}
                  dayOfWeek={date}
                  isSelected={isSelectedDay(date, selectedDate)}
                  isDisabled={isCurrentMonth(date, selectedMonth)}
                  isWeekend={isWeekendDate && isWeekendDate(date)}
                  isWithRange={isWithRange}
                  minDate={minDate}
                  maxDate={maxDate}
                  isTodosEnabled={isTodosEnabled}
                  isHoliday={isHolidayDate && isHolidayDate(date)}
                />
              );
            })}
          </DayOfWeekGridContainer>
        )}
        {type === CALENDAR_TYPES.Year && YEAR_GREED_DATA && (
          <YearCalendarContainer>
            {YEAR_GREED_DATA.map((month) => {
              const currentMonth = month[DAYS_IN_WEEK].getMonth();

              return (
                <MiniCalendarWrapper key={month[DAYS_IN_WEEK].getTime()}>
                  <MonthText>{MONTH[currentMonth]}</MonthText>
                  <WeekdaysHeader isMondayFirst={isMondayFirst} />
                  <DayOfWeekGridContainer>
                    {month.map((date) => (
                      <DayOfWeek
                        key={date.getTime()}
                        dayOfWeek={date}
                        isSelected={isSelectedDay(date, selectedDate)}
                        isDisabled={isCurrentMonth(date, currentMonth)}
                        isWeekend={isWeekendDate && isWeekendDate(date)}
                        isWithRange={isWithRange}
                        minDate={minDate}
                        maxDate={maxDate}
                        isTodosEnabled={isTodosEnabled}
                        isHoliday={isHolidayDate && isHolidayDate(date)}
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
  },
);

export default DayOfWeekGrid;
