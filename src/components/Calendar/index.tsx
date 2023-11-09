import { useCallback } from "react";
import {
  GridSlider,
  DayOfWeekGrid,
  WeekdaysHeader,
  ClearButton,
} from "components";

import { useDate } from "providers/DateProvider";

import ErrorBoundary from "components/ErrorBoundary";
import ThemeWrapper from "components/ThemeWrapper";

import { CALENDAR_TYPES, CalendarProps } from "./types";
import { CalendarContainer } from "./styled";

const Calendar = ({
  type = CALENDAR_TYPES.Month,
  isMondayFirst,
  isWeekendDate,
  isWithRange,
  minDate,
  maxDate,
  isTodosEnabled,
  isHolidayDate,
}: CalendarProps) => {
  const { setRange } = useDate();

  const handlClearButtonClick = useCallback(() => {
    if (setRange) {
      setRange(undefined);
    }
  }, [setRange]);

  return (
    <ThemeWrapper>
      <ErrorBoundary>
        <CalendarContainer $isWithRange={isWithRange} data-testid="calendar">
          <GridSlider
            isMondayFirst={isMondayFirst}
            maxDate={maxDate}
            minDate={minDate}
            type={type}
          />
          {type === CALENDAR_TYPES.Week ||
            (type === CALENDAR_TYPES.Month && (
              <WeekdaysHeader isMondayFirst={isMondayFirst} />
            ))}
          <DayOfWeekGrid
            isHolidayDate={isHolidayDate}
            isMondayFirst={isMondayFirst}
            isTodosEnabled={isTodosEnabled}
            isWeekendDate={isWeekendDate}
            isWithRange={isWithRange}
            maxDate={maxDate}
            minDate={minDate}
            type={type}
          />
        </CalendarContainer>
        {isWithRange && (
          <ClearButton title="Clear" onClearClick={handlClearButtonClick} />
        )}
      </ErrorBoundary>
    </ThemeWrapper>
  );
};

export default Calendar;
