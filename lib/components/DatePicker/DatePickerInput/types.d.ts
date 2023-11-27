import React from "react";
type DispatchString = React.Dispatch<React.SetStateAction<string>>;
type DispatchBoolean = React.Dispatch<React.SetStateAction<boolean>>;
export interface DatePickerInputProps {
    inputValue: string;
    setInputValue: DispatchString;
    setError: DispatchString;
    setIsCalendarOpen: DispatchBoolean;
}
export {};
