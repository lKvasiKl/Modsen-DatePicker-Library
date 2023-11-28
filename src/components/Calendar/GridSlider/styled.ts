import styled, { DefaultTheme } from "styled-components";

import { Button, Container } from "constants/styles/global";
import { baseText } from "constants/styles/mixins";

const spaceS = ({ theme }: DefaultTheme) => theme.spaces.s;
const fontSizeM = ({ theme }: DefaultTheme) => theme.fonts.fontSize.m;
const fontWeightL = ({ theme }: DefaultTheme) => theme.fonts.fontWeight.l;

export const SliderContainer = styled(Container)`
  padding: ${spaceS}px 0;
  width: 100%;
  min-width: 224px;
  justify-content: space-between;
`;

export const SliderButton = styled(Button)`
  width: 16px;
  height: 16px;
`;

export const Title = styled.h1`
  ${baseText}

  font-size: ${fontSizeM}px;
  font-weight: ${fontWeightL};
  cursor: pointer;
`;
