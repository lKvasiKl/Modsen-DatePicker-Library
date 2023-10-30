import { useCallback, useEffect, useState } from "react";

import MonthSlider from "./MonthSlider";
import DayOfWeekGrid from "./DayOfWeekGrid";
import WeekdaysHeader from "./WeekdaysHeader";
import ClearButton from "./ClearButton";
import { CalendarProvider } from "providers/CalendarProvider";

import { CalendarProps } from "./types";
import { CalendarContainer } from "./styled";
import { DateProvider } from "providers/DateProvider";

const Calendar = ({
  isMondayFirst,
  isWeekendDate,
  range,
  setRange,
  minDate,
  maxDate,
}: CalendarProps) => {
  const [isRangeExist, setIsRangeExist] = useState<boolean>(false);

  const handlClearButtonClick = useCallback(() => {
    if (setRange) {
      setIsRangeExist(false);
      setRange(undefined);
    }
  }, [setRange]);

  useEffect(() => {
    if (range && range.rangeStart && range.rangeEnd) {
      setIsRangeExist(true);
    }
  }, [range]);

  return (
    <CalendarProvider>
      <DateProvider>
        <CalendarContainer $isRangeExist={isRangeExist}>
          <MonthSlider minDate={minDate} maxDate={maxDate} />
          <WeekdaysHeader isMondayFirst={isMondayFirst} />
          <DayOfWeekGrid
            isMondayFirst={isMondayFirst}
            isWeekendDate={isWeekendDate}
            range={range}
            minDate={minDate}
            maxDate={maxDate}
          />
        </CalendarContainer>
        {isRangeExist && (
          <ClearButton title="Clear" onClearClick={handlClearButtonClick} />
        )}
      </DateProvider>
    </CalendarProvider>
  );
};

export default Calendar;
