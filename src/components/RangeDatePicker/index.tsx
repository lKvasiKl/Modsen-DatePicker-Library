import DatePicker from "components/DatePicker";

import { RangeDatePickerPros } from "./types";
import { RANGE_FROM, RANGE_TO } from "./config";
import { RangeDatePickerWrapper } from "./styled";
import { useDate } from "providers/DateProvider";
import { formatDate } from "utils/calendarData";

const RangeDatePicker = ({ Calendar }: RangeDatePickerPros) => {
  const { range } = useDate();

  const rangeStart = range?.rangeStart ? formatDate(range.rangeStart) : "";
  const rangeEnd = range?.rangeEnd ? formatDate(range.rangeEnd) : "";

  return (
    <RangeDatePickerWrapper>
      <DatePicker
        label={RANGE_FROM}
        rangeValue={rangeStart}
        Calendar={Calendar}
      />
      <DatePicker label={RANGE_TO} rangeValue={rangeEnd} Calendar={Calendar} />
    </RangeDatePickerWrapper>
  );
};

export default RangeDatePicker;
