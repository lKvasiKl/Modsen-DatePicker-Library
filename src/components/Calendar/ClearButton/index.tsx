import React from "react";

import { ClearButtonProps } from "./types";
import { ClearRangeButton } from "./styled";

const ClearButton = React.memo(({ title, onClearClick }: ClearButtonProps) => {
  return <ClearRangeButton onClick={onClearClick}>{title}</ClearRangeButton>;
});

export default ClearButton;
