import styled, { createGlobalStyle } from "styled-components";

import { FONTS } from "./fonts";
import { baseText, contentCenter, displayFlex, flexColumn } from "./mixins";

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

export const Container = styled.div`
  ${displayFlex}
  ${contentCenter}
  cursor: default;
`;
