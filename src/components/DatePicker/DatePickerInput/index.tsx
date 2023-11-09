import React, { useCallback } from "react";

import { useCalendar } from "providers/CalendarProvider";

import { DatePickerInputProps } from "./types";
import { PLACEHOLDER, ERROR_MESSAGE, INVALID_DATE_MESSAGE } from "./config";
import { DateInput } from "./styled";

const DatePickerInput = React.memo(
  ({
    inputValue,
    setInputValue,
    setError,
    setIsCalendarOpen,
  }: DatePickerInputProps) => {
    const { setSelectedDate, setSelectedMonth, setSelectedYear } =
      useCalendar();

    const handleKeyDown = useCallback(
      (e: React.KeyboardEvent<HTMLInputElement>) => {
        setError("");
        if (e.key === "Backspace" && inputValue.endsWith("/")) {
          setInputValue(inputValue.slice(0, -1));
        }
      },
      [inputValue, setError, setInputValue],
    );

    const handleInputChange = useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        setError("");
        const value = e.target.value;

        if (value.length >= 10) {
          setInputValue(value.substring(0, 10));
          const parts = value.split("/");
          const day = parseInt(parts[0]);
          const month = parseInt(parts[1]) - 1;
          const year = parseInt(parts[2]);
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
            setIsCalendarOpen(true);
          }
        }

        if (value.length === 2) {
          setInputValue(value + "/");
        } else if (value.length === 5) {
          setInputValue(value + "/");
        } else if (/[^0-9/]/.test(value)) {
          e.preventDefault();
          setInputValue(value.substring(0, 10));
          setError(ERROR_MESSAGE);
          return;
        } else {
          setInputValue(value);
          setError("");
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
        onKeyDown={handleKeyDown}
      />
    );
  },
);

export default DatePickerInput;
