import { styled, DefaultTheme } from "styled-components";

import { Button } from "constants/styles/global";
import { baseText } from "constants/styles/mixins";

const spaceS = ({ theme }: DefaultTheme) => theme.spaces.s;
const grayColor = ({ theme }: DefaultTheme) => theme.colors.gray;
const whiteColor = ({ theme }: DefaultTheme) => theme.colors.white;

export const ClearRangeButton = styled(Button)`
  ${baseText}
  padding: ${spaceS}px 0;
  border: 1px solid ${grayColor};
  background-color: ${whiteColor};
  border-radius: 0 0 8px 8px;
  width: 100%;
  min-width: 224px;
  justify-content: space-between;

  &:hover {
    background-color: ${grayColor};
  }
`;
