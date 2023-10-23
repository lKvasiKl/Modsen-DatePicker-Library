import { css } from "styled-components";

import { FONTS } from "./fonts";

export const displayFlex = css`
  display: flex;
`;

export const flexColumn = css`
  ${displayFlex}
  flex-direction: column;
`;

export const contentCenter = css`
  justify-content: center;
  align-items: center;
`;

export const baseText = css`
  font-size: ${FONTS.fontSize.s}px;
  font-weight: ${FONTS.fontWeight.m};
  font-style: normal;
  line-height: normal;
`;
