import { styled, DefaultTheme } from "styled-components";

import { Container } from "constants/styles/global";

import { CalendarStyledProps } from "./types";

const spaceM = ({ theme }: DefaultTheme) => theme.spaces.m;
const grayColor = ({ theme }: DefaultTheme) => theme.colors.gray;
const whiteColor = ({ theme }: DefaultTheme) => theme.colors.white;

export const CalendarContainer = styled(Container)<CalendarStyledProps>`
  padding: ${spaceM}px;
  background-color: ${whiteColor};
  border: 1px solid ${grayColor};
  border-bottom: ${({ $isRangeExist }) => $isRangeExist && `none`};
  border-radius: ${({ $isRangeExist }) =>
    $isRangeExist ? `8px 8px 0 0` : "8px"};
  flex-direction: column;
`;
