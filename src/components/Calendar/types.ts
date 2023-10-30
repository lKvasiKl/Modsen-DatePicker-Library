import { Range } from "decorators/withRange/types";

export interface CalendarProps {
  isMondayFirst?: boolean;
  isWeekendDate?: (date: Date) => boolean;
  range?: Range;
  setRange?: React.Dispatch<React.SetStateAction<Range | undefined>>;
  minDate?: Date;
  maxDate?: Date;
}

export interface CalendarStyledProps {
  $isRangeExist: boolean;
}
