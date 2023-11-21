import React from "react";

import { ButtonProps } from "./types";
import { ButtonContainer } from "./styled";

const Button = React.memo(
  ({ title, onButtonClick, $isTodosEnabled }: ButtonProps) => {
    return (
      <ButtonContainer
        $isTodosEnabled={$isTodosEnabled}
        data-testid="calendar-button"
        onClick={onButtonClick}
      >
        {title}
      </ButtonContainer>
    );
  },
);

export default Button;
