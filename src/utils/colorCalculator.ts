import { RANGE_STATE } from "constants/calendarData";
import { COLORS } from "constants/styles";

const { Start, Between, End } = RANGE_STATE;
const { darkBlue, blue, lightBlue, white, orange, lightGray, red, black } =
  COLORS;

export const determineBackgroundColor = (
  $isSelected: boolean,
  $rangeState: RANGE_STATE | undefined,
): string => {
  if ($isSelected || $rangeState === End) return darkBlue;
  if ($rangeState === Start) return blue;
  if ($rangeState === Between) return lightBlue;

  return white;
};

export const determineTextColor = (
  $isSelected: boolean,
  $isDisabled: boolean,
  $isWeekend: boolean,
  $rangeState: RANGE_STATE | undefined,
  $isHoliday: boolean,
): string => {
  if ($isSelected || $rangeState === Start || $rangeState === End) return white;
  if ($isHoliday) return orange;
  if ($rangeState === Between) return darkBlue;
  if ($isDisabled) return lightGray;
  if ($isWeekend) return red;

  return black;
};
