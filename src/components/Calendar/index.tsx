import { useCallback } from "react";

import { DateProvider, useDate } from "providers/DateProvider";
import { CalendarProvider } from "providers/CalendarProvider";

import {
  GridSlider,
  DayOfWeekGrid,
  WeekdaysHeader,
  Button,
} from "components/index";
import ErrorBoundary from "components/ErrorBoundary";
import ThemeWrapper from "components/ThemeWrapper";

import { CALENDAR_TYPES, CalendarProps } from "./types";
import { CLEAR_BUTTON_TITLE } from "./config";
import { CalendarContainer } from "./styled";

const { Month, Week } = CALENDAR_TYPES;

const Calendar = (props: CalendarProps) => {
  const {
    type = Month,
    isMondayFirst,
    isWeekendDate,
    isWithRange,
    minDate,
    maxDate,
    isTodosEnabled,
    isHolidayDate,
  } = props;

  const { range, setRange } = useDate();

  const handlClearButtonClick = useCallback(() => {
    if (setRange) {
      setRange(undefined);
    }
  }, [setRange]);

  const isRangeExist =
    isWithRange && Boolean(range?.rangeStart) && Boolean(range?.rangeEnd);

  return (
    <ThemeWrapper>
      <ErrorBoundary>
        <CalendarProvider>
          <DateProvider>
            <CalendarContainer
              $isRangeExist={isRangeExist}
              $isTodosEnabled={isTodosEnabled}
              data-testid="calendar"
            >
              <GridSlider
                isMondayFirst={isMondayFirst}
                maxDate={maxDate}
                minDate={minDate}
                type={type}
              />
              {(type === Week || type === Month) && (
                <WeekdaysHeader isMondayFirst={isMondayFirst} />
              )}
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
            {isRangeExist && (
              <Button
                $isTodosEnabled={isTodosEnabled}
                title={CLEAR_BUTTON_TITLE}
                onButtonClick={handlClearButtonClick}
              />
            )}
          </DateProvider>
        </CalendarProvider>
      </ErrorBoundary>
    </ThemeWrapper>
  );
};

export default Calendar;
