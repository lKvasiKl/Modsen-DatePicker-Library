import { useCalendar } from "providers/CalendarProvider";

import { DatePickerInputProps } from "./types";
import { PLACEHOLDER, ERROR_MESSAGE, INVALID_DATE_MESSAGE } from "./config";
import { DateInput } from "./styled";

const DatePickerInput = ({
  inputValue,
  setInputValue,
  setError,
  setIsCalendarOpen,
}: DatePickerInputProps) => {
  const { setSelectedDate, setSelectedMonth, setSelectedYear } = useCalendar();

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    setError("");
    if (e.key === "Backspace" && inputValue.endsWith("/")) {
      setInputValue(inputValue.slice(0, -1));
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
      setError(ERROR_MESSAGE);
      return;
    } else {
      setInputValue(value);
      setError("");
    }
  };

  return (
    <DateInput
      placeholder={PLACEHOLDER}
      type="text"
      value={inputValue}
      onKeyDown={handleKeyDown}
      onChange={handleInputChange}
    />
  );
};

export default DatePickerInput;
