import styled, { createGlobalStyle } from "styled-components";

import { FONTS } from "./fonts";
import { baseText, contentCenter, displayFlex, flexColumn } from "./mixins";
import { SPACES } from "./spaces";

export const GlobalStyle = createGlobalStyle`
    * {
        font-family: ${FONTS.fontFamily.openSans};
        box-sizing: border-box;
        user-select: none;
        text-decoration: none;
        list-style: none;
        outline: none;
        margin: 0;
        padding: 0;
    }
`;

export const Button = styled.button`
  ${flexColumn}
  ${contentCenter}
  ${baseText}
  
  background: transparent;
  border: none;
  cursor: pointer;
`;

export const Container = styled.div`
  ${displayFlex}
  ${contentCenter}
  
  cursor: default;
`;

export const Icon = styled.img`
  width: 16px;
  height: 16px;
  cursor: pointer;
`;

export const Title = styled.h1`
  ${baseText}

  font-size:  ${FONTS.fontSize.xl}px;
  font-weight: ${FONTS.fontWeight.l};
`;

export const BaseInput = styled.input`
  ${baseText}

  margin: ${SPACES.m}px;
  font-size: ${FONTS.fontSize.l}px;
  font-weight: ${FONTS.fontWeight.s};
  width: 100%;
  border: none;
  background: transparent;
`;
