import styled, { createGlobalStyle } from "styled-components";

import { baseText, contentCenter, flexColumn } from "./mixins";
import { FONTS } from "./fonts";

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        text-decoration: none;
        list-style: none;
        outline: none;
        font-family: ${FONTS.fontFamily};
        margin: 0;
        padding: 0;
    }
`;

export const Button = styled.button`
  ${flexColumn}
  ${contentCenter}
  ${baseText}
  border: none;
  cursor: pointer;
`;
