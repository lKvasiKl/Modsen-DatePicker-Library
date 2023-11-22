import { render, screen } from "@testing-library/react";
import { GridSlider, ThemeWrapper } from "components";

import { CALENDAR_TYPES } from "../types";

describe("GriSlider component", () => {
  it("renders GridSlider with title", () => {
    render(
      <ThemeWrapper>
        <GridSlider
          isMondayFirst={false}
          maxDate={undefined}
          minDate={undefined}
          type={CALENDAR_TYPES.Month}
        />
      </ThemeWrapper>,
    );

    const title = screen.getByTestId("grid-slider");
    expect(title).toBeInTheDocument();
  });
});
