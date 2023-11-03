import { styled, DefaultTheme } from "styled-components";

import { Container } from "constants/styles/global";

const spaceM = ({ theme }: DefaultTheme) => theme.spaces.m;

export const RangeDatePickerWrapper = styled(Container)`
  flex-direction: row;
  gap: ${spaceM}px;
`;
