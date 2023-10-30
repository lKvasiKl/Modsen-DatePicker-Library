import { Range } from "decorators/withRange/types";

export interface DayOfWeekGridProps {
  isMondayFirst?: boolean;
  isWeekendDate?: (date: Date) => boolean;
  range?: Range;
  minDate?: Date;
  maxDate?: Date;
}
