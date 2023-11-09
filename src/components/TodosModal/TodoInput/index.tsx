import React, { ChangeEvent } from "react";

import { BaseInput } from "constants/styles/global";

import { TodoInputProps } from "./types";
import { BUTTON_TEXT, PLACEHOLDER } from "./config";
import { Wrapper, InputButton, InputWrapper } from "./styled";

const TodoInput = React.memo(
  ({ todoText, onChange, onAddTask }: TodoInputProps) => {
    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
      onChange(e);
    };

    const handleAddTodo = () => {
      onAddTask();
    };

    const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") {
        handleAddTodo();
      }
    };

    return (
      <Wrapper>
        <InputWrapper>
          <BaseInput
            placeholder={PLACEHOLDER}
            type="text"
            value={todoText}
            onChange={handleInputChange}
            onKeyDown={handleInputKeyDown}
          />
        </InputWrapper>
        <InputButton onClick={handleAddTodo}>{BUTTON_TEXT}</InputButton>
      </Wrapper>
    );
  },
);

export default TodoInput;
