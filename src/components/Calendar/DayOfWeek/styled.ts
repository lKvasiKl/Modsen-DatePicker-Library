import styled, { DefaultTheme } from "styled-components";

import { determineRadius } from "utils/borderRadiusCalculator";
import {
  determineBackgroundColor,
  determineTextColor,
} from "utils/colorCalculator";

import { Button } from "constants/styles/global";

import { DayOfWeekStyleProps } from "./types";

const grayColor = ({ theme }: DefaultTheme) => theme.colors.gray;
const darkBlueHoverColor = ({ theme }: DefaultTheme) =>
  theme.colors.darkBlueHover;
const orangeColor = ({ theme }: DefaultTheme) => theme.colors.orange;
const spaceM = ({ theme }: DefaultTheme) => theme.spaces.m;

export const DayOfWeekButton = styled(Button)<DayOfWeekStyleProps>`
  background-color: ${({ $isSelected, $rangeState }) =>
    determineBackgroundColor($isSelected, $rangeState)};
  color: ${({
    $isSelected,
    $isDisabled,
    $isWeekend,
    $rangeState,
    $isHoliday,
  }) =>
    determineTextColor(
      $isSelected,
      $isDisabled,
      $isWeekend,
      $rangeState,
      $isHoliday,
    )};
  padding: ${spaceM}px;
  border-radius: ${({ $rangeState }) => determineRadius($rangeState)};
  width: 32px;
  height: 38px;

  &:hover {
    background-color: ${({ $isSelected }) =>
      $isSelected ? darkBlueHoverColor : grayColor};
  }
`;

export const Dot = styled.div`
  background-color: ${orangeColor};
  width: 3px;
  height: 3px;
  border-radius: 50%;
`;
