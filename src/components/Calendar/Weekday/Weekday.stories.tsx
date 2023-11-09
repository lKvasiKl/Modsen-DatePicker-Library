import { Meta, StoryObj } from "@storybook/react";

import { WEEKDAYS } from "constants/calendarData";

import Weekday from "./index";

const meta: Meta<typeof Weekday> = {
  title: "Component/Weekday",
  component: Weekday,
  argTypes: {
    weekday: {
      name: "Weekday short name",
      control: "select",
      options: Object.values(WEEKDAYS),
    },
  },
};

export default meta;
type Story = StoryObj<typeof Weekday>;

export const Primary: Story = {
  args: {
    weekday: WEEKDAYS.Monday,
  },
};
