import React from "react";

import { WeekdayProps } from "./types";
import { WeekdayContainer } from "./styled";

const Weekday = React.memo(({ weekday }: WeekdayProps) => {
  return <WeekdayContainer>{weekday}</WeekdayContainer>;
});

export default Weekday;
