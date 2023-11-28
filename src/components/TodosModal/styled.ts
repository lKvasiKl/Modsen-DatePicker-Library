import styled, { DefaultTheme } from "styled-components";

import { Container } from "constants/styles/global";

const spaceM = ({ theme }: DefaultTheme) => theme.spaces.m;

export const TasksWrapper = styled(Container)`
  gap: ${spaceM}px;
  justify-content: flex-start;
  flex-direction: column;
  width: 100%;
  max-height: 350px;
  overflow: auto;
`;
