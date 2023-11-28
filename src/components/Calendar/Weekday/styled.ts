import styled, { DefaultTheme } from "styled-components";

import { baseText } from "constants/styles/mixins";

const whiteColor = ({ theme }: DefaultTheme) => theme.colors.white;
const blackColor = ({ theme }: DefaultTheme) => theme.colors.black;
const spaceM = ({ theme }: DefaultTheme) => theme.spaces.m;
const fontSizeM = ({ theme }: DefaultTheme) => theme.fonts.fontSize.m;
const fontWeightL = ({ theme }: DefaultTheme) => theme.fonts.fontWeight.l;

export const WeekdayContainer = styled.div`
  ${baseText}

  font-size: ${fontSizeM}px;
  font-weight: ${fontWeightL};
  background-color: ${whiteColor};
  color: ${blackColor};
  padding: ${spaceM}px;
  width: 32px;
  height: 32px;
`;
