import React from "react";

import { useDate } from "providers/DateProvider";

import DatePicker from "components/DatePicker";
import ThemeWrapper from "components/ThemeWrapper";

import { formatDate } from "utils/calendarDateData";

import { RangeDatePickerPros } from "./types";
import { RANGE_FROM, RANGE_TO } from "./config";
import { RangeDatePickerWrapper } from "./styled";

const RangeDatePicker = React.memo(({ Calendar }: RangeDatePickerPros) => {
  const { range } = useDate();

  const rangeStart = range?.rangeStart ? formatDate(range.rangeStart) : "";
  const rangeEnd = range?.rangeEnd ? formatDate(range.rangeEnd) : "";

  return (
    <ThemeWrapper>
      <RangeDatePickerWrapper>
        <DatePicker
          Calendar={Calendar}
          label={RANGE_FROM}
          rangeValue={rangeStart}
        />
        <DatePicker
          Calendar={Calendar}
          label={RANGE_TO}
          rangeValue={rangeEnd}
        />
      </RangeDatePickerWrapper>
    </ThemeWrapper>
  );
});

export default RangeDatePicker;
