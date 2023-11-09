import React, { useCallback, useEffect, useState } from "react";
import { DatePickerInput } from "components";

import { useCalendar } from "providers/CalendarProvider";
import { useDate } from "providers/DateProvider";

import { formatDate } from "utils/calendarDateData";

import { Icon } from "constants/styles/global";

import CaledarIcon from "assets/icons/calendar.svg";
import ClearIcon from "assets/icons/clear.svg";

import { DatePickerPros } from "./types";
import {
  DatePickerInputWrapper,
  Label,
  Error,
  DatePickerContainer,
  CalendarWrapper,
} from "./styled";

const DatePicker = React.memo(
  ({ label, rangeValue, Calendar }: DatePickerPros) => {
    const [inputValue, setInputValue] = useState<string>("");
    const [error, setError] = useState<string>("");
    const [isCalendarOpen, setIsCalendarOpen] = useState<boolean>(false);

    const { selectedDate } = useCalendar();
    const { setRange } = useDate();

    useEffect(() => {
      setInputValue(formatDate(selectedDate));
    }, [selectedDate]);

    const handleCalendarIconClick = useCallback(() => {
      setInputValue(formatDate(selectedDate));
      setIsCalendarOpen((prevState) => !prevState);
    }, [selectedDate]);

    const handleClearInput = useCallback(() => {
      setInputValue("");
      setRange({ rangeStart: undefined, rangeEnd: undefined });
      setIsCalendarOpen(false);
    }, [setRange]);

    return (
      <DatePickerContainer>
        <Label>{label}</Label>
        {error && <Error>{error}</Error>}
        <DatePickerInputWrapper>
          <Icon
            data-testid="calendar-icon-button"
            src={CaledarIcon}
            onClick={handleCalendarIconClick}
          />
          <DatePickerInput
            inputValue={rangeValue || inputValue}
            setError={setError}
            setInputValue={setInputValue}
            setIsCalendarOpen={setIsCalendarOpen}
          />
          {inputValue && (
            <Icon
              data-testid="clear-icon-button"
              src={ClearIcon}
              onClick={handleClearInput}
            />
          )}
        </DatePickerInputWrapper>
        <CalendarWrapper>{isCalendarOpen && <Calendar />}</CalendarWrapper>
      </DatePickerContainer>
    );
  },
);

export default DatePicker;
