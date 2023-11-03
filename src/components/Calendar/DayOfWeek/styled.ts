import { DefaultTheme, styled } from "styled-components";

import { Button } from "constants/styles/global";
import { determineRadius } from "utils/borderRadiusCalculator";
import {
  determineBackgroundColor,
  determineTextColor,
} from "utils/colorCalculator";

import { DayOfWeekStyleProps } from "./types";

const grayColor = ({ theme }: DefaultTheme) => theme.colors.gray;
const acquaColor = ({ theme }: DefaultTheme) => theme.colors.acqua;
const darkBlueHoverColor = ({ theme }: DefaultTheme) =>
  theme.colors.darkBlueHover;
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
  height: 32px;

  &:hover {
    background-color: ${({ $isSelected }) =>
      $isSelected ? darkBlueHoverColor : grayColor};
  }
`;
