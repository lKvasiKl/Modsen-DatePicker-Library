import { useEffect, useState } from "react";

import DatePickerInput from "./DatePickerInput";
import { useCalendar } from "providers/CalendarProvider";
import CaledarIcon from "assets/icons/calendar.svg";
import ClearIcon from "assets/icons/clear.svg";
import { Icon } from "constants/styles/global";
import { formatDate } from "utils/calendarData";
import { useDate } from "providers/DateProvider";

import { DatePickerPros } from "./types";
import {
  DatePickerInputWrapper,
  Label,
  Error,
  DatePickerContainer,
  CalendarWrapper,
} from "./styled";

const DatePicker = ({ label, rangeValue, Calendar }: DatePickerPros) => {
  const [inputValue, setInputValue] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [isCalendarOpen, setIsCalendarOpen] = useState<boolean>(false);

  const { selectedDate } = useCalendar();
  const { setRange } = useDate();

  useEffect(() => {
    setInputValue(formatDate(selectedDate));
  }, [selectedDate]);

  const handleCalendarIconClick = () => {
    setInputValue(formatDate(selectedDate));
    setIsCalendarOpen((prevState) => !prevState);
  };

  const handleClearInput = () => {
    setInputValue("");
    setRange({ rangeStart: undefined, rangeEnd: undefined });
    setIsCalendarOpen(false);
  };

  return (
    <DatePickerContainer>
      <Label>{label}</Label>
      {error && <Error>{error}</Error>}
      <DatePickerInputWrapper>
        <Icon src={CaledarIcon} onClick={handleCalendarIconClick} />
        <DatePickerInput
          inputValue={rangeValue || inputValue}
          setInputValue={setInputValue}
          setError={setError}
          setIsCalendarOpen={setIsCalendarOpen}
        />
        {inputValue && <Icon src={ClearIcon} onClick={handleClearInput} />}
      </DatePickerInputWrapper>
      <CalendarWrapper>{isCalendarOpen && <Calendar />}</CalendarWrapper>
    </DatePickerContainer>
  );
};

export default DatePicker;
