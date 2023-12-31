import styled, { DefaultTheme } from "styled-components";

import { Button, Container } from "constants/styles/global";

const lightGrayColor = ({ theme }: DefaultTheme) => theme.colors.lightGray;
const darkBlueColor = ({ theme }: DefaultTheme) => theme.colors.darkBlue;
const whiteColor = ({ theme }: DefaultTheme) => theme.colors.white;
const spaceM = ({ theme }: DefaultTheme) => theme.spaces.m;

export const Wrapper = styled(Container)`
  gap: ${spaceM}px;
  width: 100%;
`;

export const InputWrapper = styled(Container)`
  border: 1px solid ${lightGrayColor};
  margin: ${spaceM}px 0;
  width: 100%;
  justify-content: flex-start;
  border-radius: 8px;
`;

export const InputButton = styled(Button)`
  background-color: ${darkBlueColor};
  color: ${whiteColor};
  width: 100px;
  height: 40px;
  border-radius: 8px;
`;
