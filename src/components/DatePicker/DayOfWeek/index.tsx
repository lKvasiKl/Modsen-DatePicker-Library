import React from "react";

import { DayOfWeekProps } from "./types";
import { DayOfWeekButton } from "./styled";

const DayofWeek = React.memo(
  ({
    dayOfWeek,
    isSelected = false,
    isDisabled = false,
    isWeekend = false,
    rangeState = undefined,
    onClick,
  }: DayOfWeekProps) => {
    const day = dayOfWeek.getDate();

    return (
      <DayOfWeekButton
        $isSelected={isSelected}
        $isDisabled={isDisabled}
        $isWeekend={isWeekend}
        $rangeState={rangeState}
        onClick={onClick}
      >
        {day}
      </DayOfWeekButton>
    );
  },
);

export default DayofWeek;
