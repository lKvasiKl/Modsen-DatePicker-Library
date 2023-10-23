import { RANGE_STATE } from "constants/calendarData";

export const determineRadius = ($rangeState: RANGE_STATE | undefined) => {
  switch ($rangeState) {
    case RANGE_STATE.Start: {
      return "8px 0 0 8px";
    }
    case RANGE_STATE.Between: {
      return "0";
    }
    case RANGE_STATE.End: {
      return "0 8px 8px 0";
    }
    default: {
      return "8px";
    }
  }
};
