import { RANGE_STATE } from "constants/calendarData";
import { COLORS } from "constants/styles";

export const determineBackgroundColor = (
  $isSelected: boolean,
  $rangeState: RANGE_STATE | undefined,
): string => {
  if ($isSelected || $rangeState === RANGE_STATE.End) return COLORS.darkBlue;
  if ($rangeState === RANGE_STATE.Start) return COLORS.blue;
  if ($rangeState === RANGE_STATE.Between) return COLORS.lightBlue;

  return COLORS.white;
};

export const determineTextColor = (
  $isSelected: boolean,
  $isDisabled: boolean,
  $isWeekend: boolean,
  $rangeState: RANGE_STATE | undefined,
): string => {
  if (
    $isSelected ||
    $rangeState === RANGE_STATE.Start ||
    $rangeState === RANGE_STATE.End
  )
    return COLORS.white;
  if ($rangeState === RANGE_STATE.Between) return COLORS.darkBlue;
  if ($isDisabled) return COLORS.lightGray;
  if ($isWeekend) return COLORS.red;

  return COLORS.black;
};
