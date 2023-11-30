import styled, { DefaultTheme } from "styled-components";

import { Button } from "constants/styles/global";
import { baseText } from "constants/styles/mixins";

import { ButtonStyledProps } from "./types";

const spaceS = ({ theme }: DefaultTheme) => theme.spaces.s;
const grayColor = ({ theme }: DefaultTheme) => theme.colors.gray;
const whiteColor = ({ theme }: DefaultTheme) => theme.colors.white;

export const ButtonContainer = styled(Button)<ButtonStyledProps>`
  ${baseText}

  padding: ${spaceS}px 0;
  border: 1px solid ${grayColor};
  background-color: ${whiteColor};
  border-bottom: ${({ $isTodosEnabled }) => $isTodosEnabled && `none`};
  border-radius: ${({ $isTodosEnabled }) =>
    $isTodosEnabled ? "0" : "0 0 8px 8px"};
  min-width: 246px;
  justify-content: space-between;

  &:hover {
    background-color: ${grayColor};
  }
`;
