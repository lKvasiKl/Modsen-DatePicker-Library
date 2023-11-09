import { styled, DefaultTheme } from "styled-components";

import { Container } from "constants/styles/global";
import { baseText } from "constants/styles/mixins";

const spaceM = ({ theme }: DefaultTheme) => theme.spaces.m;

export const DayOfWeekGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(1, 1fr);
  width: fit-content;
`;

export const YearCalendarContainer = styled(DayOfWeekGridContainer)`
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 1fr);
  align-items: baseline;
`;

export const MiniCalendarWrapper = styled(Container)`
  padding: ${spaceM}px;
  flex-direction: column;
`;

export const MonthText = styled.p`
  ${baseText}
  align-self: flex-start;
  padding-left: ${spaceM}px;
`;
