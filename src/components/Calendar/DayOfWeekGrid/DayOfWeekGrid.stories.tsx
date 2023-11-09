import { Meta, StoryObj } from "@storybook/react";

import { CALENDAR_TYPES } from "../types";

import DayOfWeekGrid from "./index";

const CALENDAR_TYPE_LABELS = {
  [CALENDAR_TYPES.Week]: "Week",
  [CALENDAR_TYPES.Month]: "Month",
  [CALENDAR_TYPES.Year]: "Year",
};

const meta: Meta<typeof DayOfWeekGrid> = {
  title: "Component/DayOfWeekGrid",
  component: DayOfWeekGrid,
  argTypes: {
    type: {
      name: "Calendar type",
      control: {
        type: "select",
        options: Object.values(CALENDAR_TYPES),
        labels: CALENDAR_TYPE_LABELS,
      },
    },
    isMondayFirst: {
      name: "Starts with Monday",
    },
  },
};

export default meta;
type Story = StoryObj<typeof DayOfWeekGrid>;

export const Primary: Story = {
  args: {
    type: CALENDAR_TYPES.Month,
    isMondayFirst: false,
  },
};

export const WeekCalendar: Story = {
  args: {
    type: CALENDAR_TYPES.Week,
    isMondayFirst: true,
  },
};

export const YearCalendar: Story = {
  args: {
    type: CALENDAR_TYPES.Year,
    isMondayFirst: true,
  },
};
