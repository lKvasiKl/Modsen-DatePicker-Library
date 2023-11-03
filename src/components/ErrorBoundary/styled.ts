import { styled, DefaultTheme } from "styled-components";

import { Container } from "constants/styles/global";
import { baseText } from "constants/styles/mixins";

const redColor = ({ theme }: DefaultTheme) => theme.colors.red;

export const ErrorBoundaryContainer = styled(Container)`
  flex-direction: column;
`;

export const Error = styled.p`
  ${baseText}
  color: ${redColor};
`;

export const Text = styled.span`
  ${baseText}
  text-align: center;
`;
