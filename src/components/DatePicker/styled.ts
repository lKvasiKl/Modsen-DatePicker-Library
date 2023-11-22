import { styled, DefaultTheme } from "styled-components";

import { baseText } from "constants/styles/mixins";
import { Container } from "constants/styles/global";

const fontSizeL = ({ theme }: DefaultTheme) => theme.fonts.fontSize.l;
const fontSizeS = ({ theme }: DefaultTheme) => theme.fonts.fontSize.s;
const fontWeightS = ({ theme }: DefaultTheme) => theme.fonts.fontWeight.s;
const grayColor = ({ theme }: DefaultTheme) => theme.colors.gray;
const redColor = ({ theme }: DefaultTheme) => theme.colors.red;
const spaceM = ({ theme }: DefaultTheme) => theme.spaces.m;
const spaceS = ({ theme }: DefaultTheme) => theme.spaces.s;

export const DatePickerContainer = styled(Container)`
  flex-direction: column;
  align-items: flex-start;
`;

export const Label = styled.label`
  ${baseText}

  font-size: ${fontSizeL}px;
`;

export const DatePickerInputWrapper = styled(Container)`
  border: 1px solid ${grayColor};
  padding: ${spaceM}px;
  margin: ${spaceM}px 0;
  gap: ${spaceS}px;
  width: 246px;
  justify-content: flex-start;
  border-radius: 8px;
  position: relative;
`;

export const InfoContainer = styled(Container)`
  gap: ${spaceS}px;
`;

export const Error = styled.span`
  ${baseText}

  font-size: ${fontSizeS}px;
  font-weight: ${fontWeightS};
  color: ${redColor};
`;

export const CalendarWrapper = styled.div`
  position: absolute;
  top: 56%;
`;
