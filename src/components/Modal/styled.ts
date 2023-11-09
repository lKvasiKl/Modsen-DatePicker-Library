import { styled, DefaultTheme } from "styled-components";

import { Button, Container } from "constants/styles/global";

const spaceM = ({ theme }: DefaultTheme) => theme.spaces.m;
const grayColor = ({ theme }: DefaultTheme) => theme.colors.gray;
const lightGrayColor = ({ theme }: DefaultTheme) => theme.colors.lightGray;
const whiteColor = ({ theme }: DefaultTheme) => theme.colors.white;

export const ModalContainer = styled(Container)`
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
`;

export const ModalWindow = styled(Container)`
  box-shadow: 0px 0px 13px 0px ${lightGrayColor};
  background-color: ${whiteColor};
  border: 1px solid ${grayColor};
  padding: ${spaceM}px;
  flex-direction: column;
  width: 100%;
  max-width: 550px;
  height: fit-content;
  position: relative;
  border-radius: 10px;
`;

export const CloseButton = styled(Button)`
  align-self: flex-end;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.15);
  }
`;
