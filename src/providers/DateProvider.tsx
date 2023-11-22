import React, { createContext, useState, useContext } from "react";

import {
  ProviderProps,
  RangeValues,
  DispatchDate,
  DispatchRangeValues,
} from "./type";

const defaultMinDate = new Date(2022, 0, 1);
const defaultMaxDate = new Date(2035, 11, 0);

export const DateContext = createContext<{
  minDate: Date;
  maxDate: Date;
  range: RangeValues;
  setMinDate: DispatchDate;
  setMaxDate: DispatchDate;
  setRange: DispatchRangeValues;
}>({
  minDate: defaultMinDate,
  maxDate: defaultMaxDate,
  range: undefined,
  setMinDate: () => undefined,
  setMaxDate: () => undefined,
  setRange: () => undefined,
});

const DateProvider = ({ children }: ProviderProps) => {
  const [minDate, setMinDate] = useState(defaultMinDate);
  const [maxDate, setMaxDate] = useState(defaultMaxDate);
  const [range, setRange] = useState<RangeValues>({
    rangeStart: undefined,
    rangeEnd: undefined,
  });

  const value = {
    minDate,
    maxDate,
    range,
    setMinDate,
    setMaxDate,
    setRange,
  };

  return <DateContext.Provider value={value}>{children}</DateContext.Provider>;
};

const useDate = () => {
  return useContext(DateContext);
};

export { DateProvider, useDate };
