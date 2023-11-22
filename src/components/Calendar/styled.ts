import { styled, DefaultTheme } from "styled-components";

import { Container } from "constants/styles/global";

import { CalendarStyledProps } from "./types";

const grayColor = ({ theme }: DefaultTheme) => theme.colors.gray;
const whiteColor = ({ theme }: DefaultTheme) => theme.colors.white;

export const CalendarContainer = styled(Container)<CalendarStyledProps>`
  background-color: ${whiteColor};
  border: 1px solid ${grayColor};
  border-bottom: ${({ $isRangeExist, $isTodosEnabled }) =>
    ($isRangeExist || $isTodosEnabled) && `none`};
  border-radius: ${({ $isRangeExist, $isTodosEnabled }) =>
    $isRangeExist || $isTodosEnabled ? `8px 8px 0 0` : "8px"};
  padding: 10px;
  flex-direction: column;
`;
