import { useCallback, useEffect } from "react";

import GreedSlider from "./GreedSlider";
import DayOfWeekGrid from "./DayOfWeekGrid";
import WeekdaysHeader from "./WeekdaysHeader";
import ClearButton from "./ClearButton";

import { CALENDAR_TYPES, CalendarProps } from "./types";
import { CalendarContainer } from "./styled";
import { useDate } from "providers/DateProvider";
import { getCalendarYearData } from "utils/calendarData";

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
  }, []);

  return (
    <>
      <CalendarContainer $isWithRange={isWithRange}>
        <GreedSlider
          type={type}
          minDate={minDate}
          maxDate={maxDate}
          isMondayFirst={isMondayFirst}
        />
        {type === CALENDAR_TYPES.Week ||
          (type === CALENDAR_TYPES.Month && (
            <WeekdaysHeader isMondayFirst={isMondayFirst} />
          ))}
        <DayOfWeekGrid
          type={type}
          isMondayFirst={isMondayFirst}
          isWeekendDate={isWeekendDate}
          isWithRange={isWithRange}
          minDate={minDate}
          maxDate={maxDate}
          isTodosEnabled={isTodosEnabled}
          isHolidayDate={isHolidayDate}
        />
      </CalendarContainer>
      {isWithRange && (
        <ClearButton title="Clear" onClearClick={handlClearButtonClick} />
      )}
    </>
  );
};

export default Calendar;
