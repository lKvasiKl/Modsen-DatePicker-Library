import React from "react";

export interface DatePickerInputProps {
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
  setError: React.Dispatch<React.SetStateAction<string>>;
  setIsCalendarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
