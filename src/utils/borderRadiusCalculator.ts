import { RANGE_STATE } from "constants/calendarData";

const { Start, Between, End } = RANGE_STATE;

export const determineRadius = ($rangeState?: RANGE_STATE) => {
  switch ($rangeState) {
    case Start: {
      return "8px 0 0 8px";
    }
    case Between: {
      return "0";
    }
    case End: {
      return "0 8px 8px 0";
    }
    default: {
      return "8px";
    }
  }
};
