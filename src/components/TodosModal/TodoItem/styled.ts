import { styled, DefaultTheme } from "styled-components";

import { baseText } from "constants/styles/mixins";
import { Button, Container } from "constants/styles/global";

import { TodoItemStyledProps } from "./types";

const lightGrayColor = ({ theme }: DefaultTheme) => theme.colors.lightGray;
const redColor = ({ theme }: DefaultTheme) => theme.colors.red;
const spaceM = ({ theme }: DefaultTheme) => theme.spaces.m;

export const TodoWrapper = styled(Container)`
  border: 1px solid ${lightGrayColor};
  gap: ${spaceM}px;
  padding: ${spaceM}px;
  justify-content: flex-start;
  width: 100%;
  border-radius: 8px;
`;

export const TodoText = styled.p<TodoItemStyledProps>`
  ${baseText}
  text-decoration: ${({ $isDone }) => ($isDone ? "line-through" : "none")};
  width: 100%;
  max-width: 433px;
  word-wrap: break-word;
`;

export const DeleteTaskButton = styled(Button)`
  &:hover {
    color: ${redColor};
  }
`;
