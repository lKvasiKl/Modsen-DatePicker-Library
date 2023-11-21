import React, { useCallback } from "react";

import { useCalendar } from "providers/CalendarProvider";

import { DatePickerInputProps } from "./types";
import {
  PLACEHOLDER,
  ERROR_MESSAGE,
  INVALID_DATE_MESSAGE,
  DAY_LENGTH,
  DAY_SEPORATOR_MONTH_LENGTH,
  SEPARATOR,
  DATE_FORMAT_LENGTH,
  DATE_FORMAT_REGEX,
  MAX_YEAR,
} from "./config";
import { DateInput } from "./styled";

const DatePickerInput = React.memo((props: DatePickerInputProps) => {
  const { inputValue, setInputValue, setError, setIsCalendarOpen } = props;

  const { setSelectedDate, setSelectedMonth, setSelectedYear } = useCalendar();

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      setError("");
      if (e.key === "Backspace" && inputValue.endsWith(SEPARATOR)) {
        setInputValue(inputValue.slice(0, -1));
      }
    },
    [inputValue, setError, setInputValue],
  );

  const handleFocusInput = useCallback(() => {
    setIsCalendarOpen(true);
  }, []);

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setError("");
      setIsCalendarOpen(true);
      const value = e.target.value;

      const validInput = DATE_FORMAT_REGEX.test(value);

      if (!validInput) {
        e.preventDefault();
        setError(ERROR_MESSAGE);
        return;
      }

      if (value.length >= DATE_FORMAT_LENGTH) {
        setInputValue(value.substring(0, DATE_FORMAT_LENGTH));
        const parts = value.split(SEPARATOR);
        const day = parseInt(parts[0]);
        const month = parseInt(parts[1]) - 1;
        const year = parseInt(parts[2]);

        if (year > MAX_YEAR) {
          setError(ERROR_MESSAGE);
          return;
        }

        const date = new Date(year, month, day);

        if (
          date.getDate() !== day ||
          date.getMonth() !== month ||
          date.getFullYear() !== year
        ) {
          setError(INVALID_DATE_MESSAGE);
        } else {
          setSelectedDate(date);
          setSelectedMonth(month);
          setSelectedYear(year);
        }
      }

      if (value.length === DAY_LENGTH) {
        setInputValue(value + SEPARATOR);
      } else if (value.length === DAY_SEPORATOR_MONTH_LENGTH) {
        setInputValue(value + SEPARATOR);
      } else {
        setInputValue(value);
      }
    },
    [
      setError,
      setInputValue,
      setIsCalendarOpen,
      setSelectedDate,
      setSelectedMonth,
      setSelectedYear,
    ],
  );

  return (
    <DateInput
      data-testid="date-picker-input"
      placeholder={PLACEHOLDER}
      type="text"
      value={inputValue}
      onChange={handleInputChange}
      onFocus={handleFocusInput}
      onKeyDown={handleKeyDown}
    />
  );
});

export default DatePickerInput;
