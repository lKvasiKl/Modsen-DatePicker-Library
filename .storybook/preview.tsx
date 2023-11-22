import React from "react";
import type { Preview } from "@storybook/react";

import { ThemeWrapper } from "../src/components";
import { CalendarProvider } from "../src/providers/CalendarProvider";
import { DateProvider } from "../src/providers/DateProvider";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    layout: "centered",
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <ThemeWrapper>
        <CalendarProvider>
          <DateProvider>
            <Story />
          </DateProvider>
        </CalendarProvider>
      </ThemeWrapper>
    ),
  ],
};

export default preview;
