import { createContext, useState, useContext } from "react";

import { ProviderProps } from "./type";

const defaultMinDate = new Date(2022, 0, 1);
const defaultMaxDate = new Date(2035, 11, 0);

export const DateContext = createContext<{
  minDate: Date;
  maxDate: Date;
  setMinDate: React.Dispatch<React.SetStateAction<Date>>;
  setMaxDate: React.Dispatch<React.SetStateAction<Date>>;
}>({
  minDate: defaultMinDate,
  maxDate: defaultMaxDate,
  setMinDate: () => undefined,
  setMaxDate: () => undefined,
});

const DateProvider = ({ children }: ProviderProps) => {
  const [minDate, setMinDate] = useState(defaultMinDate);
  const [maxDate, setMaxDate] = useState(defaultMaxDate);

  const value = {
    minDate,
    maxDate,
    setMinDate,
    setMaxDate,
  };

  return <DateContext.Provider value={value}>{children}</DateContext.Provider>;
};

const useDate = () => {
  return useContext(DateContext);
};

export { DateProvider, useDate };
