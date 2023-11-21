import React, { useCallback, useEffect, useRef, useState } from "react";
import { DatePickerInput } from "components";
import { ICONS } from "assets";

import { useCalendar } from "providers/CalendarProvider";
import { useDate } from "providers/DateProvider";

import useClickOutside from "hooks/useClickOutside";

import { formatDate } from "utils/calendarDateData";

import { Icon } from "constants/styles/global";

import { DatePickerPros } from "./types";
import {
  DatePickerInputWrapper,
  Label,
  Error,
  DatePickerContainer,
  CalendarWrapper,
  InfoContainer,
} from "./styled";

const DatePicker = React.memo(
  ({ label, rangeValue, Calendar }: DatePickerPros) => {
    const [inputValue, setInputValue] = useState<string>("");
    const [error, setError] = useState<string>("");
    const [isCalendarOpen, setIsCalendarOpen] = useState<boolean>(false);

    const calendarRef = useRef<HTMLDivElement | null>(null);

    useClickOutside(calendarRef, () => {
      setError("");
      setInputValue(formatDate(selectedDate));
      setIsCalendarOpen(false);
    });

    const { selectedDate } = useCalendar();
    const { setRange } = useDate();

    useEffect(() => {
      setInputValue(formatDate(selectedDate));
    }, [selectedDate]);

    const handleCalendarIconClick = useCallback(() => {
      setError("");
      setInputValue(formatDate(selectedDate));
      setIsCalendarOpen((prevValue) => !prevValue);
    }, [selectedDate, setIsCalendarOpen]);

    const handleClearInput = useCallback(() => {
      setError("");
      setInputValue("");
      setRange({ rangeStart: undefined, rangeEnd: undefined });
      setIsCalendarOpen(false);
    }, [setRange]);

    return (
      <DatePickerContainer>
        <InfoContainer>
          <Label>{label}</Label>
          {error && <Error>{error}</Error>}
        </InfoContainer>
        <DatePickerInputWrapper>
          <Icon
            data-testid="calendar-icon-button"
            src={ICONS.calendar}
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
              src={ICONS.clear}
              onClick={handleClearInput}
            />
          )}
        </DatePickerInputWrapper>
        <CalendarWrapper ref={calendarRef}>
          {isCalendarOpen && <Calendar />}
        </CalendarWrapper>
      </DatePickerContainer>
    );
  },
);

export default DatePicker;
