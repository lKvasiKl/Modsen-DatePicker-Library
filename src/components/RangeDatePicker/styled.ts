import { styled, DefaultTheme } from "styled-components";

import { Container } from "constants/styles/global";

const spaceM = ({ theme }: DefaultTheme) => theme.spaces.m;

export const RangeDatePickerWrapper = styled(Container)`
  gap: ${spaceM}px;
  flex-direction: row;
`;
